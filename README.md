# Site Linka — nova versão

Site estático gerado por um script Node, sem dependências.

```
src/content.mjs   todo o conteúdo (PT/EN/ES), Lab, artigos, cases
src/render.mjs    template HTML
assets/           CSS, JS e imagens
static/           favicon e robots.txt (copiados para a raiz)
build.mjs         gera dist/
serve.mjs         pré-visualização local
```

## Uso

```bash
node build.mjs
```

```bash
node serve.mjs
```

Depois abra http://localhost:4173/ (versão pública) ou http://localhost:4173/review/ (versão de revisão, com notas internas).

## Saída

- `dist/`: versão pública. PT em `/`, EN em `/en/`, ES em `/es/`. `/sobre`, `/contato` e `/lab` redirecionam para a seção correspondente da home.
- `dist/review/`: versão de revisão, com `noindex`. **Não publicar.**

## Navegação

- Cada seção tem um endereço próprio (`/#servicos`, `/#lab`, `/en/#contato`…). Voltar/avançar e recarregar funcionam, e a seção para logo abaixo do cabeçalho.
- Os detalhes também têm endereço: `/#dados-mensuracao`, `/#lab-completo`, `/#eric-trajetoria`, `/#faq-2`.
- Ao trocar de idioma, a página continua na mesma seção.

## Publicação: o que precisa continuar no servidor

O build não gera nem altera estas páginas, que devem continuar existindo: `/blog` e os artigos em `/blog/...`, `/calculadora`, `/gerador-plano-midia`, `/privacidade`, `/og-image.jpg` e `/sitemap.xml`. O sitemap deve ganhar `/en/` e `/es/`.

## Adicionar um case

Inclua um objeto em `CASES` (`src/content.mjs`), no formato descrito no comentário do arquivo, e rode o build. Com pelo menos um case, a seção e o item de menu aparecem automaticamente.

Pendências de conteúdo: mantidas fora do repositório.
