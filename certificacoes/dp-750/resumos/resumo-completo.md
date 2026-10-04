# Resumo Consolidado de Alta Retenção: DP-750

Guia de referência técnica rápida com os conceitos centrais da certificação **DP-750 | Implementing Data Engineering Solutions Using Azure Databricks**.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Databricks-Delta_Lake_&_Unity_Catalog-FF3621?style=flat-square&logo=databricks&logoColor=white" alt="Databricks" />
<img src="https://img.shields.io/badge/Azure-DP--750-0078D4?style=flat-square&logo=microsoftazure&logoColor=white" alt="Azure DP-750" />

</div>

<br />

---

## 📌 Domínio 1: Ambiente Databricks & Compute

### Tipos de Clusters
- **All-Purpose Clusters:** Projetados para exploração e análise interativa por múltiplos usuários. Compartilham estado e mantêm custo contínuo enquanto ativos.
- **Job Clusters:** Clusters efêmeros e dedicados criados sob demanda especificamente para rodar um Lakeflow Job programado. Encerram assim que o job finaliza, oferecendo menor custo e isolamento de dependências.
- **Instance Pools:** Conjuntos de instâncias de máquinas virtuais pré-alocadas em estado ocioso que reduzem o tempo de inicialização de clusters de minutos para segundos.

---

## 📌 Domínio 2: Governança com Unity Catalog

### Hierarquia de 3 Níveis
```
Unity Catalog Metastore
 └── Catalogs (nível de isolamento de negócio ou ambiente: dev, staging, prod)
      └── Schemas / Databases (agrupamento lógico de entidades)
           ├── Tables (Managed e External)
           ├── Views (Padrão e Dynamic Views)
           └── Volumes (Arquivos brutos não tabulares: PDFs, imagens, logs)
```

### Segurança e dynamic views
- **Row Filtering:** Permite que determinados grupos vejam apenas linhas específicas com base em condições como `IS_ACCOUNT_GROUP_MEMBER('admin')`.
- **Column Masking:** Mascara colunas sensíveis (ex: CPF, dados de cartão) para usuários sem privilégios suficientes.

---

## 📌 Domínio 3: Delta Lake, Auto Loader & Streaming

### Recursos do Delta Lake
- **Transações ACID:** Garante consistência usando log transacional estruturado (`_delta_log/`).
- **Time Travel:** Permite consultar estados históricos da tabela através de `SELECT * FROM tabela VERSION AS OF 3` ou `TIMESTAMP AS OF '2026-09-01'`.
- **Liquid Clustering:** Otimização que substitui o particionamento tradicional com `CLUSTER BY (col1, col2)`. Suporta reorganização dinâmica sem necessidade de reescrever a tabela inteira.
- **Otimizações de Armazenamento:**
  - `OPTIMIZE tabela`: Compacta arquivos pequenos em arquivos ideais de aproximadamente 1 GB.
  - `VACUUM tabela`: Remove arquivos excluídos logicamente que excederam o período de retenção (padrão de 7 dias).

### Ingestão com Auto Loader
- Usa a biblioteca `cloudFiles` para ingerir novos arquivos de forma incremental do storage em nuvem.
- Suporta inferência de schema e evolução automática (`schemaEvolutionMode = "addNewColumns"`).

---

## 📌 Domínio 4: Pipelines Declarativos (DLT) & CI/CD

### Delta Live Tables (DLT)
- Pipelines baseados em declaração de tabelas com `@dlt.table` ou `@dlt.view`.
- **Qualidade de Dados com Expectations:**
  - `@dlt.expect("regra", "condição")`: Notifica falhas nas métricas do pipeline sem descartar o registro.
  - `@dlt.expect_or_drop("regra", "condição")`: Descarta registros que não cumpram a condição.
  - `@dlt.expect_or_fail("regra", "condição")`: Interrompe a execução do pipeline imediatamente se houver falha.

### Databricks Asset Bundles (DABs)
- Padrão recomendado pela Databricks para definir infraestrutura e pipelines como código em arquivos YAML versionados no Git, permitindo deploy automatizado entre ambientes de desenvolvimento e produção via CI/CD.
