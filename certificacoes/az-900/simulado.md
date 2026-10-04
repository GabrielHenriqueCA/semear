# Simulado de prática: AZ-900

> ⚠️ **Aviso importante:** estas questões são **de treino, criadas por nós, não oficiais**.
> Elas servem para exercitar o conhecimento, mas **não substituem o simulado oficial da Microsoft**.
> Faça o [Practice Assessment oficial](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/practice/assessment?assessment-type=practice&assessmentId=23) antes da prova.

---

## Questões

### 1. Uma empresa quer migrar um aplicativo web para o Azure sem se preocupar com o sistema operacional ou o runtime. Qual serviço é mais adequado?

- A) Azure Virtual Machines
- B) Azure App Service
- C) Azure Kubernetes Service
- D) Azure Container Instances

<details>
<summary>Ver resposta</summary>

**B) Azure App Service**

App Service é PaaS: você sobe o código e o Azure cuida do SO, runtime, patches e escala. VMs (IaaS) exigem que você gerencie o SO. AKS e Container Instances são para contêineres.
</details>

---

### 2. Qual é a principal diferença entre CapEx e OpEx no contexto de nuvem?

- A) CapEx é pagamento mensal, OpEx é pagamento único adiantado
- B) CapEx é investimento inicial em infraestrutura física, OpEx é pagamento por consumo
- C) CapEx é usado na nuvem pública, OpEx na nuvem privada
- D) Não existe diferença, são sinônimos

<details>
<summary>Ver resposta</summary>

**B) CapEx é investimento inicial em infraestrutura física, OpEx é pagamento por consumo**

CapEx (Capital Expenditure) = comprar servidores, datacenters. OpEx (Operational Expenditure) = pagar pelo que usar na nuvem. A nuvem pública é essencialmente OpEx.
</details>

---

### 3. Uma empresa precisa que seus dados estejam disponíveis mesmo se um datacenter inteiro ficar fora do ar. O que ela deve usar?

- A) Resource Groups
- B) Availability Zones
- C) Management Groups
- D) Azure Policy

<details>
<summary>Ver resposta</summary>

**B) Availability Zones**

Availability Zones são datacenters fisicamente separados dentro de uma mesma região Azure. Se um datacenter falhar, os outros continuam operando. Resource Groups e Management Groups são de organização, não de disponibilidade.
</details>

---

### 4. Qual ferramenta do Azure permite definir regras que impedem a criação de recursos fora de conformidade (ex: só permitir regiões específicas)?

- A) RBAC
- B) Azure Blueprints
- C) Azure Policy
- D) Microsoft Entra ID

<details>
<summary>Ver resposta</summary>

**C) Azure Policy**

Azure Policy aplica regras em escala (ex: "só criar recursos no Brasil South"). RBAC controla *quem* pode fazer o quê, não *o que* pode ser criado. Blueprints combinam policies, RBAC e templates, mas a política em si é o Azure Policy.
</details>

---

### 5. Qual modelo de nuvem combina infraestrutura on-premises com serviços de nuvem pública?

- A) Nuvem pública
- B) Nuvem privada
- C) Nuvem híbrida
- D) Multi-cloud

<details>
<summary>Ver resposta</summary>

**C) Nuvem híbrida**

Nuvem híbrida = parte on-premises + parte na nuvem pública, com comunicação entre elas. Multi-cloud é usar dois ou mais provedores de nuvem pública (ex: Azure + AWS).
</details>

---

### 6. Qual serviço serve para autenticação, gerenciamento de identidades e Conditional Access no Azure?

- A) Azure Monitor
- B) Azure Key Vault
- C) Microsoft Entra ID
- D) Azure Policy

<details>
<summary>Ver resposta</summary>

**C) Microsoft Entra ID** (antigo Azure Active Directory)

Microsoft Entra ID é o serviço de identidade e acesso do Azure: autenticação, MFA, Conditional Access, SSO. Key Vault guarda segredos e chaves. Monitor monitora recursos. Policy aplica regras.
</details>

---

### 7. Qual tier de armazenamento do Azure Blob Storage é mais barato para guardar dados, mas mais caro para acessar?

- A) Hot
- B) Cool
- C) Archive
- D) Premium

<details>
<summary>Ver resposta</summary>

**C) Archive**

Archive é o mais barato para armazenamento, mas o mais caro e lento para acessar (horas para reidratar). Hot = acesso frequente, mais caro para guardar. Cool = acesso eventual (mínimo 30 dias).
</details>

---

### 8. Para que serve a Calculadora de TCO (Total Cost of Ownership) do Azure?

- A) Estimar o custo mensal de recursos já criados no Azure
- B) Comparar o custo de rodar workloads on-premises vs. no Azure
- C) Monitorar o consumo em tempo real
- D) Definir orçamentos e alertas de custo

<details>
<summary>Ver resposta</summary>

**B) Comparar o custo de rodar workloads on-premises vs. no Azure**

A Calculadora de TCO ajuda a justificar a migração mostrando a economia ao longo do tempo. A Calculadora de Preços estima custos de recursos novos. Cost Management monitora e controla gastos.
</details>

---

### 9. Qual é a hierarquia correta de organização dos recursos no Azure, do mais amplo para o mais específico?

- A) Subscription > Management Group > Resource Group > Resource
- B) Management Group > Subscription > Resource Group > Resource
- C) Resource Group > Subscription > Management Group > Resource
- D) Management Group > Resource Group > Subscription > Resource

<details>
<summary>Ver resposta</summary>

**B) Management Group > Subscription > Resource Group > Resource**

Management Group (raiz) > pode ter outros Management Groups > Subscriptions > Resource Groups > Resources. Policies e RBAC aplicados no nível mais alto descem para os filhos.
</details>

---

### 10. Qual tipo de serviço em nuvem dá ao usuário mais controle sobre a infraestrutura?

- A) SaaS
- B) PaaS
- C) IaaS
- D) Serverless

<details>
<summary>Ver resposta</summary>

**C) IaaS (Infrastructure as a Service)**

IaaS dá mais controle (você gerencia o SO, rede, storage). PaaS gerencia o SO para você. SaaS é o mais gerenciado (você só usa o software). Serverless é uma variação de PaaS onde você não gerencia nada de infra.
</details>
