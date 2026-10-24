# Resumo Técnico: DP-800 | SQL AI Developer Associate

Referência rápida dos conceitos-chave organizados por domínio do exame.

---

## Domínio 1: Design and Develop Database Solutions (35–40%)

### Tabelas Especializadas
| Tipo | Quando Usar | Comportamento Chave |
|---|---|---|
| **Temporal (system-versioned)** | Histórico de mudanças, consultas `AS OF` | Mantém tabela de histórico automática com período de validade |
| **Ledger** | Auditoria regulatória, prova de não-adulteração | Hashes encadeados criptograficamente, imutabilidade verificável |
| **In-memory OLTP** | OLTP de ultra-baixa latência | Tabelas e procs compilados nativamente em memória |
| **Graph** | Relações complexas (redes sociais, hierarquias) | Nós (`NODE`) e arestas (`EDGE`) com `MATCH` no T-SQL |
| **External** | Virtualizar dados de fontes externas | Metadados no SQL, dados no storage externo (PolyBase) |

### Indexação
| Tipo | Workload Ideal | Nota |
|---|---|---|
| **Clustered Rowstore (B-tree)** | OLTP, buscas pontuais, range scans | 1 por tabela, define a ordem física dos dados |
| **Nonclustered Rowstore** | Colunas frequentes em `WHERE`/`JOIN` | Múltiplos por tabela, ponteiro para dados |
| **Clustered Columnstore** | Data warehouse, agregações em massa | Compressão colunar, batch mode execution |
| **Nonclustered Columnstore** | Workload misto (OLTP + analytics) | Adiciona analytics sem trocar o clustered index |
| **Filtered Index** | Subsets de dados com filtro fixo | Menor, mais rápido, ideal para colunas com muitos NULLs |

### JSON no SQL
- `JSON_VALUE(col, '$.prop')` → valor escalar
- `JSON_QUERY(col, '$.obj')` → objeto/array JSON
- `OPENJSON(col)` → transforma JSON em linhas tabulares
- `JSON_MODIFY(col, '$.prop', val)` → altera valor dentro do JSON
- Indexar: criar coluna computada + índice sobre ela

---

## Domínio 2: Secure, Optimize, and Deploy (35–40%)

### Segurança em Camadas
| Recurso | O que protege | Nível |
|---|---|---|
| **TDE** | Dados em repouso (disco) | Banco inteiro |
| **Always Encrypted** | Dados em trânsito + repouso | Colunas específicas, chave no cliente |
| **Dynamic Data Masking** | Dados visíveis (exibição) | Colunas, máscaras configuráveis |
| **Row-Level Security** | Linhas acessíveis por usuário | Tabela, via security predicate function |

### Performance
- **Query Store:** histórico de planos + métricas de runtime. Permite forçar planos e detectar regressões.
- **Automatic Tuning:** SQL cria/dropa índices e corrige planos automaticamente com base no Query Store.
- **DMVs:** `sys.dm_exec_query_stats`, `sys.dm_exec_requests`, `sys.dm_os_wait_stats` — diagnóstico em tempo real.
- **Extended Events:** sessões de captura leve de eventos para troubleshooting avançado.

### CI/CD
- **DACPAC:** snapshot do schema. `sqlpackage publish` compara e gera script de diff.
- **Database Projects (`.sqlproj`):** schema como código, versionado no Git.
- **GitHub Actions:** automação de build + deploy + testes de schema.
- **⚠️ Cuidado:** `Block on Possible Data Loss` no publish profile para evitar `DROP` acidental.

---

## Domínio 3: Implement AI Capabilities (25–30%)

### Vetores e Embeddings
- Tipo `vector` nativo no SQL para armazenar embeddings
- Geração de embeddings via modelos (Azure OpenAI, etc.)
- Operações de similaridade: cosine similarity, dot product
- Índices vetoriais para busca eficiente em grandes volumes

### RAG (Retrieval-Augmented Generation)
```
Pergunta do usuário
    ↓
Gera embedding da pergunta
    ↓
Busca vetorial no banco SQL (top-K mais similares)
    ↓
Injeta resultados como contexto no prompt
    ↓
LLM (Azure OpenAI) gera resposta fundamentada
```

### RAG vs Fine-tuning
| Aspecto | RAG | Fine-tuning |
|---|---|---|
| Dados | Sempre atualizados (tempo real) | Snapshot do momento do treino |
| Modelo | Não altera | Altera pesos do modelo |
| Custo | Busca por query | Retreinamento periódico |
| Quando usar | Dados dinâmicos, corporativos | Estilo, formato, domínio muito específico |

### Funções T-SQL de IA
- Extensões nativas para invocar modelos de IA de dentro de queries
- Integração direta com Azure OpenAI sem sair do contexto SQL
- Geração de embeddings, classificação e extração via T-SQL
