#!/usr/bin/env node
// Verificações do repositório, sem dependências. Rode com: npm run check
//
//  1. links relativos e âncoras (#secao) apontam para algo que existe
//  2. sem travessões longos (— ou –), regra de estilo da casa
//  3. toda certificação segue o molde (README, plano, erros, recursos, resumos/)
//  4. toda certificação aparece no README.md e no README.pt-BR.md
//  5. todo arquivo .en.md tem par em português, e vice-versa
//
// Links externos (http) ficam para o lychee, no CI.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const IGNORAR = new Set([".git", "node_modules"]);
const MOLDE = ["README.md", "plano.md", "erros.md", "recursos.md", "resumos"];
const MODELO = "_modelo";

const erros = [];
const rel = (p) => relative(ROOT, p).split(sep).join("/");
const erro = (arquivo, linha, msg) => erros.push(`${rel(arquivo)}${linha ? `:${linha}` : ""}  ${msg}`);

function listarMarkdown(dir) {
  return readdirSync(dir).flatMap((nome) => {
    if (IGNORAR.has(nome)) return [];
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) return listarMarkdown(caminho);
    return nome.endsWith(".md") ? [caminho] : [];
  });
}

// Troca blocos de código por linhas vazias (preservando a numeração) e apaga código inline,
// para não confundir exemplos com links ou títulos de verdade.
function semCodigo(texto) {
  let dentro = false;
  return texto.split("\n").map((linha) => {
    if (/^\s*(```|~~~)/.test(linha)) {
      dentro = !dentro;
      return "";
    }
    return dentro ? "" : linha.replace(/`[^`]*`/g, "");
  });
}

// Mesmo algoritmo de âncoras do GitHub: minúsculas, remove pontuação e emoji, espaço vira hífen.
function ancorasDe(arquivo) {
  const vistas = new Map();
  const ancoras = new Set();
  for (const linha of semCodigo(readFileSync(arquivo, "utf8"))) {
    const m = linha.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const base = m[1]
      .replace(/<[^>]+>/g, "")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s_-]/gu, "")
      .replace(/ /g, "-");
    const n = vistas.get(base) ?? 0;
    vistas.set(base, n + 1);
    ancoras.add(n === 0 ? base : `${base}-${n}`);
  }
  return ancoras;
}

const cacheAncoras = new Map();
function temAncora(arquivo, ancora) {
  if (!cacheAncoras.has(arquivo)) cacheAncoras.set(arquivo, ancorasDe(arquivo));
  return cacheAncoras.get(arquivo).has(decodeURIComponent(ancora).toLowerCase());
}

const LINK_MD = /!?\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g;
const LINK_HTML = /\b(?:href|src)="([^"]+)"/g;

function checarLinks(arquivo) {
  semCodigo(readFileSync(arquivo, "utf8")).forEach((linha, i) => {
    const alvos = [...linha.matchAll(LINK_MD), ...linha.matchAll(LINK_HTML)].map((m) => m[1]);
    for (const alvo of alvos) {
      if (/^[a-z][a-z0-9+.-]*:/i.test(alvo)) continue; // http:, https:, mailto:
      const [caminho, ancora] = alvo.split("#");
      const destino = caminho ? resolve(dirname(arquivo), decodeURIComponent(caminho)) : arquivo;
      if (!existsSync(destino)) {
        erro(arquivo, i + 1, `link quebrado: ${alvo}`);
      } else if (ancora && destino.endsWith(".md") && !temAncora(destino, ancora)) {
        erro(arquivo, i + 1, `âncora inexistente: ${alvo}`);
      }
    }
  });
}

function checarTravessoes(arquivo) {
  readFileSync(arquivo, "utf8").split("\n").forEach((linha, i) => {
    if (/[—–]/.test(linha)) erro(arquivo, i + 1, "travessão longo (— ou –): use vírgula, dois-pontos ou ponto");
  });
}

function checarCertificacoes() {
  const base = join(ROOT, "certificacoes");
  const provas = readdirSync(base).filter((n) => statSync(join(base, n)).isDirectory());
  const readmes = ["README.md", "README.pt-BR.md"].map((n) => [join(ROOT, n), readFileSync(join(ROOT, n), "utf8")]);

  for (const prova of provas) {
    const pasta = join(base, prova);
    for (const item of MOLDE) {
      if (!existsSync(join(pasta, item))) erro(pasta, 0, `fora do molde: falta ${item}`);
    }
    if (prova === MODELO) continue;
    for (const [caminho, texto] of readmes) {
      if (!texto.includes(`certificacoes/${prova}/`)) erro(caminho, 0, `certificação "${prova}" não aparece na tabela`);
    }
  }
}

function checarPares(arquivos) {
  const existe = new Set(arquivos.map(rel));
  for (const r of existe) {
    const en = r.match(/^(.*)\.en\.md$/);
    const pt = r.match(/^(.*)\.pt-BR\.md$/);
    if (en && !existe.has(`${en[1]}.pt-BR.md`) && !existe.has(`${en[1]}.md`)) {
      erro(join(ROOT, r), 0, "sem versão em português");
    }
    if (pt && !existe.has(`${pt[1]}.en.md`) && !existe.has(`${pt[1]}.md`)) {
      erro(join(ROOT, r), 0, "sem versão em inglês");
    }
  }
}

const arquivos = listarMarkdown(ROOT);
for (const arquivo of arquivos) {
  checarLinks(arquivo);
  checarTravessoes(arquivo);
}
checarCertificacoes();
checarPares(arquivos);

if (erros.length) {
  console.error(`✖ ${erros.length} problema(s):\n`);
  for (const e of erros) console.error(`  ${e}`);
  process.exit(1);
}
console.log(`✔ ${arquivos.length} arquivos Markdown verificados, tudo certo.`);
