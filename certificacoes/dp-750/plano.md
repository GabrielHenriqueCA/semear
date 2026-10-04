# Plano de Estudos SEMEAR: DP-750 | Azure Databricks Data Engineer

Planejamento técnico intensivo em **4 semanas**, projetado para consolidar os 4 domínios da prova através de prática de código e simulados cumulativos.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Duração-4_Semanas-FF3621?style=flat-square&labelColor=0F2027" alt="Duração" />
<img src="https://img.shields.io/badge/Dedicação-60_min_/_dia-00C9A7?style=flat-square&labelColor=0F2027" alt="Dedicação" />
<img src="https://img.shields.io/badge/Meta-Aprovação_com_900+-5EEAD4?style=flat-square&labelColor=0F2027" alt="Meta" />

</div>

<br />

---

## 🗓️ Cronograma Semana a Semana

### Semana 1: Semear + Domínio 1 (Ambiente & Clusters)
- **Segunda-feira (Semear):** Leitura completa da ementa e guia oficial [Skills Measured](recursos.md). Mapear conceitos de compute e networking do Databricks. Pausa de 2 dias.
- **Quarta-feira (Estudar):** Tipos de cluster (Job vs All-Purpose), Single-node vs Multi-node, pools de instâncias e Secret Scopes com Azure Key Vault.
- **Quinta-feira (Mostrar):** Gravar áudio de 4 minutos explicando: *"Por que usar Job Clusters em vez de All-Purpose Clusters em pipelines de produção, considerando custo e isolamento?"*.
- **Sexta-feira (Exercitar):** Resolver 10 questões sobre arquitetura de clusters e políticas de compute. Registrar erros em [erros.md](erros.md).
- **Sábado (Avaliar):** Simulado prático de 15 questões do Domínio 1.

### Semana 2: Domínio 2 (Unity Catalog & Governança de Dados)
- **Segunda-feira (Estudar):** Metastore, Catalogs, Schemas, Volumes e diferenças entre Managed Tables e External Tables.
- **Terça-feira (Mostrar):** Explicar em voz alta como funciona a hierarquia de permissões no Unity Catalog (`GRANT USE CATALOG`, `USE SCHEMA`, `SELECT`).
- **Quarta-feira (Exercitar):** Resolução de questões sobre segurança a nível de linha (Row Filter) e mascaramento de colunas (Column Mask).
- **Quinta-feira (Estudar):** Linhagem de dados e governança de volumes gerenciados vs externos.
- **Sexta-feira (Revisar):** Reouvir áudios gravados e refazer questões com erros conceituais da Semana 1.
- **Sábado (Avaliar):** Simulado semanal cumulativo (Domínios 1 e 2).

### Semana 3: Domínio 3 (Delta Lake, Auto Loader & Streaming)
- **Segunda-feira (Estudar):** Transações ACID, Time Travel, Liquid Clustering, `OPTIMIZE`, `VACUUM` e `MERGE INTO`.
- **Terça-feira (Mostrar):** Gravar áudio explicando o funcionamento do Auto Loader (`cloudFiles`) e como ele gerencia o estado usando checkpoints.
- **Quarta-feira (Exercitar):** 12 questões com cenários de pipelines de ingestão contínua e transformações em PySpark/SQL.
- **Quinta-feira (Estudar):** Structured Streaming (triggers, output modes, garantias exactly-once com writeStream).
- **Sexta-feira (Revisar):** Revisão completa das regras de retenção do VACUUM e operações Delta.
- **Sábado (Avaliar):** Simulado semanal cumulativo cobrindo Domínios 1, 2 e 3.

### Semana 4: Domínio 4 (DLT & Lakeflow Pipelines) + Reta Final
- **Segunda-feira (Estudar):** Delta Live Tables (DLT), regras de qualidade com `@dlt.expect`, Lakeflow Jobs e Databricks Asset Bundles (DABs).
- **Terça-feira (Mostrar):** Explicar as diferenças práticas entre `expect`, `expect_or_drop` e `expect_or_fail`.
- **Quarta-feira (Exercitar):** Bateria intensiva de questões sobre monitoramento e troubleshooting de jobs.
- **Quinta-feira (Revisar):** Revisão geral do [erros.md](erros.md).
- **Sexta-feira (Avaliar):** Simulado geral com as questões de [simulado.md](simulado.md) e simulado da Databricks Academy.
- **Fim de semana:** Descanso pré-prova e confiança!
