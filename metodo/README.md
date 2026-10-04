<p align="center"><a href="README.en.md">English</a> · <b>Português</b></p>

# O método SEMEAR

O SEMEAR nasceu de uma pergunta simples: **como estudar um tema totalmente novo sem se perder?**
Vale para uma prova de nuvem, para aprender a fazer sorvete ou para qualquer outra coisa.

---

## Princípio zero: descubra o que te mantém consistente

Antes de tudo, teste formatos (videoaula, leitura, laboratório prático, curso guiado) e
observe qual deixa você **focado, com vontade de voltar amanhã e entendendo de verdade**.

> Nota honesta: a pesquisa não sustenta a ideia de "estilos de aprendizagem" rígidos
> (visual, auditivo etc.). O que funciona é **combinar formatos** e usar
> aquele que garante **consistência** na fase passiva. As fases ativas (Mostrar, Exercitar,
> Revisar) valem para todo mundo, independente de preferência.

---

## S: Semear (plantar informação)

**Objetivo:** criar "ganchos" na cabeça antes de estudar a sério.

Percorra tudo o que existir sobre o tema: guia oficial da prova, trilha do Microsoft Learn,
vídeos, docs, um resumo de alguém. **Não tente entender tudo. Não anote demais.**
Só deixe o cérebro mapear o terreno e perceber as palavras que vão aparecer.

- **Duração:** 1 a 3 horas no total.
- **Depois:** deixe **2 a 5 dias** passarem. O intervalo é parte do método.
- **Por que funciona:** *advance organizers* (Ausubel) dão uma estrutura prévia onde o
  conteúdo novo se encaixa. O *pretesting effect* mostra que até tentar responder algo que
  você ainda não sabe melhora o aprendizado posterior. O intervalo permite consolidação
  (dormir entre as sessões ajuda).

**Bônus:** ao final do Semear, leia a lista de domínios da prova e marque de 1 a 5 o quanto
você acha que sabe cada um. Você vai comparar com o resultado depois.

---

## E: Estudar (estudo passivo)

**Objetivo:** entender o que está sendo dito.

Agora sim, estudo de verdade, **no formato que você descobriu que funciona**. Organize por módulos
pequenos (30 a 60 min). Ao terminar cada um, escreva **3 linhas** do que entendeu. Só isso.

Dica: combine dois formatos no mesmo tópico (ex.: vídeo + laboratório). É o *dual coding*.

---

## M: Mostrar (estudo ativo, solo)

**Objetivo:** descobrir o que você *acha* que sabe e não sabe.

Grave um áudio explicando o módulo **como se estivesse dando aula**, sem olhar o material.
Onde travar ou enrolar, é ali que está a lacuna. Volte, estude só aquele pedaço, grave de novo.

- Regra: **explique até ficar fluido**, não até decorar frases.
- Guarde os áudios. Eles viram a matéria-prima da revisão.
- Variação: explique para a IA em modo de voz e peça que ela te interrompa com perguntas.
  Veja [`prompts/01-feynman-voz.pt-BR.md`](../prompts/01-feynman-voz.pt-BR.md).

Base: **Técnica de Feynman** e *production effect* (falar em voz alta melhora a memória).

---

## E: Exercitar (fim de cada módulo)

**Objetivo:** buscar a informação na memória sob pressão leve.

Ao fechar o módulo, faça 8 a 12 questões geradas com a IA. Errou? Vai para o
[diário de erros](../templates/diario-de-erros.md) com a **causa** do erro (não entendi o conceito,
confundi serviços parecidos, li errado, não lembrei).

Base: **retrieval practice / testing effect** (Roediger & Karpicke). Testar-se ensina mais
que reler.

---

## A: Avaliar (simulado semanal)

**Objetivo:** ver o quadro completo e treinar o "misturado" da prova real.

No fim da semana, um simulado com **todos os módulos vistos** (e um pouco das semanas
anteriores). As questões vêm embaralhadas, como na prova. Veja
[`prompts/03-simulado-semanal.pt-BR.md`](../prompts/03-simulado-semanal.pt-BR.md).

Base: *interleaving* (Kornell & Bjork) e teste cumulativo.

---

## R: Revisar (ativo e espaçado)

**Objetivo:** vencer a curva do esquecimento.

Durante a semana (e nas seguintes), gaste 10 a 15 minutos por dia:
- reouvindo os áudios do Mostrar,
- refazendo as questões do diário de erros.

Sugestão de intervalos: **1 dia, 3 dias, 7 dias, 14 dias, 30 dias**. Acertou fácil? Aumente o
intervalo. Errou? Volta para o começo.

Base: curva do esquecimento (Ebbinghaus) e *distributed practice* (Cepeda et al.).
Ferramenta opcional: Anki para os cartões que sobrarem do diário de erros.

---

## Onde a IA entra

| Etapa | Uso da IA |
|---|---|
| Semear | Pedir um mapa do tema e um glossário do que vai aparecer |
| Estudar | Tirar dúvida pontual, pedir uma analogia |
| Mostrar | Conversa por voz: você explica, ela questiona |
| Exercitar | Gerar questões do módulo com gabarito comentado |
| Avaliar | Simulado semanal cumulativo |
| Revisar | Transformar erros em cartões e sugerir o que rever hoje |

**Cuidado:** a IA erra. Confirme respostas duvidosas na documentação oficial. Um erro seu
corrigido com fonte oficial vale mais do que dez acertos confirmados só pela IA.

---

## Base científica

Veja [`ciencia.md`](ciencia.md).
