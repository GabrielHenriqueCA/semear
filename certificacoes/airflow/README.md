<div align="center">

<img src="../../assets/banner-airflow.svg" width="100%" alt="Apache Airflow 3 and Astronomer: DAG Authoring and AI Orchestration" />

<br /><br />

<img src="https://img.shields.io/badge/Status-Aprovado_✅-00C9A7?style=flat-square&labelColor=0F2027" alt="Aprovado" />
<img src="https://img.shields.io/badge/Versão-Airflow_3-017CEE?style=flat-square&labelColor=0F2027" alt="Airflow 3" />
<img src="https://img.shields.io/badge/Credly-3_Badges_Verificados-FF6B4A?style=flat-square&labelColor=0F2027" alt="Credly Verificado" />
<img src="https://img.shields.io/badge/Simulado-10_Questões_Comentadas-7CFF6B?style=flat-square&labelColor=0F2027" alt="Simulado" />

<br /><br />

[**Recursos Oficiais**](recursos.md) · [**Simulado de Treino**](simulado.md) · [**Plano de Estudos**](plano.md) · [**Diário de Erros**](erros.md) · [**Resumo por Domínio**](resumos/resumo-completo.md)

</div>

<img src="../../assets/divider-airflow.svg" width="100%" height="6" alt="" />

## 🏆 Credenciais Conquistadas

<table>
<tr>
<th width="45%">Exame Oficial Astronomer</th>
<th width="35%">Credencial / Badge</th>
<th width="20%" align="center">Verificação</th>
</tr>
<tr>
<td><strong>Apache Airflow 3 Fundamentals</strong></td>
<td>Conceitos centrais, arquitetura, operadores e agendamento</td>
<td align="center"><a href="https://www.credly.com/earner/earned/badge/83c10772-4c3f-4d56-a7e1-f4cf842a241f"><img src="https://img.shields.io/badge/Credly-83c10772-FF6B4A?style=flat-square" /></a></td>
</tr>
<tr>
<td><strong>Apache Airflow 3 DAG Authoring</strong></td>
<td>TaskFlow API, Dynamic Task Mapping, Datasets e dependências</td>
<td align="center"><a href="https://www.credly.com/earner/earned/badge/957e8750-f89e-4860-8074-a88385a4093e"><img src="https://img.shields.io/badge/Credly-957e8750-FF6B4A?style=flat-square" /></a></td>
</tr>
<tr>
<td><strong>AI Orchestration Fundamentals</strong></td>
<td>Workflows de IA, multi-agent systems, tool calling seguro e HITL</td>
<td align="center"><a href="https://www.credly.com/earner/earned/badge/066af65e-fb52-4acd-a4f2-1891bdda4642"><img src="https://img.shields.io/badge/Credly-066af65e-FF6B4A?style=flat-square" /></a></td>
</tr>
</table>

<img src="../../assets/divider-airflow.svg" width="100%" height="6" alt="" />

## 📋 Visão Geral dos Exames

- **Provedor:** Astronomer (empresa líder por trás do ecossistema comercial do Airflow).
- **Formato:** Provas objetivas com questões de múltipla escolha e cenários de código.
- **Preparação Gratuita:** [Astronomer Academy](https://academy.astronomer.io/).
- **Ferramenta Recomendada:** [Astro CLI](https://www.astronomer.io/docs/astro/cli/overview) para rodar o ambiente completo com Docker localmente.

<img src="../../assets/divider-airflow.svg" width="100%" height="6" alt="" />

## 🎯 Domínios de Conhecimento Cobrados

<table>
<tr>
<th width="40%">Domínio</th>
<th width="35%">Tópicos Centrais</th>
<th width="25%">Importância</th>
</tr>
<tr>
<td><strong>DAG Authoring & Scheduling</strong></td>
<td>Cron expressions, catchup, Timetables, Datasets / Assets</td>
<td><img src="https://img.shields.io/badge/Altíssima-00C9A7?style=flat-square" /></td>
</tr>
<tr>
<td><strong>TaskFlow API & Operators</strong></td>
<td>Decoradores <code>@task</code> e <code>@dag</code>, Dynamic Task Mapping (<code>expand</code>)</td>
<td><img src="https://img.shields.io/badge/Altíssima-00C9A7?style=flat-square" /></td>
</tr>
<tr>
<td><strong>Comunicação & Metadados</strong></td>
<td>XComs (limites e boas práticas), Connections, Variables, Pools</td>
<td><img src="https://img.shields.io/badge/Alta-017CEE?style=flat-square" /></td>
</tr>
<tr>
<td><strong>Arquitetura & Execução</strong></td>
<td>Scheduler, Webserver, Triggerer (async), Workers, Celery vs K8s</td>
<td><img src="https://img.shields.io/badge/Alta-017CEE?style=flat-square" /></td>
</tr>
<tr>
<td><strong>AI Orchestration</strong></td>
<td>Agentes autônomos, Human-in-the-Loop, Context Engineering</td>
<td><img src="https://img.shields.io/badge/Especializada-5EEAD4?style=flat-square&labelColor=0F2027" /></td>
</tr>
</table>

<img src="../../assets/divider-airflow.svg" width="100%" height="6" alt="" />

## 🧠 Tópicos Críticos para o Sucesso

### 1. Boas Práticas de Top-Level Code
- O Scheduler processa periodicamente arquivos de DAG a cada poucos segundos.
- **Nunca** coloque queries lentas a bancos, chamadas de API externa ou I/O pesado fora das tasks (no escopo global do arquivo Python). Isso degrada todo o cluster do Airflow.

### 2. TaskFlow API vs Operators Legados
- A TaskFlow API com `@task` permite escrever código idiomático em Python puro.
- O retorno de uma task passa a ser automaticamente empacotado como XCom e entregue como parâmetro para a task seguinte sem necessidade de chamar `xcom_push` e `xcom_pull` explicitamente.

### 3. Data-Aware Scheduling com Datasets
- Substitui horários fixos de cron por pipelines orientados a dados.
- Uma DAG de ingestão declara `outlets=[Dataset("s3://bucket/raw")]` e a DAG de transformação roda automaticamente com `schedule=[Dataset("s3://bucket/raw")]`.

### 4. Sensores e o Serviço Triggerer
- Sensores no modo `poke` mantêm a thread do worker presa e consumindo recursos.
- Sensores adiáveis (*deferrable operators*) e modo `reschedule` liberam o slot do worker para outras tarefas enquanto esperam eventos externos.

<img src="../../assets/divider-airflow.svg" width="100%" height="6" alt="" />

## 💡 Dicas de Ouro para o Dia da Prova

1. **Top-level code é o erro mais comum:** Qualquer I/O pesado no escopo global do arquivo `.py` (chamadas HTTP, queries a banco) será executado repetidamente pelo Scheduler a cada parsing cycle, degradando todo o cluster.
2. **XCom tem limite de tamanho:** O XCom padrão armazena dados no metastore (PostgreSQL). Nunca passe DataFrames grandes via XCom; grave no storage externo e passe apenas o caminho.
3. **`start_date` não é o momento do disparo:** Uma DAG `@daily` com `start_date=2026-09-01` só dispara em `2026-09-02 00:00:00`, após o *data interval* completo. Confusão frequente em provas.

<img src="../../assets/divider-airflow.svg" width="100%" height="6" alt="" />

## 📂 Arquivos Desta Pasta

- [recursos.md](recursos.md): Links para os cursos da Astronomer Academy e comandos do Astro CLI.
- [simulado.md](simulado.md): 10 questões práticas comentadas com gabarito interativo.
- [plano.md](plano.md): Cronograma SEMEAR para passar nas certificações da Astronomer.
- [erros.md](erros.md): Diário de erros com análise das principais armadilhas de código.
- [resumos/resumo-completo.md](resumos/resumo-completo.md): Guia de sintaxe e arquitetura de referência.

<img src="../../assets/divider-airflow.svg" width="100%" height="6" alt="" />

<div align="center">

<img src="../../assets/logo.svg" width="48" alt="Semear logo" />
<br />
<strong><em>Plante hoje. Domine a orquestração de dados e IA na prova.</em></strong>

</div>
