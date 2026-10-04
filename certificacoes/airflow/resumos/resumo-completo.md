# Resumo Consolidado de Alta Retenção: Apache Airflow 3

Guia de referência rápida de arquitetura, sintaxe moderna e boas práticas para as certificações da Astronomer.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Airflow-TaskFlow_API_&_Architecture-017CEE?style=flat-square&logo=apacheairflow&logoColor=white" alt="Airflow" />
<img src="https://img.shields.io/badge/Astronomer-Certified_Author-5EEAD4?style=flat-square&labelColor=0F2027" alt="Astronomer" />

</div>

<br />

---

## 📌 1. Componentes da Arquitetura do Airflow

```
              ┌──────────────────┐
              │    Web Server    │ (Interface gráfica de monitoramento)
              └─────────┬────────┘
                        │
┌──────────────┐        ▼        ┌───────────────────────┐
│  DAG Files   │ ──► Scheduler ──► Metadata Database    │ (PostgreSQL/MySQL)
└──────────────┘        │        └───────────────────────┘
                        ▼
               ┌────────────────┐
               │    Executor    │ (Celery / Kubernetes / Local)
               └────────┬───────┘
                        │
                        ▼
               ┌────────────────┐        ┌────────────────┐
               │    Workers     │ ◄────► │   Triggerer    │ (Async event loop)
               └────────────────┘        └────────────────┘
```

- **Scheduler:** Faz o parsing dos arquivos de DAG, avalia dependências e horários, e envia tasks prontas para a fila de execução.
- **Triggerer:** Serviço assíncrono baseado em Python `asyncio` que monitora tarefas postergadas (*deferrable tasks*), liberando slots de workers.
- **Webserver:** Interface para inspecionar execuções, disparar runs manuais, gerenciar conexões e visualizar logs.
- **Metadata Database:** Ponto central de persistência de estado de todas as DAGs, runs, tentativas e variáveis.

---

## 📌 2. Sintaxe Moderna com TaskFlow API

```python
from airflow.decorators import dag, task
from pendulum import datetime

@dag(
    dag_id="pipeline_vendas_moderno",
    start_date=datetime(2026, 9, 1),
    schedule="@daily",
    catchup=False,
    tags=["vendas", "databricks"],
)
def pipeline_vendas():
    @task
    def extrair_pedidos() -> list[dict]:
        return [{"id": 1, "valor": 150.0}, {"id": 2, "valor": 280.0}]

    @task
    def calcular_total(pedidos: list[dict]) -> float:
        return sum(p["valor"] for p in pedidos)

    @task
    def notificar_conclusao(total: float):
        print(f"Processamento concluído com sucesso. Total: R$ {total:.2f}")

    # A dependência e o fluxo de dados via XCom são inferidos automaticamente
    dados = extrair_pedidos()
    total = calcular_total(dados)
    notificar_conclusao(total)

pipeline_vendas()
```

---

## 📌 3. Data-Aware Scheduling (Datasets / Assets)

Permite criar dependências orientadas a dados entre DAGs sem acoplamento direto:

```python
from airflow.datasets import Dataset

dataset_vendas = Dataset("s3://meu-lakehouse/bronze/vendas")

# Na DAG produtora:
# task_ingestao = IngestOperator(..., outlets=[dataset_vendas])

# Na DAG consumidora:
# @dag(schedule=[dataset_vendas], ...)
```

---

## 📌 4. Dynamic Task Mapping

Expande tarefas dinamicamente em tempo de execução para cada elemento de uma lista:

```python
@task
def obter_arquivos() -> list[str]:
    return ["arquivo_1.csv", "arquivo_2.csv", "arquivo_3.csv"]

@task
def processar_arquivo(caminho: str):
    print(f"Processando {caminho}")

arquivos = obter_arquivos()
# Cria dinamicamente 3 instâncias da task processar_arquivo:
processar_arquivo.expand(caminho=arquivos)
```

---

## 📌 5. Orquestração de IA & Governança

- **Tool Calling Seguro:** Validação estrita de schemas de entrada e saída em chamadas de APIs de modelos generativos.
- **Human-in-the-Loop (HITL):** Pontos de parada no pipeline que aguardam aprovação manual de um operador antes de executar ações de alto impacto no negócio.
