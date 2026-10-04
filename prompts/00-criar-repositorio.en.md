# SEMEAR repository creation prompt (EN)

Use with an AI that has file or terminal access (e.g. Claude Code), or in a regular chat
asking it to deliver each file in a code block.

```
# GOAL
Create the full structure of a GitHub repository called "semear": a central study hub for
data and cloud certifications, based on my original methodology SEMEAR
(Semear = Sow, Estudar = Study, Mostrar = Show, Exercitar = Exercise, Avaliar = Assess,
Revisar = Review).

# ABOUT ME (use it to give the repo personality)
I am Gabriel (Gabs), a data engineer. I hold AZ-900 and DP-750 and plan to add Airflow.
My goals: help people pass their exams and build a public technical presence toward
Microsoft MVP and Databricks Champion.
Do not mention any employer or internal project. Focus only on me and the study content.

# THE METHOD (my description, in spoken language)
- Sow: I look at everything that exists about the topic, even without understanding it,
  just to plant hooks. Then I let a few days pass.
- Study: passive study in the format where I learn best (video, reading, hands-on).
- Show: solo active study, recording audio explaining as if teaching a class, or talking by
  voice with the AI until it is fluent.
- Exercise: at the end of each module, AI-generated exercises.
- Assess: weekly mock exam covering all the week's modules.
- Review: active, spaced review by re-listening to the audios and redoing questions.

# REQUIRED STRUCTURE
semear/
├── README.md (English) and README.pt-BR.md
├── CONTRIBUTING.md, LICENSE (MIT)
├── assets/logo.svg
├── metodo/ (method README.md + ciencia.md with references)
├── prompts/ (master tutor prompt in PT and EN, voice, exercises, mock exam, plan)
├── templates/ (weekly cycle, error log, explanation script)
└── certificacoes/<exam>/ (README.md, plano.md, resumos/, erros.md, recursos.md)
Start with az-900, dp-750 and airflow. The structure must accept new exams by copying a folder.

# QUALITY REQUIREMENTS
- Senior-level README: centered logo, badges, "What is this", method table with technical
  names, ASCII diagram of the cycle, folder structure, "Start in 5 minutes", house rules,
  how to contribute, author and a closing tagline.
- Real scientific grounding, no invented studies: advance organizers (Ausubel), pretesting,
  Feynman, production effect, retrieval practice (Roediger and Karpicke), interleaving,
  Ebbinghaus and distributed practice. Include the caveat that rigid "learning styles" lack
  scientific support and reframe it as "find what keeps you consistent".
- Exam data (duration, passing score, weights) must stay as fields to fill in, with a link to
  the official source. Do NOT invent numbers.
- Explicit rule against brain dumps (leaked real exam questions).
- Simple SVG logo: a sprout growing over connected dots (data), teal-green gradient.
- No long dashes in the text. Warm, direct and didactic tone.

# DELIVERY
1. Show the file tree first.
2. Then create each file with its complete content.
3. At the end, list 3 suggested future improvements (e.g. GitHub Actions to check links,
   progress badges, English version of the summaries).
```
