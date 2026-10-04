# Plano de Estudos SEMEAR: Apache Airflow 3 & Astronomer

Planejamento técnico em **3 semanas** para dominar o desenvolvimento moderno de DAGs, arquitetura do Airflow 3 e orquestração de IA.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Duração-3_Semanas-017CEE?style=flat-square&labelColor=0F2027" alt="Duração" />
<img src="https://img.shields.io/badge/Dedicação-50_min_/_dia-00C9A7?style=flat-square&labelColor=0F2027" alt="Dedicação" />
<img src="https://img.shields.io/badge/Meta-Aprovação_Astronomer_Certs-5EEAD4?style=flat-square&labelColor=0F2027" alt="Meta" />

</div>

<br />

---

## 🗓️ Cronograma Semana a Semana

### Semana 1: Semear + Fundamentos de Arquitetura & DAGs
- **Segunda-feira (Semear):** Subir ambiente local com `astro dev init` e `astro dev start`. Mapear a arquitetura: Scheduler, Webserver, Triggerer, Metastore e Workers. Pausa de 2 dias.
- **Quarta-feira (Estudar):** Trilha *Airflow 3 Fundamentals* na [Astronomer Academy](recursos.md). Conceitos de DAGs, Tasks, Operators, Connections e Variables.
- **Quinta-feira (Mostrar):** Gravar áudio de 3 minutos explicando: *"Como o Scheduler decide quando executar uma DAG e por que o execution_date representa o início do período de dados e não o momento do disparo?"*.
- **Sexta-feira (Exercitar):** 10 questões sobre arquitetura, executors e estados de tarefas. Registrar em [erros.md](erros.md).
- **Sábado (Avaliar):** Mini-simulado cobrindo fundamentos do Airflow.

### Semana 2: DAG Authoring Avançado & TaskFlow API
- **Segunda-feira (Estudar):** Decoradores `@dag` e `@task`, passagem de XComs automáticos e Dynamic Task Mapping (`.expand()`).
- **Terça-feira (Mostrar):** Explicar em voz alta por que código pesado no escopo global (top-level code) degrada a performance do cluster.
- **Quarta-feira (Exercitar):** Escrever e exercitar DAGs usando Data-aware Scheduling (Datasets com `outlets` e `schedule=[dataset]`).
- **Quinta-feira (Estudar):** Tratamento de falhas, retries exponenciais, SLAs e deferrable operators (sensores no modo `reschedule` vs Triggerer).
- **Sexta-feira (Revisar):** Reouvir áudios gravados e revisar o código das DAGs criadas.
- **Sábado (Avaliar):** Simulado semanal cumulativo (Fundamentos + DAG Authoring).

### Semana 3: AI Orchestration & Reta Final
- **Segunda-feira (Estudar):** Padrões de orquestração de IA com Airflow: pipelines com LLMs, governança de contexto e Human-in-the-Loop (HITL).
- **Terça-feira (Mostrar):** Gravar áudio explicando como o Airflow pode coordenar agentes autônomos com salvaguardas de aprovação humana.
- **Quarta-feira (Exercitar):** Questões práticas de [simulado.md](simulado.md) focadas em cenários de produção.
- **Quinta-feira (Revisar):** Revisão completa de todos os erros catalogados em [erros.md](erros.md).
- **Sexta-feira (Avaliar):** Simulado geral cronometrado na Astronomer Academy.
- **Fim de semana:** Realização da prova oficial e conquista das credenciais!
