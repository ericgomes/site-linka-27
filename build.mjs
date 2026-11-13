// Gera o site estático em ./dist
//   dist/            versão pública (PT em /, EN em /en/, ES em /es/)
//   dist/review/     versão de revisão, com notas internas (noindex) — não publicar
// Uso: node build.mjs
import { mkdirSync, writeFileSync, cpSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LANGS, LANG_META } from './src/content.mjs';
import { render, redirect } from './src/render.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'dist');

if (existsSync(OUT)) rmSync(OUT, { recursive: true, force: true });
const write = (rel, html) => {
  const file = join(OUT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html, 'utf8');
};

for (const lang of LANGS) {
  const p = LANG_META[lang].path;
  write(join(p, 'index.html'), render(lang, { review: false }));
  write(join('review', p, 'index.html'), render(lang, { review: true }));
}

// URLs institucionais antigas abrem a home na seção correspondente.
const redirects = { sobre: '/#socios', contato: '/#contato', lab: '/#lab' };
for (const [from, to] of Object.entries(redirects)) write(join(from, 'index.html'), redirect(to));

cpSync(join(ROOT, 'assets'), join(OUT, 'assets'), { recursive: true });
cpSync(join(ROOT, 'static'), OUT, { recursive: true });

console.log('Build concluído em dist/ (pública) e dist/review/ (revisão).');
