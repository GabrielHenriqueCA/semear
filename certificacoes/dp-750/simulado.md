# Simulado de prática: DP-750

> ⚠️ **Aviso importante:** estas questões são **de treino, criadas por nós, não oficiais**.
> Elas servem para exercitar o conhecimento, mas **não substituem o simulado oficial da Microsoft**.
> Consulte o [Guia oficial no Microsoft Learn](https://learn.microsoft.com/credentials/certifications/resources/study-guides/dp-750) antes da prova.

---

## Questões

### 1. Você precisa ingerir continuamente arquivos JSON que chegam em um container do Azure Data Lake. Os arquivos chegam em intervalos irregulares. Qual abordagem é mais eficiente?

- A) Agendar um job para listar os arquivos e usar `spark.read.json()` a cada hora
- B) Usar Auto Loader com `cloudFiles` format
- C) Usar COPY INTO a cada 5 minutos
- D) Criar uma External Table apontando para o diretório

<details>
<summary>Ver resposta</summary>

**B) Usar Auto Loader com `cloudFiles` format**

Auto Loader usa file notification ou directory listing com checkpointing para processar apenas arquivos novos, de forma incremental e eficiente. COPY INTO funciona, mas o Auto Loader é mais eficiente para ingestão contínua. Listar e ler manualmente não escala.
</details>

---

### 2. Qual comando do Delta Lake você usa para compactar arquivos pequenos em arquivos maiores, melhorando a performance de leitura?

- A) `VACUUM`
- B) `OPTIMIZE`
- C) `Z-ORDER`
- D) `MERGE INTO`

<details>
<summary>Ver resposta</summary>

**B) `OPTIMIZE`**

OPTIMIZE compacta os arquivos pequenos (small file problem). Z-ORDER pode ser usado junto com OPTIMIZE para ordenar dados por coluna, melhorando data skipping. VACUUM remove arquivos antigos. MERGE faz upsert.
</details>

---

### 3. No Unity Catalog, qual é a hierarquia correta de objetos?

- A) Catalog > Metastore > Schema > Table
- B) Metastore > Schema > Catalog > Table
- C) Metastore > Catalog > Schema > Table
- D) Schema > Catalog > Metastore > Table

<details>
<summary>Ver resposta</summary>

**C) Metastore > Catalog > Schema > Table**

Metastore é o nível mais alto (um por região). Dentro dele ficam os Catalogs, que contêm Schemas (databases), que contêm Tables, Views, Volumes e Functions. Formato de referência: `catalog.schema.table`.
</details>

---

### 4. Qual é a principal diferença entre uma Managed Table e uma External Table no Unity Catalog?

- A) Managed Tables são somente leitura, External Tables permitem escrita
- B) Managed Tables têm dados e metadados gerenciados pelo Unity Catalog; External Tables apontam para dados no seu storage
- C) External Tables são mais rápidas que Managed Tables
- D) Managed Tables não suportam Delta format

<details>
<summary>Ver resposta</summary>

**B) Managed Tables têm dados e metadados gerenciados pelo Unity Catalog; External Tables apontam para dados no seu storage**

Quando você deleta uma Managed Table, os dados são apagados. Quando deleta uma External Table, só os metadados saem do catálogo, os dados continuam no storage.
</details>

---

### 5. Você tem uma tabela Delta com dados históricos. Precisa consultar o estado da tabela como era há 3 dias. Qual recurso do Delta Lake permite isso?

- A) Z-ORDER
- B) Change Data Feed
- C) Time Travel
- D) VACUUM

<details>
<summary>Ver resposta</summary>

**C) Time Travel**

Delta Lake guarda um log de transações (transaction log) que permite consultar versões anteriores da tabela. Ex: `SELECT * FROM tabela TIMESTAMP AS OF '2026-09-27'` ou `SELECT * FROM tabela VERSION AS OF 5`. Cuidado: VACUUM remove arquivos antigos e pode quebrar time travel para versões antigas.
</details>

---

### 6. Em um job multi-task no Databricks, a Task B depende da Task A. Se a Task A falhar, o que acontece com a Task B?

- A) Task B executa normalmente
- B) Task B é pulada (skipped)
- C) Task B entra em fila e espera a Task A ser corrigida
- D) O job inteiro reinicia do zero

<details>
<summary>Ver resposta</summary>

**B) Task B é pulada (skipped)**

Em jobs multi-task com dependências, se uma task upstream falhar, as tasks downstream são automaticamente puladas. Você pode configurar retry policies na task que falhou e reexecutar o job a partir da falha.
</details>

---

### 7. Na Medallion Architecture, qual camada contém os dados brutos, exatamente como foram ingeridos?

- A) Gold
- B) Silver
- C) Bronze
- D) Platinum

<details>
<summary>Ver resposta</summary>

**C) Bronze**

Bronze = dado bruto (raw), exatamente como chegou da fonte. Silver = dado limpo, conformado e deduplicado. Gold = dado agregado, pronto para consumo por analistas e dashboards.
</details>

---

### 8. Qual trigger mode do Structured Streaming processa todos os dados disponíveis e para imediatamente?

- A) `processingTime="10 seconds"`
- B) `once=True`
- C) `availableNow=True`
- D) `continuous="1 second"`

<details>
<summary>Ver resposta</summary>

**C) `availableNow=True`**

`availableNow=True` processa todos os dados disponíveis no momento em micro-batches e para. `once=True` (deprecated) fazia algo parecido mas em um único batch. `processingTime` define intervalo contínuo. `continuous` é experimental para baixa latência.
</details>

---

### 9. Você quer combinar dados de uma tabela de staging com uma tabela Delta existente, inserindo registros novos e atualizando registros existentes. Qual comando usar?

- A) INSERT OVERWRITE
- B) COPY INTO
- C) MERGE INTO
- D) CREATE OR REPLACE TABLE

<details>
<summary>Ver resposta</summary>

**C) MERGE INTO**

MERGE INTO é o comando para upsert (update + insert) no Delta Lake. Ele compara registros pela chave e aplica WHEN MATCHED (update) e WHEN NOT MATCHED (insert). INSERT OVERWRITE substitui tudo. COPY INTO é para ingestão.
</details>

---

### 10. Qual recurso do Delta Live Tables (DLT) permite definir regras de qualidade de dados que rejeitam ou sinalizam registros inválidos?

- A) VACUUM
- B) Expectations
- C) Schema Enforcement
- D) Auto Loader

<details>
<summary>Ver resposta</summary>

**B) Expectations**

Expectations no DLT são constraints declarativos de qualidade (ex: `CONSTRAINT valid_id EXPECT (id IS NOT NULL) ON VIOLATION DROP ROW`). Eles podem alertar, droppar ou falhar o pipeline quando registros não atendem às regras. Schema Enforcement é do Delta Lake (rejeita dados com schema diferente).
</details>
