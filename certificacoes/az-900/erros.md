# Diário de Erros: AZ-900 | Microsoft Azure Fundamentals

Este registro documenta as pegadinhas e erros reais identificados durante o ciclo de exercícios e simulados. Cada erro é classificado pela sua causa raiz para garantir retenção definitiva.

<br />

<div align="center">

<img src="https://img.shields.io/badge/Foco-Retenção_Ativa-00C9A7?style=flat-square&labelColor=0F2027" alt="Foco" />
<img src="https://img.shields.io/badge/Regra-Registrar_Causa_e_Correção-0078D4?style=flat-square&labelColor=0F2027" alt="Regra" />

</div>

<br />

---

## 🔍 Registro de Erros e Aprendizados

### Erro 1: Confusão entre Azure Policy e RBAC
- **O que marquei:** Marquei que devia aplicar RBAC para impedir que usuários criem VMs em regiões fora do Brasil.
- **Resposta correta:** Azure Policy.
- **Causa raiz:** Confusão de escopo conceitual.
- **Correção definitiva:** RBAC responde à pergunta *"QUEM pode fazer o quê"* (permissões de usuário, como Contributor ou Reader). Azure Policy responde à pergunta *"O QUE pode ser feito"* de acordo com as regras da organização (ex: impor tags obrigatórias, bloquear SKUs ou regiões).

---

### Erro 2: Availability Zones vs Region Pairs
- **O que marquei:** Marquei que Availability Zones garantiam proteção contra desastres em escala continental.
- **Resposta correta:** Region Pairs (Pares de Regiões com replicação GRS).
- **Causa raiz:** Falta de atenção à escala geográfica.
- **Correção definitiva:** Availability Zones são múltiplos datacenters independentes localizados **dentro da mesma região** (baixa latência). Para proteção contra eventos climáticos extremos ou catástrofes continentais, a solução exige replicação para o Par de Regiões (distância superior a 480 km).

---

### Erro 3: Calculadora de TCO vs Calculadora de Preços
- **O que marquei:** Usar a Calculadora de Preços para estimar a economia de migrar servidores on-premises para Azure.
- **Resposta correta:** Calculadora de TCO (Total Cost of Ownership).
- **Causa raiz:** Pegadinha de terminologia.
- **Correção definitiva:** A *Calculadora de Preços* estima o custo mensal de serviços novos criados no Azure. A *Calculadora de TCO* compara os custos atuais de manter infraestrutura própria física (on-premises) versus o custo equivalente na nuvem.

---

### Erro 4: Camada de Armazenamento Archive
- **O que marquei:** A camada Archive suporta leitura instantânea de arquivos críticos de backup.
- **Resposta correta:** A camada Archive é offline e o processo de reidratação pode levar várias horas.
- **Causa raiz:** Desconhecimento do SLA de acesso.
- **Correção definitiva:** Se os dados precisarem estar imediatamente acessíveis, as opções corretas são Hot ou Cool/Cold. A camada Archive é projetada apenas para arquivos de conformidade de longo prazo com tolerância a horas de espera para leitura.
