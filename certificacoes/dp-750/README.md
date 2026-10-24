<div align="center">

<img src="../../assets/banner-dp750.svg" width="100%" alt="Azure Databricks DP-750: Data Engineer Associate" />

<br /><br />

<img src="https://img.shields.io/badge/Status-Aprovado_✅-00C9A7?style=flat-square&labelColor=0F2027" alt="Aprovado" />
<img src="https://img.shields.io/badge/Nível-Associate_/_Avançado-FF3621?style=flat-square&labelColor=0F2027" alt="Nível Associate" />
<img src="https://img.shields.io/badge/Credencial-65C136C3B11C5706-5EEAD4?style=flat-square&labelColor=0F2027" alt="ID da Credencial" />
<img src="https://img.shields.io/badge/Simulado-10_Questões_Técnicas-7CFF6B?style=flat-square&labelColor=0F2027" alt="Simulado" />

<br /><br />

[**Recursos Oficiais**](recursos.md) · [**Simulado de Treino**](simulado.md) · [**Plano de Estudos**](plano.md) · [**Diário de Erros**](erros.md) · [**Resumo por Domínio**](resumos/resumo-completo.md)

</div>

<img src="../../assets/divider-databricks.svg" width="100%" height="6" alt="" />

## 📋 Visão Geral da Prova

<table>
<tr>
<th width="30%">Item</th>
<th width="70%">Detalhe Oficial</th>
</tr>
<tr>
<td><strong>Página oficial</strong></td>
<td><a href="https://learn.microsoft.com/credentials/certifications/resources/study-guides/dp-750">Microsoft Learn: DP-750</a></td>
</tr>
<tr>
<td><strong>Credencial oficial</strong></td>
<td><a href="https://learn.microsoft.com/api/credentials/share/pt-br/GabrielHenrique-6044/65C136C3B11C5706?sharingId">Verificar no portal Microsoft Learn</a> *(Emitida em set. de 2026)*</td>
</tr>
<tr>
<td><strong>Nota de corte</strong></td>
<td>700 / 1000 pontos</td>
</tr>
<tr>
<td><strong>Foco principal</strong></td>
<td>Delta Lake, Unity Catalog, Lakeflow Pipelines, Structured Streaming, Databricks Asset Bundles e PySpark/SQL</td>
</tr>
<tr>
<td><strong>Pré-requisitos recomendados</strong></td>
<td>Experiência prática em arquiteturas de dados em nuvem, Apache Spark e governança corporativa</td>
</tr>
</table>

<img src="../../assets/divider-databricks.svg" width="100%" height="6" alt="" />

## 🎯 Domínios e Distribuição de Pesos

<table>
<tr>
<th width="50%">Domínio Oficial</th>
<th width="20%" align="center">Peso no Exame</th>
<th width="30%">Foco de Estudo</th>
</tr>
<tr>
<td><strong>1. Set up and configure an Azure Databricks environment</strong></td>
<td align="center"><img src="https://img.shields.io/badge/15--20%25-0078D4?style=flat-square" /></td>
<td>Workspaces, clusters, compute pools, Key Vault integration, networking</td>
</tr>
<tr>
<td><strong>2. Secure and govern Unity Catalog objects</strong></td>
<td align="center"><img src="https://img.shields.io/badge/15--20%25-FF3621?style=flat-square" /></td>
<td>Metastore, catalogs, schemas, managed vs external tables, lineage, dynamic views</td>
</tr>
<tr>
<td><strong>3. Prepare and process data</strong></td>
<td align="center"><img src="https://img.shields.io/badge/30--35%25-00C9A7?style=flat-square" /></td>
<td>Delta Lake, Liquid Clustering, Auto Loader, Structured Streaming, Medallion Architecture</td>
</tr>
<tr>
<td><strong>4. Deploy and maintain data pipelines and workloads</strong></td>
<td align="center"><img src="https://img.shields.io/badge/30--35%25-5EEAD4?style=flat-square&labelColor=0F2027" /></td>
<td>Lakeflow Declarative Pipelines, DLT expectations, Databricks Asset Bundles (DABs), CI/CD</td>
</tr>
</table>

<img src="../../assets/divider-databricks.svg" width="100%" height="6" alt="" />

## 🧠 Tópicos Críticos por Domínio

### 1. Setup & Environment (15 a 20%)
- **Compute Profiles:** Job Clusters (isolados, efêmeros, menor custo para produção) versus All-Purpose Clusters (colaborativos, exploratórios para analistas e engenheiros).
- **Segurança de Workspace:** Integração de segredos via Databricks Secret Scopes respaldados por Azure Key Vault.
- **Rede e Isolamento:** VNet Injection e Private Link para tráfego privado sem exposição à internet pública.

### 2. Unity Catalog & Governança (15 a 20%)
- **Namespace de 3 Níveis:** `catalog.schema.table` ou `catalog.schema.volume`.
- **Managed Tables vs External Tables:**
  - *Managed:* O Databricks gerencia metadados e os arquivos físicos no storage do metastore. Um `DROP TABLE` apaga ambos.
  - *External:* O Databricks referencia uma pasta existente em storage externo. Um `DROP TABLE` remove apenas o metadado, preservando os arquivos físicos.
- **Segurança Granular:** Dynamic Views com mascaramento condicional de colunas (`MASK`) e filtragem de linhas (`ROW FILTER`).
- **Linhagem de Dados:** Rastreamento ponta a ponta desde a ingestão até dashboards via Unity Catalog.

### 3. Processamento de Dados com Delta Lake & Streaming (30 a 35%)
- **Delta Lake Core:** Transações ACID, Time Travel com `VERSION AS OF` ou `TIMESTAMP AS OF`.
- **Otimizações:** `OPTIMIZE` para compactação de arquivos pequenos, `VACUUM` para limpeza de arquivos antigos (respeitando o período de retenção) e **Liquid Clustering** para particionamento flexível moderno.
- **Auto Loader (`cloudFiles`):** Ingestão contínua e escalável com detecção automática de novos arquivos e evolução de schema (`schemaEvolutionMode`).
- **Structured Streaming:** Checkpointing obrigatório para garantia de entrega *exactly-once* e modos de trigger (`availableNow=True` vs micro-batches).

### 4. Pipelines & Lakeflow Workflows (30 a 35%)
- **Delta Live Tables (DLT):** Pipelines declarativos em SQL e Python com monitoramento integrado de qualidade via `@dlt.expect`, `@dlt.expect_or_drop` e `@dlt.expect_or_fail`.
- **Lakeflow Jobs:** Orquestração de tarefas encadeadas com dependências condicionais, retry automático e notificações.
- **Databricks Asset Bundles (DABs):** Automação de CI/CD para deploy de pipelines e recursos como código versionado no Git.

<img src="../../assets/divider-databricks.svg" width="100%" height="6" alt="" />

## 💡 Dicas de Ouro para o Dia da Prova

1. **Auto Loader vs COPY INTO:** Auto Loader é a escolha ideal quando novos arquivos chegam continuamente ao Data Lake com milhões de arquivos no diretório. COPY INTO é recomendado para cargas estáticas pontuais com volume moderado de arquivos.
2. **Liquid Clustering:** O Databricks recomenda Liquid Clustering em vez de particionamento tradicional com Hive para tabelas analíticas com padrões variados de consulta.
3. **Cuidado com o VACUUM:** Executar `VACUUM` com retenção zero ou menor que a padrão (7 dias) quebra consultas ativas e impede o uso do Time Travel para versões anteriores ao período limpo.

<img src="../../assets/divider-databricks.svg" width="100%" height="6" alt="" />

## 📂 Arquivos Desta Pasta

- [recursos.md](recursos.md): Guias oficiais da Microsoft e trilhas da Databricks Academy.
- [simulado.md](simulado.md): 10 questões práticas avançadas comentadas com gabarito retrátil.
- [plano.md](plano.md): Roteiro estruturado de preparação para engenharia de dados.
- [erros.md](erros.md): Diário de erros com análise das principais armadilhas de prova.
- [resumos/resumo-completo.md](resumos/resumo-completo.md): Guia de referência técnica rápida.

<img src="../../assets/divider-databricks.svg" width="100%" height="6" alt="" />

<div align="center">

<img src="../../assets/logo.svg" width="48" alt="Semear logo" />
<br />
<strong><em>Plante hoje. Colha alta performance em dados com Databricks na prova.</em></strong>

</div>
