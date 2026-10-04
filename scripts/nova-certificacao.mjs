#!/usr/bin/env node
// Cria certificacoes/<slug>/ a partir de certificacoes/_modelo/.
// Uso: node scripts/nova-certificacao.mjs <slug> "<Título da prova>"
// Ex.:  node scripts/nova-certificacao.mjs dp-203 "DP-203 | Azure Data Engineer Associate"

import { cpSync, existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MODELO = join(ROOT, "certificacoes", "_modelo");
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function fail(msg) {
  console.error(`erro: ${msg}`);
  console.error('uso: node scripts/nova-certificacao.mjs <slug> "<Título da prova>"');
  process.exit(1);
}

const [slug, titulo] = process.argv.slice(2);
if (!slug || !titulo) fail("informe o slug e o título.");
if (!SLUG.test(slug)) fail(`slug inválido "${slug}". Use minúsculas, números e hífens (ex.: dp-203).`);

const destino = join(ROOT, "certificacoes", slug);
if (existsSync(destino)) fail(`a pasta certificacoes/${slug} já existe.`);

cpSync(MODELO, destino, { recursive: true });

function preencher(dir) {
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) preencher(caminho);
    else if (nome.endsWith(".md")) {
      const texto = readFileSync(caminho, "utf8").replaceAll("{{TITULO}}", titulo);
      writeFileSync(caminho, texto);
    }
  }
}
preencher(destino);

console.log(`✔ certificacoes/${slug}/ criada.`);
console.log("Próximos passos:");
console.log(`  1. Preencha domínios e pesos em certificacoes/${slug}/README.md com a fonte oficial.`);
console.log("  2. Adicione a prova na tabela de certificações do README.md e do README.pt-BR.md.");
console.log("  3. Rode npm run check.");
