# Diário de Erros: DP-750 | Azure Databricks Data Engineer

Registro técnico de armadilhas, erros e pegadinhas encontradas durante a preparação para o exame DP-750.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Foco-Engenharia_de_Dados-FF3621?style=flat-square&labelColor=0F2027" alt="Engenharia de Dados" />
<img src="https://img.shields.io/badge/Prioridade-Garantir_100%25_de_Retenção-00C9A7?style=flat-square&labelColor=0F2027" alt="Retenção" />

</div>

<br />

---

## 🔍 Registro de Erros e Aprendizados

### Erro 1: Permissões de Leitura no Unity Catalog
- **O que marquei:** Concedi apenas `GRANT SELECT ON TABLE` para que o usuário conseguisse ler os dados de uma tabela.
- **Resposta correta:** O usuário precisa de permissão na hierarquia completa: `GRANT USE CATALOG`, `GRANT USE SCHEMA` e `GRANT SELECT ON TABLE`.
- **Causa raiz:** Esquecimento do modelo hierárquico obrigatório de 3 níveis do Unity Catalog.
- **Correção definitiva:** Sem a permissão `USE` no catálogo e no esquema pai, o usuário não consegue navegar até a tabela, mesmo tendo a permissão `SELECT` concedida no objeto filho.

---

### Erro 2: Managed Tables vs External Tables ao dropar
- **O que marquei:** Um comando `DROP TABLE` em uma external table apaga os arquivos de dados subjacentes no Azure Data Lake Storage (ADLS Gen2).
- **Resposta correta:** Em tabelas externas, `DROP TABLE` remove apenas a definição e metadados no Unity Catalog; os arquivos Parquet/Delta continuam intocados no storage.
- **Causa raiz:** Confusão entre o comportamento de Managed e External tables.
- **Correção definitiva:** Apenas tabelas gerenciadas (*Managed Tables*) têm seus arquivos físicos deletados do storage ao executar um `DROP TABLE`.

---

### Erro 3: VACUUM com período de retenção menor que o padrão
- **O que marquei:** Executar `VACUUM tabela RETAIN 0 HOURS` melhora a performance de consultas ativas sem efeitos colaterais.
- **Resposta correta:** Isso quebra consultas concorrentes de longa duração que estejam lendo arquivos antigos e destrói o histórico de Time Travel.
- **Causa raiz:** Não entender as salvaguardas de consistência do Delta Lake.
- **Correção definitiva:** O período de retenção padrão do VACUUM é de 7 dias (168 horas). Reduzir esse valor exige desativar uma trava de segurança (`spark.databricks.delta.vacuum.parallelDelete.enabled` / `spark.databricks.delta.retentionDurationCheck.enabled`) e só deve ser feito em manutenções programadas com plena consciência da perda de Time Travel.

---

### Erro 4: Expectation Modes em Delta Live Tables
- **O que marquei:** Usei `@dlt.expect_or_fail` achando que ele descartava o registro inválido e continuava o pipeline.
- **Resposta correta:** `@dlt.expect_or_fail` aborta e encerra a execução inteira do pipeline imediatamente se houver violação.
- **Causa raiz:** Troca de parâmetros de qualidade do DLT.
- **Correção definitiva:**
  - `@dlt.expect`: Alerta a violação na UI e métricas, mas **mantém** o registro.
  - `@dlt.expect_or_drop`: Descarta o registro que violou a regra e **continua** o processamento dos demais registros.
  - `@dlt.expect_or_fail`: **Falha e interrompe** o pipeline inteiro imediatamente.
