# Diário de Erros: DP-800 | SQL AI Developer Associate

Registro técnico de armadilhas, erros e pegadinhas encontradas durante a preparação para o exame DP-800.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Foco-SQL_+_IA-0078D4?style=flat-square&labelColor=0F2027" alt="SQL + IA" />
<img src="https://img.shields.io/badge/Prioridade-Garantir_100%25_de_Retenção-00C9A7?style=flat-square&labelColor=0F2027" alt="Retenção" />

</div>

<br />

---

## 🔍 Registro de Erros e Aprendizados

### Erro 1: Temporal Tables vs Ledger Tables
- **O que marquei:** Usei ledger table para um cenário que exigia apenas versionamento histórico de dados de funcionários.
- **Resposta correta:** Temporal tables (system-versioned) são a escolha para rastrear mudanças ao longo do tempo com consultas `AS OF`. Ledger tables são para cenários de auditoria criptograficamente verificável e imutabilidade.
- **Causa raiz:** Confundir "auditoria" com "histórico". Temporal = histórico navegável. Ledger = prova criptográfica de não-adulteração.
- **Correção definitiva:** Temporal tables mantêm uma tabela de histórico automática e permitem consultar qualquer ponto no tempo. Ledger tables usam hashes encadeados para provar que os dados não foram alterados — ideal para compliance financeiro e regulatório.

---

### Erro 2: Columnstore Index em tabela OLTP
- **O que marquei:** Criar um Clustered Columnstore Index em uma tabela com muitos `INSERT`/`UPDATE`/`DELETE` pontuais para melhorar performance.
- **Resposta correta:** Columnstore é otimizado para leitura analítica em massa (scan de grandes volumes). Para OLTP com muitas operações pontuais, Rowstore (B-tree) é mais adequado.
- **Causa raiz:** Associar "columnstore = sempre mais rápido" sem considerar o padrão de acesso.
- **Correção definitiva:** Use Clustered Columnstore para data warehouse/analytics. Para workloads mistos, considere Nonclustered Columnstore Index sobre uma tabela com Rowstore Clustered Index.

---

### Erro 3: RAG vs Fine-tuning
- **O que marquei:** Para personalizar as respostas de um LLM com dados corporativos do banco SQL, a melhor abordagem é fazer fine-tuning do modelo.
- **Resposta correta:** RAG (Retrieval-Augmented Generation) é a abordagem recomendada quando os dados mudam frequentemente. O banco SQL serve como fonte de contexto em tempo de consulta via busca vetorial + embeddings.
- **Causa raiz:** Não entender que fine-tuning altera o modelo permanentemente e exige retreinamento, enquanto RAG usa dados atualizados em tempo real.
- **Correção definitiva:** Use RAG quando os dados mudam com frequência e o modelo precisa de contexto atualizado. Use fine-tuning apenas quando precisa alterar o comportamento base do modelo (estilo, formato, domínio muito específico).

---

### Erro 4: DACPAC e perda de dados
- **O que marquei:** Publicar um DACPAC é seguro e nunca causa perda de dados na tabela alvo.
- **Resposta correta:** Se uma tabela ou coluna existe no destino mas não no DACPAC, o script de publicação pode gerar um `DROP TABLE` ou `DROP COLUMN`, causando perda de dados.
- **Causa raiz:** Tratar DACPAC como "apenas adiciona" quando na verdade ele sincroniza o schema inteiro.
- **Correção definitiva:** Sempre revise o script de deploy gerado antes de aplicar. Use a opção `Block on Possible Data Loss` no publish profile para impedir operações destrutivas automáticas.
