# Prompt de criação do repositório SEMEAR (PT-BR)

Use em uma IA com acesso a arquivos ou terminal (ex.: Claude Code) ou em um chat comum
pedindo que ela entregue cada arquivo em um bloco de código.

```
# OBJETIVO
Crie a estrutura completa de um repositório GitHub chamado "semear": um hub central de estudo
para certificações de dados e nuvem, baseado na minha metodologia autoral SEMEAR
(Semear, Estudar, Mostrar, Exercitar, Avaliar, Revisar).

# SOBRE MIM (use para dar personalidade ao repo)
Sou Gabriel (Gabs), engenheiro de dados. Tenho AZ-900 e DP-750 e quero, no futuro, Airflow.
Meus objetivos: ajudar pessoas a passar nas provas e construir presença técnica pública
rumo a Microsoft MVP e Databricks Champion.
Não mencione nenhum empregador nem projeto interno. Foco só em mim e no conteúdo de estudo.

# O MÉTODO (descrição minha, em linguagem falada)
- Semear: vejo tudo o que existe sobre o tema, mesmo sem entender, só para plantar ganchos.
  Depois deixo passar alguns dias.
- Estudar: estudo passivo no formato em que aprendo melhor (vídeo, leitura, prática).
- Mostrar: estudo ativo solo, gravando áudio explicando como se desse aula, ou conversando
  por voz com a IA até ficar fluido.
- Exercitar: ao fim de cada módulo, exercícios gerados com IA.
- Avaliar: simulado semanal com todos os módulos da semana.
- Revisar: revisão ativa e espaçada, reouvindo áudios e refazendo questões.

# ESTRUTURA OBRIGATÓRIA
semear/
├── README.md (inglês) e README.pt-BR.md
├── CONTRIBUTING.md, LICENSE (MIT)
├── assets/logo.svg
├── metodo/ (README.md do método + ciencia.md com referências)
├── prompts/ (prompt mestre de tutor PT e EN, voz, exercícios, simulado, plano)
├── templates/ (ciclo semanal, diário de erros, roteiro de explicação)
└── certificacoes/<prova>/ (README.md, plano.md, resumos/, erros.md, recursos.md)
Comece com az-900, dp-750 e airflow. A estrutura deve aceitar novas provas copiando uma pasta.

# REQUISITOS DE QUALIDADE
- README de nível sênior: logo centralizado, badges, "O que é", tabela do método com
  nomes técnicos, diagrama em ASCII do ciclo, estrutura de pastas, "Comece em 5 minutos",
  regras da casa, como contribuir, autor e uma frase de efeito final.
- Base científica real, sem inventar estudos: advance organizers (Ausubel), pretesting,
  Feynman, production effect, retrieval practice (Roediger e Karpicke), interleaving,
  Ebbinghaus e distributed practice. Inclua a ressalva de que "estilos de aprendizagem"
  rígidos não têm sustentação científica e reformule como "descobrir o que te mantém consistente".
- Dados de prova (duração, nota de corte, pesos) devem ficar como campos a preencher com
  link para a fonte oficial. NÃO invente números.
- Regra explícita contra brain dumps (questões reais vazadas).
- Logo em SVG simples: broto crescendo sobre pontos conectados (dados), gradiente verde-água.
- Sem travessões longos no texto. Tom acolhedor, direto e didático.

# ENTREGA
1. Mostre primeiro a árvore de arquivos.
2. Depois crie cada arquivo com o conteúdo completo.
3. Ao final, liste 3 melhorias futuras sugeridas (ex.: GitHub Actions para checar links,
   badges de progresso, versão em inglês dos resumos).
```
