<p align="center"><b>English</b> · <a href="README.md">Português</a></p>

# The SEMEAR method

SEMEAR was born from a simple question: **how do you study a completely new topic without getting lost?**
It works for a cloud exam, for learning to make ice cream, or for anything else.

---

## Principle zero: find what keeps you consistent

Before anything else, try different formats (video lessons, reading, hands-on labs, guided courses) and
notice which one keeps you **focused, wanting to come back tomorrow and truly understanding**.

> Honest note: research does not support the idea of rigid "learning styles"
> (visual, auditory and so on). What works is **combining formats** and using
> the one that keeps you **consistent** in the passive phase. The active phases (Show, Exercise,
> Review) work for everyone, regardless of preference.

---

## S: Sow (*Semear*, planting information)

**Goal:** create "hooks" in your head before studying for real.

Go through everything that exists on the topic: the official exam guide, the Microsoft Learn path,
videos, docs, someone's summary. **Do not try to understand everything. Do not take too many notes.**
Just let your brain map the terrain and notice the words that are going to show up.

- **Duration:** 1 to 3 hours in total.
- **Afterwards:** let **2 to 5 days** pass. The pause is part of the method.
- **Why it works:** *advance organizers* (Ausubel) give you a prior structure where new
  content fits. The *pretesting effect* shows that even trying to answer something you
  do not know yet improves later learning. The pause allows consolidation
  (sleeping between sessions helps).

**Bonus:** at the end of Sow, read the list of exam domains and rate from 1 to 5 how much
you think you know each one. You will compare it with your results later.

---

## S: Study (*Estudar*, passive study)

**Goal:** understand what is being said.

Now you study for real, **in the format you found works for you**. Organize it into small
modules (30 to 60 min). When you finish each one, write **3 lines** on what you understood. That is all.

Tip: combine two formats on the same topic (e.g. video + lab). That is *dual coding*.

---

## S: Show (*Mostrar*, active solo study)

**Goal:** find out what you *think* you know but do not.

Record yourself explaining the module **as if you were teaching a class**, without looking at the material.
Wherever you stall or ramble, that is where the gap is. Go back, study only that piece, record again.

- Rule: **explain until it flows**, not until you memorize sentences.
- Keep the recordings. They become the raw material for review.
- Variation: explain it to the AI in voice mode and ask it to interrupt you with questions.
  See [`prompts/01-feynman-voz.en.md`](../prompts/01-feynman-voz.en.md).

Grounding: **Feynman technique** and the *production effect* (saying things out loud improves memory).

---

## E: Exercise (*Exercitar*, end of each module)

**Goal:** pull information from memory under light pressure.

When you close a module, do 8 to 12 AI-generated questions. Got one wrong? It goes into the
[error log](../templates/diario-de-erros.en.md) with the **cause** of the mistake (did not understand the
concept, confused similar services, misread, did not remember).

Grounding: **retrieval practice / testing effect** (Roediger & Karpicke). Testing yourself teaches more
than rereading.

---

## A: Assess (*Avaliar*, weekly mock exam)

**Goal:** see the full picture and train for the "mixed" nature of the real exam.

At the end of the week, a mock exam with **all the modules you covered** (and a bit of earlier
weeks). The questions come shuffled, as in the real exam. See
[`prompts/03-simulado-semanal.en.md`](../prompts/03-simulado-semanal.en.md).

Grounding: *interleaving* (Kornell & Bjork) and cumulative testing.

---

## R: Review (*Revisar*, active and spaced)

**Goal:** beat the forgetting curve.

During the week (and the following ones), spend 10 to 15 minutes a day:
- re-listening to your Show recordings,
- redoing the questions in your error log.

Suggested intervals: **1 day, 3 days, 7 days, 14 days, 30 days**. Got it easily? Lengthen the
interval. Got it wrong? Back to the start.

Grounding: forgetting curve (Ebbinghaus) and *distributed practice* (Cepeda et al.).
Optional tool: Anki for the cards left over from your error log.

---

## Where AI fits in

| Step | How to use AI |
|---|---|
| Sow | Ask for a map of the topic and a glossary of what will come up |
| Study | Clear up specific doubts, ask for an analogy |
| Show | Voice conversation: you explain, it questions you |
| Exercise | Generate module questions with a commented answer key |
| Assess | Cumulative weekly mock exam |
| Review | Turn mistakes into cards and suggest what to review today |

**Careful:** AI makes mistakes. Confirm doubtful answers in the official documentation. One mistake
you fixed with an official source is worth more than ten right answers confirmed only by AI.

---

## Scientific background

See [`ciencia.en.md`](ciencia.en.md).
