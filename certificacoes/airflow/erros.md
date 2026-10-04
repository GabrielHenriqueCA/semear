# Diário de Erros: Apache Airflow 3 & Astronomer

Registro de erros práticos e armadilhas comuns em desenvolvimento de DAGs e orquestração no Airflow.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Foco-Orquestração_e_DAG_Authoring-017CEE?style=flat-square&labelColor=0F2027" alt="Orquestração" />
<img src="https://img.shields.io/badge/Prioridade-Zero_Erros_em_Produção-00C9A7?style=flat-square&labelColor=0F2027" alt="Zero Erros" />

</div>

<br />

---

## 🔍 Registro de Erros e Aprendizados

### Erro 1: Código I/O no Top-Level da DAG
- **O que cometi:** Realizei uma requisição `requests.get()` no escopo global do arquivo `.py` para montar a lista de tasks dinamicamente.
- **Problema causado:** O Scheduler executa o arquivo de DAG repetidamente a cada poucos segundos no processo de parsing. A requisição HTTP travava o scheduler e causava lentidão generalizada no cluster.
- **Causa raiz:** Desconhecimento do ciclo de parsing contínuo do Airflow.
- **Correção definitiva:** Top-level code deve conter apenas imports leves e a estrutura da DAG. Para carregar dados dinamicamente em tempo de execução, deve-se usar uma task com Dynamic Task Mapping (`.expand()`).

---

### Erro 2: Transferir DataFrames inteiros via XCom padrão
- **O que cometi:** Uma task de extração retornou um DataFrame pandas de 800 MB como resultado direto da função TaskFlow (`@task`).
- **Problema causado:** O XCom padrão tenta salvar o objeto serializado diretamente dentro do banco de metadados (PostgreSQL), estourando o limite de tamanho da coluna e degradando o banco.
- **Causa raiz:** Não considerar a finalidade do XCom.
- **Correção definitiva:** XComs devem trafegar apenas metadados leves (caminhos de arquivos, IDs, contagens de registros). Grandes dados devem ser gravados em storage externo (S3, ADLS, GCS) e apenas o caminho de armazenamento deve ser compartilhado via XCom.

---

### Erro 3: Confusão entre `start_date` e o primeiro disparo da DAG
- **O que cometi:** Defini `start_date=2026-09-01` com `schedule='@daily'` e esperava que a DAG rodasse exatamente no primeiro segundo do dia 01/09.
- **Problema causado:** A DAG não disparou no início do dia.
- **Causa raiz:** Confusão sobre o conceito de Data Interval.
- **Correção definitiva:** No Airflow, uma execução diária referente a `2026-09-01` só é disparada **ao final do intervalo de dados**, ou seja, em `2026-09-02 00:00:00`, após todos os dados daquele dia terem sido coletados.

---

### Erro 4: Sensores no modo `poke` para esperas longas
- **O que cometi:** Criei um `S3KeySensor` para esperar um arquivo que chega entre 2h e 6h da manhã, usando o modo padrão `poke`.
- **Problema causado:** O sensor manteve um worker ocupado continuamente durante 4 horas inteiras sem fazer nada útil, bloqueando outras tarefas da fila.
- **Causa raiz:** Esquecimento do consumo de slots por sensores síncronos.
- **Correção definitiva:** Em esperas superiores a alguns minutos, deve-se usar `mode='reschedule'` ou preferencialmente sensores postergáveis (*deferrable operators*) que liberam o slot para o Triggerer assíncrono.
