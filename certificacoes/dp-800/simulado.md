# Simulado de prática: DP-800

> ⚠️ **Aviso importante:** estas questões são **de treino, criadas por nós, não oficiais**.
> Elas servem para exercitar o conhecimento, mas **não substituem o simulado oficial da Microsoft**.
> Faça o [Practice Assessment oficial](https://learn.microsoft.com/credentials/certifications/developing-ai-enabled-database-solutions/practice/assessment?assessment-type=practice&assessmentId=91) antes da prova.

---

## Questões

### 1. Você precisa manter um histórico completo de todas as alterações feitas em uma tabela de preços ao longo do tempo, permitindo consultar o estado da tabela em qualquer data passada. Qual tipo de tabela usar?

- A) Ledger table
- B) In-memory OLTP table
- C) System-versioned temporal table
- D) Graph table

<details>
<summary>Ver resposta</summary>

**C) System-versioned temporal table**

Temporal tables mantêm automaticamente uma tabela de histórico com todas as versões de cada linha. Você pode consultar qualquer ponto no tempo com `FOR SYSTEM_TIME AS OF`. Ledger tables são para auditoria criptográfica, não para consultas históricas navegáveis.
</details>

---

### 2. Qual tipo de índice é mais adequado para uma tabela de data warehouse com bilhões de linhas onde as queries fazem principalmente agregações (`SUM`, `AVG`, `COUNT`) em poucas colunas?

- A) Nonclustered Rowstore Index
- B) Clustered Rowstore Index
- C) Clustered Columnstore Index
- D) Filtered Index

<details>
<summary>Ver resposta</summary>

**C) Clustered Columnstore Index**

Columnstore armazena dados por coluna, com alta compressão. Para queries analíticas que escaneiam grandes volumes e fazem agregações, o Columnstore é dramaticamente mais rápido que o Rowstore. Ele permite batch mode execution e data segment elimination.
</details>

---

### 3. Você precisa garantir que usuários do departamento de RH só vejam registros de funcionários do seu próprio departamento. Qual recurso de segurança usar?

- A) Dynamic Data Masking
- B) Always Encrypted
- C) Row-Level Security (RLS)
- D) Transparent Data Encryption (TDE)

<details>
<summary>Ver resposta</summary>

**C) Row-Level Security (RLS)**

RLS usa uma função de filtro (security predicate) que é aplicada automaticamente a todas as queries. Dynamic Data Masking mascara colunas, não filtra linhas. Always Encrypted protege dados em trânsito e em repouso. TDE criptografa o banco inteiro em disco.
</details>

---

### 4. Para armazenar representações vetoriais (embeddings) de textos diretamente em uma tabela SQL e realizar buscas por similaridade, qual recurso nativo do SQL é utilizado?

- A) JSON columns com `OPENJSON`
- B) Tipo de dado `vector` e operações de similaridade
- C) Full-text search com `CONTAINS`
- D) Spatial indexes com `geometry`

<details>
<summary>Ver resposta</summary>

**B) Tipo de dado `vector` e operações de similaridade**

O SQL agora suporta o tipo de dado `vector` nativamente, permitindo armazenar embeddings e realizar operações de similaridade (cosine similarity, dot product) diretamente em T-SQL. Full-text search é para busca textual, não semântica.
</details>

---

### 5. Sua empresa quer que um chatbot corporativo responda perguntas usando dados atualizados do banco SQL como contexto, sem modificar o modelo de IA. Qual padrão arquitetural implementar?

- A) Fine-tuning do modelo com os dados do banco
- B) Transfer learning com dataset exportado
- C) RAG (Retrieval-Augmented Generation)
- D) Prompt engineering estático

<details>
<summary>Ver resposta</summary>

**C) RAG (Retrieval-Augmented Generation)**

RAG busca dados relevantes no banco (via busca vetorial) e os injeta como contexto no prompt do LLM em tempo de consulta. Os dados estão sempre atualizados sem precisar retreinar o modelo. Fine-tuning altera o modelo e exige retreinamento.
</details>

---

### 6. Ao publicar um DACPAC em um banco de dados de produção, você nota que o script gerado contém um `DROP TABLE` para uma tabela que existe no destino mas não no projeto. O que acontece se você executar sem revisão?

- A) A tabela é preservada automaticamente
- B) A tabela e todos os seus dados são deletados
- C) Apenas os metadados são removidos
- D) O deploy falha com erro de validação

<details>
<summary>Ver resposta</summary>

**B) A tabela e todos os seus dados são deletados**

DACPAC sincroniza o schema do destino com o que está definido no projeto. Se um objeto não existe no DACPAC, o script de diferença inclui um `DROP`. Use a opção `Block on Possible Data Loss` no publish profile para impedir isso.
</details>

---

### 7. Qual função T-SQL você usa para extrair um valor escalar de uma propriedade JSON armazenada em uma coluna `nvarchar`?

- A) `OPENJSON()`
- B) `JSON_VALUE()`
- C) `JSON_QUERY()`
- D) `JSON_MODIFY()`

<details>
<summary>Ver resposta</summary>

**B) `JSON_VALUE()`**

`JSON_VALUE()` extrai um valor escalar (string, número) de um caminho JSON. `JSON_QUERY()` retorna um objeto ou array JSON completo. `OPENJSON()` transforma JSON em conjunto de linhas tabulares. `JSON_MODIFY()` altera um valor dentro do JSON.
</details>

---

### 8. Para cenários regulatórios que exigem prova criptográfica de que registros financeiros não foram adulterados, qual tipo de tabela usar?

- A) System-versioned temporal table
- B) Memory-optimized table
- C) Updatable ledger table
- D) External table

<details>
<summary>Ver resposta</summary>

**C) Updatable ledger table**

Ledger tables mantêm um log de transações com hashes encadeados que formam uma cadeia criptográfica. Qualquer alteração posterior nos dados pode ser detectada verificando a integridade dos hashes. Temporal tables rastreiam histórico, mas sem prova criptográfica.
</details>

---

### 9. Qual ferramenta do SQL Server permite identificar regressões de performance de queries ao longo do tempo, comparando planos de execução entre diferentes períodos?

- A) Extended Events
- B) Dynamic Management Views (DMVs)
- C) Query Store
- D) SQL Profiler

<details>
<summary>Ver resposta</summary>

**C) Query Store**

Query Store captura e armazena o histórico de planos de execução e métricas de runtime para cada query. Você pode comparar planos entre períodos, identificar regressões e até forçar um plano anterior. DMVs mostram o estado atual. Extended Events capturam eventos específicos.
</details>

---

### 10. Ao integrar Azure OpenAI com um banco SQL para implementar RAG, qual é a sequência correta de operações quando um usuário faz uma pergunta?

- A) Pergunta → LLM gera SQL → Executa query → Retorna resultado
- B) Pergunta → Gera embedding da pergunta → Busca vetorial no banco → Envia contexto + pergunta ao LLM → Retorna resposta
- C) Pergunta → Full-text search no banco → Retorna resultado direto
- D) Pergunta → Fine-tune do modelo → Gera resposta

<details>
<summary>Ver resposta</summary>

**B) Pergunta → Gera embedding da pergunta → Busca vetorial no banco → Envia contexto + pergunta ao LLM → Retorna resposta**

No padrão RAG: (1) a pergunta é convertida em embedding, (2) uma busca de similaridade vetorial encontra os dados mais relevantes no banco, (3) esses dados são injetados como contexto no prompt do LLM, (4) o LLM gera uma resposta fundamentada nos dados reais.
</details>
