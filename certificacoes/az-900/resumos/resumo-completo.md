# Resumo Consolidado de Alta Retenção: AZ-900

Resumo estruturado dos 3 domínios oficiais da prova **AZ-900 | Microsoft Azure Fundamentals**, com foco direto no que é cobrado nas questões.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Microsoft_Azure-Resumo_Oficial-0078D4?style=flat-square&logo=microsoftazure&logoColor=white" alt="Azure" />
<img src="https://img.shields.io/badge/Domínios-1,_2_e_3-00C9A7?style=flat-square&labelColor=0F2027" alt="Domínios" />

</div>

<br />

---

## 📌 Domínio 1: Conceitos de Nuvem

### Modelos de Serviço
- **IaaS (Infrastructure as a Service):** A nuvem fornece máquinas virtuais, redes e armazenamento. Você gerencia o sistema operacional, patches e aplicações. Exemplo: Azure Virtual Machines.
- **PaaS (Platform as a Service):** A nuvem gerencia o hardware e o sistema operacional. Você foca apenas no código da aplicação e nos dados. Exemplo: Azure App Service, Azure SQL Database.
- **SaaS (Software as a Service):** Software completo pronto para uso via navegador. Você gerencia apenas as configurações de uso e os dados. Exemplo: Microsoft 365, Power BI.

### Modelos de Implementação
- **Nuvem Pública:** Pertence ao provedor e os recursos são compartilhados entre múltiplos clientes através da internet pública.
- **Nuvem Privada:** Recursos dedicados exclusivamente a uma única organização, hospedados localmente ou em datacenter terceirizado.
- **Nuvem Híbrida:** Combinação de nuvem pública e privada com interoperabilidade e mobilidade de dados.

### CapEx vs OpEx
- **CapEx (Capital Expenditure):** Gasto inicial elevado com compras de servidores e equipamentos físicos, depreciado ao longo do tempo.
- **OpEx (Operational Expenditure):** Gasto operacional contínuo baseado no consumo sob demanda (*pay-as-you-go*), sem investimento inicial em ativos físicos.

---

## 📌 Domínio 2: Arquitetura e Serviços Azure

### Estrutura Organizacional
```
Root Management Group
 └── Management Groups (agrupam assinaturas para governança)
      └── Subscriptions (limite de faturamento e cotas)
           └── Resource Groups (agrupadores lógicos de ciclo de vida)
                └── Resources (VMs, VNets, Storage Accounts, Bancos)
```

### Resiliência Geográfica
- **Região Azure:** Conjunto de datacenters conectados por uma rede de baixa latência dedicada.
- **Zonas de Disponibilidade (AZ):** Locais físicos exclusivos dentro de uma região, cada um com energia, refrigeração e rede independentes.
- **Par de Regiões:** Cada região Azure é emparelhada com outra na mesma geografia (pelo menos 480 km de distância) para recuperação contra desastres em larga escala.

### Serviços de Destaque
- **Azure Blob Storage:** Armazenamento de objetos não estruturados com 3 camadas principais (Hot para acesso frequente, Cool para acesso ocasional, Archive para arquivamento frio de longa duração).
- **Redundâncias de Storage:** LRS (3 cópias no mesmo datacenter), ZRS (3 cópias em zonas diferentes), GRS (6 cópias no total: 3 na região primária e 3 na região secundária emparelhada).
- **Azure Virtual Network (VNet):** Permite comunicação segura e isolada entre recursos Azure, com controle de tráfego por Network Security Groups (NSGs).

---

## 📌 Domínio 3: Gerenciamento e Governança

### Identidade e Acesso
- **Microsoft Entra ID:** Serviço corporativo de gerenciamento de identidades, autenticação única (SSO), MFA e controle de políticas de acesso condicional.
- **RBAC (Role-Based Access Control):** Concede permissões granulares com o princípio do menor privilégio (Built-in roles: Owner, Contributor, Reader).

### Governança e Custos
- **Azure Policy:** Avalia e impõe regras de conformidade na criação e atualização de recursos (ex: exigir tag de centro de custo, restringir tipos de VM).
- **Resource Locks:** Bloqueios aplicados para evitar exclusão acidental (`CanNotDelete`) ou modificação (`ReadOnly`).
- **Microsoft Cost Management:** Monitora e analisa gastos históricos, gera previsões e permite disparar alertas de orçamento (*Budgets*).
