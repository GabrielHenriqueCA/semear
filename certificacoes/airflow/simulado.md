# Simulado de prática: Apache Airflow 3 & DAG Authoring

> ⚠️ **Aviso importante:** estas questões são **de treino, criadas por nós, não oficiais**.
> Elas servem para exercitar o raciocínio prático e validar o conhecimento, mas **não substituem as avaliações oficiais da Astronomer**.
> Acesse a trilha e os exames oficiais na [Astronomer Academy](https://academy.astronomer.io/).

---

### Questão 1
Qual é a principal vantagem de utilizar a **TaskFlow API** (`@task`) em comparação com a instanciação tradicional de Operators legados (ex: `PythonOperator`) no Airflow?

- A) A TaskFlow API elimina completamente a necessidade de ter um Scheduler rodando.
- B) Ela infere automaticamente dependências entre tasks ao passar valores de retorno diretamente como argumentos de outras tasks, gerenciando os XComs nos bastidores.
- C) Permite que tarefas em Python rodem diretamente dentro do banco de dados de metadados sem usar Workers.
- D) Desativa o limite de concorrência global de tasks.

<details>
<summary><b>Ver resposta e explicação</b></summary>

**Resposta correta:** **B**

**Explicação:** A TaskFlow API simplifica a sintaxe ao transformar funções Python convencionais em tarefas com o decorador `@task`. Quando uma task decorada recebe o retorno de outra task decorada como argumento (ex: `transform(extract())`), o Airflow automaticamente infere a dependência linear e encapsula a passagem de dados usando XComs.
</details>

---

### Questão 2
Em relação ao **Top-level code** (código fora de funções ou tasks) em um arquivo de DAG no Airflow, qual é a melhor prática recomendada?

- A) Abrir conexões com bancos de dados e executar queries analíticas no top-level para economizar tempo de execução dos workers.
- B) Fazer requests a APIs externas no top-level para definir variáveis dinâmicas no escopo global.
- C) Manter o código top-level o mais leve possível (apenas imports e definições estruturais da DAG), evitando chamadas de rede ou I/O pesado, pois o Scheduler processa e reexecuta esse arquivo a cada poucos segundos.
- D) O Airflow 3 ignora o código top-level durante o processo de parsing do DAG File.

<details>
<summary><b>Ver resposta e explicação</b></summary>

**Resposta correta:** **C**

**Explicação:** O processo de DAG Parsing do Scheduler executa o arquivo de DAG periodicamente para detectar alterações. Qualquer I/O lento, request HTTP ou query pesada colocada no escopo global bloqueia e degrada gravemente a performance de todo o cluster do Airflow.
</details>

---

### Questão 3
Você precisa disparar uma DAG chamada `dag_consumidora` assim que uma DAG de ingestão atualizar um conjunto de dados específico no Data Lake, sem depender de horários fixos (`cron` ou `schedule_interval`). Qual recurso moderno do Airflow deve ser adotado?

- A) SubDAGs com `DummyOperator`.
- B) Agendamento baseado em Datasets (`Dataset` / Data-aware Scheduling), referenciando a URI do dataset nos parâmetros `outlets` da task de escrita e `schedule=[dataset]` na DAG consumidora.
- C) Um `TimeSensor` rodando a cada 1 minuto com `poke_interval=10`.
- D) Inserir uma chamada SQL na tabela de metadados do Airflow forçando a criação manual de uma `DagRun`.

<details>
<summary><b>Ver resposta e explicação</b></summary>

**Resposta correta:** **B**

**Explicação:** O *Data-aware Scheduling* (introduzido com Datasets no Airflow) permite que DAGs produtoras emitam atualizações de datasets via o parâmetro `outlets=[Dataset("s3://bucket/path")]`, e DAGs consumidoras sejam engatilhadas de forma limpa e orientada a eventos quando os datasets de que dependem forem atualizados.
</details>

---

### Questão 4
Ao utilizar **Dynamic Task Mapping** no Airflow, qual método é empregado para expandir uma task para cada elemento de uma lista gerada em tempo de execução?

- A) `.map_all()`
- B) `.expand()`
- C) `.foreach()`
- D) `.fan_out()`

<details>
<summary><b>Ver resposta e explicação</b></summary>

**Resposta correta:** **B**

**Explicação:** O método `.expand(arg=lista)` permite criar dinamicamente n instâncias de uma mesma task em tempo de execução com base no número de itens retornados pela lista gerada anteriormente, dispensando a criação estática e manual de operadores repetidos.
</details>

---

### Questão 5
Sobre o uso de **XComs** (Cross-Communication) no Apache Airflow, qual das alternativas descreve uma restrição crucial de arquitetura?

- A) XComs só podem transferir dados criptografados com certificados TLS 1.3.
- B) Por padrão, XComs são persistidos no Metadata Database do Airflow; portanto, grandes volumes de dados (ex: DataFrames de gigabytes) não devem trafegar via XCom padrão para não esgotar ou travar o banco.
- C) Uma task só pode ler XComs gerados na mesma data do ano anterior.
- D) Apenas operadores legados suportam XComs; a TaskFlow API é incompatível com eles.

<details>
<summary><b>Ver resposta e explicação</b></summary>

**Resposta correta:** **B**

**Explicação:** XComs tradicionais guardam metadados leves (URIs, IDs, contagens, status). Transferir DataFrames inteiros ou arquivos volumosos via XCom sobrecarrega o banco de metadados PostgreSQL/MySQL. Para grandes dados, o padrão é escrever no storage (ex: S3/ADLS/GCS) e passar apenas o caminho/URI pelo XCom, ou utilizar um XCom Backend customizado.
</details>

---

### Questão 6
Em um cenário de orquestração com sensores (`SensorOperator`), qual `mode` deve ser selecionado para evitar que o worker fique bloqueado e consumindo slots desnecessariamente enquanto espera por um arquivo que pode demorar horas para chegar?

- A) `mode="poke"`
- B) `mode="reschedule"`
- C) `mode="block"`
- D) `mode="freeze"`

<details>
<summary><b>Ver resposta e explicação</b></summary>

**Resposta correta:** **B**

**Explicação:** No modo `poke`, o sensor mantém o slot do worker ocupado durante todo o tempo de espera. No modo `reschedule`, se o critério não for atendido na verificação, o sensor libera o worker e o slot, e o Scheduler reagenda a próxima verificação para dali ao tempo especificado, economizando recursos computacionais.
</details>

---

### Questão 7
Como o Airflow trata segredos, senhas e chaves de API para conexões com provedores em nuvem (ex: AWS, Azure, GCP)?

- A) Elas devem ser inseridas como strings fixas (*hardcoded*) no código Python da DAG.
- B) Devem ser armazenadas no sistema de arquivos local do scheduler sem permissão de leitura.
- C) Devem ser cadastradas através de Airflow Connections e Variables (de preferência integradas com Secrets Backends gerenciados, como Azure Key Vault ou HashiCorp Vault).
- D) O Airflow não permite autenticação em nuvem sem tokens efêmeros de 5 minutos.

<details>
<summary><b>Ver resposta e explicação</b></summary>

**Resposta correta:** **C**

**Explicação:** Credenciais nunca devem ficar hardcoded no código de DAGs. O Airflow fornece a abstração de *Connections* (com Hooks correspondentes) e a capacidade de conectar Secrets Backends corporativos (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault) de forma transparente.
</details>

---

### Questão 8
Qual é o papel do **Triggerer** na arquitetura moderna do Apache Airflow?

- A) É o componente responsável por renderizar a interface gráfica web.
- B) Executa tarefas síncronas de processamento em memória distribuída.
- C) É um serviço assíncrono que monitora tarefas adiadas (*deferrable operators / triggers*) usando `asyncio`, liberando totalmente slots de workers enquanto espera eventos externos I/O-bound.
- D) Substitui o Webserver e o banco de dados.

<details>
<summary><b>Ver resposta e explicação</b></summary>

**Resposta correta:** **C**

**Explicação:** O serviço *Triggerer* executa um event loop assíncrono baseado em Python `asyncio`. Operadores postergáveis (*deferrable operators*) cedem seu processo para o Triggerer enquanto aguardam eventos (ex: espera de job no Databricks terminar), reduzindo o custo de manter workers ativos em tarefas ociosas.
</details>

---

### Questão 9
No contexto de **Orquestração de IA & LLMs** com Apache Airflow (Astronomer AI Orchestration), qual padrão é fundamental para garantir segurança e governança ao integrar agentes autônomos em pipelines críticos de negócio?

- A) Permitir que o modelo de IA altere as permissões do banco sem supervisão.
- B) Implementar mecanismos de avaliação com *Human-in-the-Loop* (HITL) e ferramentas de controle de contexto com validação de schemas em chamadas de ferramentas (*tool calling*).
- C) Desativar logs de execução para não expor tokens de prompt.
- D) Rodar todas as inferências de IA obrigatoriamente na camada do Scheduler.

<details>
<summary><b>Ver resposta e explicação</b></summary>

**Resposta correta:** **B**

**Explicação:** Em orquestração de IA moderna, a automação com agentes exige validação de outputs, sanitização de contexto, schemas rigorosos para *tool calling* e pontos de checagem com intervenção humana (*Human-in-the-Loop*) antes de executar ações de alto risco ou transacionais.
</details>

---

### Questão 10
O que caracteriza um **Hook** no ecossistema do Airflow?

- A) Uma interface que substitui uma DAG inteira.
- B) Uma interface reutilizável de baixo nível que gerencia a comunicação e autenticação com serviços externos (ex: Snowflake, Databricks, S3), servindo como fundação para que Operators e Sensors construam suas lógicas.
- C) Uma função utilitária exclusiva para formatação de datas em Jinja templates.
- D) Um plugin que impede falhas em tasks Python.

<details>
<summary><b>Ver resposta e explicação</b></summary>

**Resposta correta:** **B**

**Explicação:** Enquanto Operators definem *o que* deve ser feito em uma etapa do fluxo, os Hooks cuidam de *como se conectar e comunicar* com a API ou serviço externo. Hooks não geram nós na árvore de dependências da DAG; eles são consumidos internamente pelas tasks.
</details>
