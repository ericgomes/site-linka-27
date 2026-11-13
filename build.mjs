// Gera o site estático em ./dist
//   dist/            versão pública (PT em /, EN em /en/, ES em /es/)
//   dist/review/     versão de revisão, com notas internas (noindex) — não publicar
//
// Uso local:            node build.mjs
// Prévia no GitHub Pages: BASE_PATH=/site-linka-27 PREVIEW=1 NO_REVIEW=1 node build.mjs
//   BASE_PATH  prefixo do subcaminho onde o site é servido
//   PREVIEW    marca como prévia: noindex, sem GTM, blog/privacidade apontam para o site no ar
//   NO_REVIEW  não gera dist/review (as notas internas não são publicadas)
import { mkdirSync, writeFileSync, cpSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LANGS, LANG_META } from './src/content.mjs';
import { render, redirect } from './src/render.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'dist');
const basePath = (process.env.BASE_PATH || '').replace(/\/+$/, '');
const preview = !!process.env.PREVIEW;
const withReview = !process.env.NO_REVIEW;

if (existsSync(OUT)) rmSync(OUT, { recursive: true, force: true });
const write = (rel, html) => {
  const file = join(OUT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html, 'utf8');
};

for (const lang of LANGS) {
  const p = LANG_META[lang].path;
  write(join(p, 'index.html'), render(lang, { review: false, basePath, preview }));
  if (withReview) write(join('review', p, 'index.html'), render(lang, { review: true, basePath, preview }));
}

// URLs institucionais antigas abrem a home na seção correspondente.
const redirects = { sobre: '/#socios', contato: '/#contato', lab: '/#lab' };
for (const [from, to] of Object.entries(redirects)) write(join(from, 'index.html'), redirect(basePath + to));

cpSync(join(ROOT, 'assets'), join(OUT, 'assets'), { recursive: true });
cpSync(join(ROOT, 'static'), OUT, { recursive: true });
writeFileSync(join(OUT, '.nojekyll'), '');

console.log(`Build concluído em dist/${withReview ? ' (+ dist/review/)' : ''}${basePath ? ` com BASE_PATH=${basePath}` : ''}${preview ? ' [prévia]' : ''}.`);
