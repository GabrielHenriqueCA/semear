# Plano de Estudos SEMEAR: DP-800 | SQL AI Developer Associate

Planejamento técnico intensivo em **4 semanas**, projetado para consolidar os 3 domínios da prova através de prática com T-SQL, cenários de IA e simulados cumulativos.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Duração-4_Semanas-0078D4?style=flat-square&labelColor=0F2027" alt="Duração" />
<img src="https://img.shields.io/badge/Dedicação-60_min_/_dia-00C9A7?style=flat-square&labelColor=0F2027" alt="Dedicação" />
<img src="https://img.shields.io/badge/Meta-Aprovação_com_900+-5EEAD4?style=flat-square&labelColor=0F2027" alt="Meta" />

</div>

<br />

---

## 🗓️ Cronograma Semana a Semana

### Semana 1: Semear + Domínio 1 — Parte A (Design de Schemas & Tabelas Especializadas)
- **Segunda-feira (Semear):** Leitura completa da ementa e guia oficial [Skills Measured](recursos.md). Mapear conceitos de design de banco, tipos de tabela e indexação. Pausa de 2 dias.
- **Quarta-feira (Estudar):** Tipos de tabela: temporal tables (system-versioned), ledger tables, in-memory OLTP tables. Constraints, sequences e data types avançados.
- **Quinta-feira (Mostrar):** Gravar áudio de 4 minutos explicando: *"Quando usar temporal tables vs ledger tables? Qual problema cada uma resolve?"*.
- **Sexta-feira (Exercitar):** Resolver 10 questões sobre design de schemas e tabelas especializadas. Registrar erros em [erros.md](erros.md).
- **Sábado (Avaliar):** Simulado prático de 15 questões do Domínio 1 (parte A).

### Semana 2: Domínio 1 — Parte B (Indexação, JSON & External Tables) + Domínio 2 — Parte A (Segurança)
- **Segunda-feira (Estudar):** Rowstore indexes vs Columnstore indexes. Quando usar cada um. Filtered indexes. JSON no SQL: `OPENJSON`, `JSON_VALUE`, `JSON_QUERY`.
- **Terça-feira (Mostrar):** Explicar em voz alta como funciona a escolha entre Clustered Columnstore Index e Nonclustered Rowstore Index para workloads mistos.
- **Quarta-feira (Exercitar):** Resolução de questões sobre indexação, JSON e external tables (PolyBase).
- **Quinta-feira (Estudar):** Row-Level Security (RLS), Dynamic Data Masking, Always Encrypted e TDE. Controle de acesso granular.
- **Sexta-feira (Revisar):** Reouvir áudios gravados e refazer questões com erros conceituais da Semana 1.
- **Sábado (Avaliar):** Simulado semanal cumulativo (Domínio 1 completo + Segurança).

### Semana 3: Domínio 2 — Parte B (Performance & CI/CD) + Domínio 3 — Parte A (Vetores & Embeddings)
- **Segunda-feira (Estudar):** Query Store, planos de execução, estatísticas, Automatic Tuning, DMVs e Extended Events.
- **Terça-feira (Mostrar):** Gravar áudio explicando como usar o Query Store para detectar regressões de performance.
- **Quarta-feira (Exercitar):** 12 questões com cenários de tuning de performance e CI/CD com DACPAC e GitHub Actions.
- **Quinta-feira (Estudar):** Tipo `vector` no SQL, geração de embeddings, armazenamento vetorial e operações de similaridade (cosine, dot product).
- **Sexta-feira (Revisar):** Revisão completa de segurança e performance. Refazer erros acumulados.
- **Sábado (Avaliar):** Simulado semanal cumulativo cobrindo Domínios 1, 2 e início do 3.

### Semana 4: Domínio 3 — Parte B (RAG & IA no SQL) + Reta Final
- **Segunda-feira (Estudar):** RAG com Azure OpenAI, integração do SQL como fonte de contexto para LLMs, funções T-SQL de IA.
- **Terça-feira (Mostrar):** Explicar as diferenças práticas entre RAG e fine-tuning, e quando o banco de dados participa de cada abordagem.
- **Quarta-feira (Exercitar):** Bateria intensiva de questões sobre vetores, RAG e integração com Azure OpenAI.
- **Quinta-feira (Revisar):** Revisão geral do [erros.md](erros.md).
- **Sexta-feira (Avaliar):** Simulado geral com as questões de [simulado.md](simulado.md) e practice assessment oficial da Microsoft.
- **Fim de semana:** Descanso pré-prova e confiança!
