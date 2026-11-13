import { SITE, LANGS, LANG_META, PEOPLE, T, LAB, ARTICLES, CASES } from './content.mjs';

const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ICON = {
  wa: '<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12.04 2a9.9 9.9 0 0 0-8.5 15l-1.4 5.1 5.2-1.4A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7 3.9Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>',
  cal: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>',
  in: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5Z"/></svg>',
  ext: '<svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  arrow: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>',
  sun: '<svg class="i-sun" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g></svg>',
  moon: '<svg class="i-moon" aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/></svg>',
  menu: '<svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>',
  globe: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></g></svg>',
  chatgpt: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.911 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.182a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .511 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.989 5.989 0 0 0 3.998-2.9 6.056 6.056 0 0 0-.748-7.073zm-9.022 12.608a4.476 4.476 0 0 1-2.876-1.041l.142-.08 4.778-2.758a.795.795 0 0 0 .393-.681v-6.737l2.02 1.169a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.495 4.494zm-9.661-4.125a4.471 4.471 0 0 1-.535-3.014l.142.085 4.783 2.758a.771.771 0 0 0 .781 0l5.843-3.369v2.332a.08.08 0 0 1-.033.061L9.74 19.95a4.499 4.499 0 0 1-6.141-1.646zM2.341 7.896a4.485 4.485 0 0 1 2.365-1.973V11.6a.766.766 0 0 0 .388.676l5.814 3.354-2.02 1.169a.076.076 0 0 1-.071 0l-4.83-2.787A4.504 4.504 0 0 1 2.341 7.872zm16.596 3.856L13.104 8.364 15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.104v-5.677a.79.79 0 0 0-.407-.667zm2.011-3.023l-.142-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.499 4.499 0 0 1 6.68 4.66zM8.306 12.863l-2.02-1.164a.08.08 0 0 1-.038-.057V6.074a4.499 4.499 0 0 1 7.376-3.454l-.142.081L8.704 5.459a.795.795 0 0 0-.393.681zm1.098-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z"></svg>',
  claude: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="m4.714 15.956 4.717-2.647.079-.231-.079-.128h-.231l-.789-.049-2.696-.073-2.337-.097-2.265-.121-.571-.121-.534-.704.055-.352.48-.322.686.061 1.518.103 2.277.158 1.651.097 2.447.255h.389l.055-.158-.134-.097-.103-.097L6.973 9.836l-2.55-1.688-1.336-.971-.723-.492-.364-.461-.158-1.008.656-.723.88.061.225.061.892.686 1.906 1.475 2.489 1.834.364.303.146-.103.018-.073-.164-.273-1.354-2.447-1.445-2.489-.643-1.032-.17-.619c-.061-.255-.103-.467-.103-.729L6.287.134 6.7 0l.996.134.419.364.619 1.415 1.002 2.228 1.554 3.03.455.898.243.832.091.255h.158v-.146l.128-1.706.237-2.095.231-2.696.079-.759.376-.911.747-.492.583.279.48.686-.067.443-.285 1.852-.559 2.902-.364 1.943h.212l.243-.243.984-1.305 1.651-2.064.729-.82.85-.905.546-.431h1.032l.759 1.129-.34 1.166-1.062 1.348-.88 1.141-1.263 1.7-.789 1.36.073.109.188-.018 2.853-.607 1.542-.279 1.84-.316.832.389.091.395-.328.807-1.967.486-2.307.461-3.436.814-.043.03.049.061 1.548.146.662.036h1.621l3.018.225.789.522.474.638-.079.486-1.214.619-1.639-.389-3.825-.911-1.311-.328h-.182v.109l1.093 1.069 2.003 1.809 2.507 2.331.128.577-.322.455-.34-.049-2.204-1.657-.85-.747-1.925-1.621h-.128v.17l.443.65 2.344 3.521.121 1.081-.17.352-.607.212-.668-.121-1.372-1.925L14.38 17.959l-1.141-1.943-.14.079-.674 7.255-.316.37-.729.279-.607-.461-.322-.747.322-1.475.389-1.925.316-1.53.285-1.9.17-.631-.012-.043-.14.018-1.433 1.967-2.18 2.945-1.724 1.846-.413.164-.716-.37.067-.662.401-.589 2.386-3.036 1.439-1.882.929-1.087-.006-.158h-.055l-6.338 4.116-1.129.146-.486-.455.061-.747.231-.243 1.906-1.311Z"></svg>',
  copy: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></g></svg>',
  chevron: '<svg aria-hidden="true" viewBox="0 0 24 24" width="12" height="12"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" d="M6 15l6-6 6 6"/></svg>',
  ai: '<svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Zm6 12 .9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14Z"/></svg>',
};

export function render(lang, { review = false, basePath = '', preview = false } = {}) {
  const BP = basePath; // prefixo do subcaminho (ex.: /site-linka-27 no GitHub Pages)
  // Páginas que existem só no servidor atual (blog, privacidade): na prévia, apontam para o site no ar.
  const legacy = (u) => (preview ? SITE.origin + u : u);
  const t = (o) => (o == null ? '' : typeof o === 'string' ? o : (o[lang] ?? o.pt));
  const L = LANG_META[lang];
  const base = BP + (review ? '/review' : '');
  const home = base + L.path;
  const visible = (x) => review || !x.review;
  const note = (txt) => (review && txt ? `<p class="rv-note"><strong>Nota interna:</strong> ${esc(txt)}</p>` : '');
  const nt = esc(t(T.ui.newTab));
  const extLink = (href, label, cls = '', extra = '') =>
    `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener noreferrer"${extra}>${label}<span class="sr-only"> ${nt}</span></a>`;

  const hasCases = CASES.length > 0;
  const showCases = hasCases || review;
  const navItems = T.nav.filter((n) => !n.needsCases || showCases);

  // ---------- header ----------
  const langSwitch = LANGS.map((l) => {
    const m = LANG_META[l];
    const cur = l === lang;
    return `<a class="lang-opt" href="${base}${m.path}" hreflang="${m.html}" lang="${m.html}" data-lang-link${cur ? ' aria-current="true"' : ''}><abbr title="${esc(m.label)}">${m.short}</abbr><span class="sr-only">${esc(m.label)}</span></a>`;
  }).join('');

  const header = `
<a class="skip" href="#conteudo">${esc(t(T.ui.skip))}</a>
${review ? `<div class="rv-banner" role="note">Versão de revisão: inclui notas internas, conteúdos pendentes e estruturas sem dados. Não publicar. A versão pública está em <a href="${BP}${L.path}">${BP}${L.path}</a>.</div>` : ''}
<header class="site-header" id="topo">
  <div class="wrap header-inner">
    <a class="logo" href="#inicio" aria-label="Linka — ${esc(t(T.ui.backToTop))}">
      <img class="logo-mark" src="${BP}/assets/img/logo-linka.svg" alt="" width="44" height="44">
    </a>
    <nav class="main-nav" id="main-nav" aria-label="${esc(t(T.ui.menu))}">
      <ul>
        ${navItems.map((n) => `<li><a href="#${n.id}" data-nav="${n.id}">${esc(t(n.label)).replace(/\n/g, ' <br class="nav-br">')}</a></li>`).join('')}
      </ul>
      <a class="btn btn-sm btn-primary nav-cta" href="#contato" data-nav="contato">${esc(t(T.navCta))}</a>
    </nav>
    <div class="header-tools">
      <div class="lang-switch" role="group" aria-label="${esc(t(T.ui.language))}">${ICON.globe}${langSwitch}</div>
      <button class="icon-btn theme-toggle" type="button" data-label-dark="${esc(t(T.ui.themeToDark))}" data-label-light="${esc(t(T.ui.themeToLight))}" aria-label="${esc(t(T.ui.themeToDark))}">${ICON.moon}${ICON.sun}</button>
      <button class="icon-btn menu-toggle" type="button" aria-controls="main-nav" aria-expanded="false" data-label-open="${esc(t(T.ui.menu))}" data-label-close="${esc(t(T.ui.closeMenu))}" aria-label="${esc(t(T.ui.menu))}">${ICON.menu}</button>
    </div>
  </div>
</header>`;

  // ---------- hero ----------
  const H = T.hero;
  const stages = t(H.stages);
  const touch = t(H.touch);
  // Ícones dos pontos de contato da jornada (mesma ordem de H.touch)
  const TOUCH_ICONS = [
    '<path d="M10.5 18a7.5 7.5 0 1 1 5.3-2.2L21 21"/><path d="M10.5 7v7M7 10.5h7" opacity=".55"/>',
    '<path d="M4 19c8 0 14-5 15-14-9 1-14 7-14 15"/><path d="M4 19l7-7"/>',
    '<path d="M4 10v4h3l6 4V6L7 10H4z"/><path d="M17 9a4 4 0 0 1 0 6"/>',
    '<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v4h-4"/>',
    '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  ];
  const ico = (i) => `<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${TOUCH_ICONS[i]}</g></svg>`;
  // "Animated beam": canais → núcleo de mensuração → conversão. Linhas desenhadas por JS (site.js).
  const diagram = `
<figure class="beam" aria-labelledby="journey-title">
  <figcaption class="beam-cap">
    <span class="beam-title" id="journey-title">${esc(t(H.diagramTitle))}</span>
    <span class="sr-only">${esc(t(H.diagramDesc))}</span>
  </figcaption>
  <div class="beam-stage" data-beam aria-hidden="true">
    <svg class="beam-svg"></svg>
    <div class="beam-col beam-in">
      <p class="beam-col-h">${esc(stages[0])} · ${esc(stages[1])}</p>
      ${touch.slice(0, -1).map((label, i) => `<div class="beam-node" data-beam-from>${ico(i)}<span>${esc(label)}</span></div>`).join('')}
    </div>
    <div class="beam-col beam-mid">
      <div class="beam-hub" data-beam-hub><img src="${BP}/assets/img/logo-linka.svg" alt="" width="44" height="44"></div>
      <p class="beam-hub-label">${esc(t(H.hub))}</p>
    </div>
    <div class="beam-col beam-out">
      <p class="beam-col-h">${esc(stages[2])}</p>
      <div class="beam-node beam-node-out" data-beam-to>${ico(touch.length - 1)}<span>${esc(touch[touch.length - 1])}</span></div>
    </div>
  </div>
  <p class="beam-foot" aria-hidden="true"><span class="dot"></span>${esc(t(H.lastClick))}</p>
</figure>`;

  const hero = `
<section class="hero" id="inicio" aria-labelledby="hero-title">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="hero-badge"><span class="pulse" aria-hidden="true"></span>${esc(t(H.eyebrow))}</p>
      <h1 id="hero-title">${t(H.title).split(/(?<=\.)\s+/).map((f, i) => `<span class="h1-line${i === 1 ? ' h1-grad' : ''}">${esc(f)}</span>`).join(' ')}</h1>
      <p class="lead">${esc(t(H.lead))}</p>
      <p class="hero-support">${esc(t(H.support))}</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="#contato">${esc(t(H.ctaPrimary))} ${ICON.arrow}</a>
        <a class="btn btn-ghost" href="${hasCases || review ? '#cases' : '#servicos'}">${esc(t(hasCases || review ? H.ctaSecondary : H.ctaSecondaryNoCases))}</a>
      </div>
      ${review && !hasCases ? note('Na versão pública, sem cases aprovados, o CTA secundário aponta para "O que fazemos". Quando houver cases, passa a "Conhecer resultados".') : ''}
    </div>
    ${diagram}
  </div>
</section>`;

  // ---------- proof strip ----------
  const proof = `
<section class="proof" aria-label="${esc(t(T.proof.label))}">
  <div class="wrap proof-inner">
    <a class="premier-badge" href="https://www.google.com/partners/agency?id=8434993335" target="_blank" rel="noopener noreferrer">
      <img src="https://www.gstatic.com/partners/badge/images/2026/PremierBadgeClickable.svg" alt="Google Premier Partner 2026" width="120" height="114" loading="lazy"><span class="sr-only"> ${nt}</span>
    </a>
    <ul class="proof-list">
      ${T.proof.items.map((p) => `<li><strong>${esc(t(p.title))}</strong><span>${esc(t(p.text))}</span></li>`).join('')}
    </ul>
    <a class="link-arrow" href="#credenciais">${esc(t(T.proof.more))} ${ICON.arrow}</a>
  </div>
  ${review ? `<div class="wrap">${note('Faixa de logos de marcas atendidas: só entra após confirmação de quais logos podem ser exibidos (briefing §8.2 e §15). Estatísticas do diretório do Google (ex.: "1 entre 62") foram retiradas por mudarem com o tempo.')}</div>` : ''}
</section>`;

  // ---------- services ----------
  const S = T.services;
  const svgI = (d) => `<svg viewBox="0 0 24 24" width="22" height="22"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</g></svg>`;
  const SERVICE_ICONS = {
    'seo-geo': svgI('<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/><path d="M10.5 7.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" fill="currentColor" stroke="none"/>'),
    'midias-pagas': svgI('<path d="M3 11v3a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/>'),
    'dados-mensuracao': svgI('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
  };
  // Demonstração interativa de modelos de atribuição (percentuais = definição do modelo)
  const A = S.attr;
  const attrTouches = [touch[0], touch[2], touch[3]];
  const defModel = A.models.find((m) => m.id === A.defaultModel) || A.models[0];
  const attrDemo = `
        <figure class="attr" data-attr aria-labelledby="attr-title">
          <figcaption>
            <span class="attr-title" id="attr-title">${esc(t(A.title))}</span>
            <span class="attr-cap">${esc(t(A.caption))}</span>
          </figcaption>
          <div class="attr-models" role="group" aria-label="${esc(t(A.modelsLabel))}">
            ${A.models.map((m) => `<button type="button" class="attr-model" data-credit="${m.credit.join(',')}" aria-pressed="${m.id === defModel.id}">${esc(t(m.name))}</button>`).join('')}
          </div>
          <ol class="attr-path">
            ${attrTouches.map((label, i) => `<li class="attr-touch">
              <span class="attr-touch-label"><span class="attr-step" aria-hidden="true">${i + 1}</span>${esc(label)}</span>
              <span class="attr-bar" aria-hidden="true"><span style="width:${defModel.credit[i]}%"></span></span>
              <span class="attr-val" data-attr-val>${defModel.credit[i]}%</span>
            </li>`).join('')}
            <li class="attr-touch attr-conv"><span class="attr-touch-label"><span class="attr-step" aria-hidden="true">${ico(4)}</span>${esc(touch[4])}</span></li>
          </ol>
        </figure>`;
  const services = `
<section class="section" id="servicos" aria-labelledby="servicos-title">
  <div class="wrap">
    <header class="section-head">
      <p class="eyebrow">${esc(t(S.eyebrow))}</p>
      <h2 id="servicos-title">${esc(t(S.title))}</h2>
      <p class="lead">${esc(t(S.lead))}</p>
    </header>
    <div class="services bento">
      ${S.items.map((it, i) => `
      <article class="service glow-card${it.id === 'dados-mensuracao' ? ' service-wide' : ''}" id="${it.id}" aria-labelledby="${it.id}-t">
        <div class="service-main">
        <div class="service-top"><span class="service-icon" aria-hidden="true">${SERVICE_ICONS[it.id] || ''}</span><span class="service-n" aria-hidden="true">0${i + 1}</span></div>
        <h3 id="${it.id}-t">${esc(t(it.title))}</h3>
        <p>${esc(t(it.summary))}</p>
        <div class="service-ai">
          <p class="mini-label">${ICON.ai} ${esc(t(S.aiLabel))}</p>
          <p>${esc(t(it.ai))}</p>
        </div>
        <div class="service-details">
            <p class="mini-label">${esc(t(S.deliverLabel))}</p>
            <ul class="check-list">${t(it.deliver).map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
            ${it.channels ? `<p class="mini-label">${esc(t(S.channelsLabel))}</p>
            <ul class="chips">${it.channels.filter(visible).map((c) => `<li${c.review ? ' class="rv-item"' : ''}>${esc(c.name)}</li>`).join('')}</ul>${note(it.channelsNote)}` : ''}
            ${it.disclaimer ? `<p class="fine">${esc(t(it.disclaimer))}</p>` : ''}
        </div>
        </div>
        ${it.id === 'dados-mensuracao' ? attrDemo : ''}
      </article>`).join('')}
    </div>
    <div class="connect">
      <h3>${esc(t(S.connectTitle))}</h3>
      <ol class="connect-steps">${t(S.connect).map((c) => `<li>${esc(c)}</li>`).join('')}</ol>
    </div>
    ${note('Nome "Dados e Mensuração" é o recomendado na discussão mais recente; confirmar redação final. Usos de IA citados aqui correspondem a ferramentas do Lab; nenhuma menção a agentes de IA até confirmar quais operações se enquadram.')}
  </div>
</section>`;

  // ---------- cases ----------
  const C = T.cases;
  const caseChart = (c) => {
    const max = Math.max(c.before, c.after) || 1;
    const unit = c.unit === '%' ? '%' : c.unit === 'pp' ? ' p.p.' : '';
    const bar = (lbl, v, cls) => `<div class="bar-row"><span class="bar-lbl">${esc(lbl)}</span><span class="bar ${cls}" style="--w:${(v / max) * 100}%"></span><span class="bar-val">${esc(v)}${unit}</span></div>`;
    return `<figure class="case-chart"><figcaption>${esc(t(c.metric))} · ${esc(t(c.period))}</figcaption>${bar(t(C.labels.before), c.before, 'b0')}${bar(t(C.labels.after), c.after, 'b1')}</figure>`;
  };
  const casePlaceholder = (n) => `
      <article class="case case-pending">
        <p class="case-seg">Case ${n} · aguardando dados</p>
        <dl>
          <div><dt>${esc(t(C.labels.segment))}</dt><dd>—</dd></div>
          <div><dt>${esc(t(C.labels.challenge))}</dt><dd>—</dd></div>
          <div><dt>${esc(t(C.labels.action))}</dt><dd>—</dd></div>
          <div><dt>${esc(t(C.labels.period))}</dt><dd>—</dd></div>
        </dl>
        <div class="case-chart empty" aria-hidden="true"><span>Gráfico antes × depois (somente com dados reais)</span></div>
      </article>`;
  const cases = !showCases ? '' : `
<section class="section section-alt" id="cases" aria-labelledby="cases-title">
  <div class="wrap">
    <header class="section-head">
      <p class="eyebrow">${esc(t(C.eyebrow))}</p>
      <h2 id="cases-title">${esc(t(C.title))}</h2>
      <p class="lead">${esc(t(C.lead))}</p>
    </header>
    <div class="cases">
      ${hasCases ? CASES.map((c) => `
      <article class="case">
        <p class="case-seg">${esc(t(c.segment))}</p>
        <dl>
          <div><dt>${esc(t(C.labels.challenge))}</dt><dd>${esc(t(c.challenge))}</dd></div>
          <div><dt>${esc(t(C.labels.action))}</dt><dd>${esc(t(c.action))}</dd></div>
          <div><dt>${esc(t(C.labels.result))}</dt><dd>${esc(t(c.result))}</dd></div>
        </dl>
        ${caseChart(c)}
      </article>`).join('') : [1, 2, 3].map(casePlaceholder).join('')}
    </div>
    ${!hasCases ? note('Nenhum case com dados reais foi fornecido. Na versão pública esta seção e o item "Cases" do menu ficam ocultos até haver três cases de antigos clientes, anonimizados, com período, métrica, unidade e comparação (antes × depois). O componente de gráfico já está pronto e é alimentado por src/content.mjs → CASES.') : ''}
  </div>
</section>`;

  // ---------- how we work + lab ----------
  const W = T.work;
  const LB = T.lab;
  const labItems = LAB.filter((x) => review || x.public !== false);
  const LAB_ICONS = {
    atribuicao: '<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 6c6 0 6 6 10 6M7 18c6 0 6-6 10-6"/>',
    orcamento: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 12.5h2M3 10h18"/>',
    seo: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/><path d="M10.5 7.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" fill="currentColor" stroke="none"/>',
    conectores: '<path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0V7zM12 16v5"/>',
    'mcp-ga4': '<path d="M4 5h16v11H9l-5 4V5z"/><path d="M9 12V9M12 12V8M15 12v-2"/>',
    cidades: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    'plano-midia': '<path d="M12 3a9 9 0 1 0 9 9h-9V3z"/><path d="M15 3.5A9 9 0 0 1 20.5 9H15V3.5z"/>',
    calculadora: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2"/>',
    lsm: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="M12 18l4-5"/>',
    artigos: '<path d="M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4"/>',
    'comparador-gsc': '<path d="M7 4v16M17 4v16M3 8l4-4 4 4M13 16l4 4 4-4"/>',
    reputacao: '<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.8 6.7 19.4l1.2-6L3.4 9.3l6-.7L12 3z"/>',
    gtd: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  };
  const labCard = (x) => {
    const url = x.url || (review ? x.reviewUrl : null);
    const st = x.status;
    const cta = x.url && st === 'open' ? t(LB.ctaOpen) : x.url && st === 'demo' ? t(LB.ctaDemo) : null;
    return `
      <li class="tool glow-card${x.featured ? ' tool-featured' : ''}${x.public === false ? ' rv-item' : ''}">
        <span class="tool-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${LAB_ICONS[x.id] || ''}</g></svg></span>
        <div class="tool-top">
          <span class="tag tag-${st}">${esc(t(LB.status[st]))}</span>
          ${x.ai ? `<span class="tag tag-ai">${ICON.ai} ${esc(t(LB.usesAi))}</span>` : ''}
        </div>
        <h4>${esc(t(x.name))}</h4>
        <p>${esc(t(x.text))}</p>
        ${cta ? extLink(x.url, `${esc(cta)} ${ICON.ext}`, 'tool-cta')
          : `<a class="tool-cta" href="#contato" data-tool="${x.id}">${esc(t(LB.ctaRequest))} ${ICON.arrow}</a>`}
        ${review && x.reviewUrl ? `<p class="rv-note">URL existente: <a href="${esc(x.reviewUrl)}" target="_blank" rel="noopener">${esc(x.reviewUrl)}</a></p>` : ''}
        ${note(x.note)}
      </li>`;
  };
  const work = `
<section class="section on-dark section-work" id="como-trabalhamos" aria-labelledby="work-title">
  <div class="wrap">
    <header class="section-head">
      <p class="eyebrow">${esc(t(W.eyebrow))}</p>
      <h2 id="work-title">${esc(t(W.title))}</h2>
      <p class="lead">${esc(t(W.lead))}</p>
    </header>
    <ol class="practices timeline">
      ${W.items.map((w, i) => `<li><span class="tl-dot" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><h3>${esc(t(w.title))}</h3><p>${esc(t(w.text))}</p></li>`).join('')}
    </ol>
  </div>
</section>
<section class="section section-alt" id="lab" aria-labelledby="lab-title">
  <div class="wrap">
    <header class="section-head">
      <p class="eyebrow">${esc(t(LB.eyebrow))}</p>
      <h2 id="lab-title">${esc(t(LB.title))}</h2>
      <p class="lead">${esc(t(LB.lead))}</p>
    </header>
    <ul class="tools">${labItems.filter((x) => x.featured).map(labCard).join('')}</ul>
    <details class="lab-more" id="lab-completo" data-deeplink="lab-completo">
      <summary class="btn btn-ghost lab-more-btn">
        <span class="when-closed">${esc(t(LB.showMore))} (${labItems.filter((x) => !x.featured).length})</span>
        <span class="when-open">${esc(t(LB.showLess))}</span>
      </summary>
      <ul class="tools">${labItems.filter((x) => !x.featured).map(labCard).join('')}</ul>
    </details>
    ${note('Validação funcional de cada ferramenta ainda pendente. Somente Calculadora, Plano de Mídia e Cidades (?demo=1) recebem link direto na versão pública. Nenhuma ferramenta é descrita como "agente".')}
  </div>
</section>`;

  // ---------- people ----------
  const P = T.people;
  const person = (key) => {
    const p = PEOPLE[key];
    const c = P[key];
    return `
      <article class="person glow-card" id="${key}" aria-labelledby="${key}-name">
        <img class="person-photo" src="${BP}${p.photo}" alt="${esc(p.name)}" width="160" height="160" loading="lazy">
        <div class="person-body">
          <h3 id="${key}-name">${esc(p.name)}</h3>
          <p class="person-role">${esc(t(c.role))}</p>
          <p>${esc(t(c.bio))}</p>
          <ul class="person-links">
            <li>${extLink(p.whatsapp, `${ICON.wa} WhatsApp`, 'btn btn-sm btn-wa')}</li>
            <li>${extLink(p.schedule, `${ICON.cal} ${esc(t(T.ui.schedule))}`, 'btn btn-sm btn-ghost')}</li>
            <li>${extLink(p.linkedin, `${ICON.in} LinkedIn`, 'btn btn-sm btn-ghost')}</li>
          </ul>
          <div class="person-more" id="${key}-trajetoria">
            <p class="mini-label">${esc(t(P.moreLabel))}</p>
            <ul class="plain-list">${t(c.more).map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
          </div>
        </div>
      </article>`;
  };
  const people = `
<section class="section" id="socios" aria-labelledby="socios-title">
  <div class="wrap">
    <div class="socios-head">
      <header class="section-head">
        <p class="eyebrow">${esc(t(P.eyebrow))}</p>
        <h2 id="socios-title">${esc(t(P.title))}</h2>
        <p class="lead">${esc(t(P.lead))}</p>
      </header>
      <figure class="socios-photo">
        <img src="${BP}/assets/img/blog/black-friday-card.jpg" alt="${esc(t(P.photoAlt))}" width="800" height="500" loading="lazy">
        <figcaption>${esc(t(P.photoCaption))}</figcaption>
      </figure>
    </div>
    <div class="people">${person('eric')}${person('marcelo')}</div>
    ${review ? `
    <div class="rv-block">
      <p class="rv-note"><strong>Nota interna — trajetória a reconciliar (não publicada):</strong> o site atual cita 2007 (agência própria do Marcelo), 2010 (agência própria do Eric) e 2013 (união e fundação). Também usa "mais de 300 clientes", "desde 2013" e "mais de 15 anos". Nada disso foi publicado até a confirmação das datas e números. Também confirmar: formação de Eric (Ciência da Computação, PUC-SP), MBA de Marcelo, eventual passagem do Marcelo pelo iG.</p>
      <p class="rv-note"><strong>Agendas:</strong> verificadas em 12/11/2026 — link longo abre "Call de 30 mins com Eric"; link curto (calendar.app.google/b5h5…) abre "30 min with Marcelo". Por isso cada sócio recebeu o próprio link, apesar da instrução de usar o link curto para ambos. Confirmar.</p>
      <p class="rv-note"><strong>Fotos:</strong> só existem versões de 160 px no site atual. Enviar fotos em maior resolução.</p>
    </div>` : ''}
  </div>
</section>`;

  // ---------- credentials ----------
  const CR = T.creds;
  const years = [2023, 2024, 2025, 2026];
  const adsBadges = [['search', 'Google Ads Search'], ['display', 'Google Ads Display'], ['video', 'Google Ads Video'], ['shopping', 'Shopping Ads'], ['apps', 'Google Ads Apps']];
  const creds = `
<section class="section section-alt" id="credenciais" aria-labelledby="creds-title">
  <div class="wrap">
    <header class="section-head">
      <p class="eyebrow">${esc(t(CR.eyebrow))}</p>
      <h2 id="creds-title">${esc(t(CR.title))}</h2>
      <p class="lead">${esc(t(CR.lead))}</p>
    </header>
    <div class="creds">
      <article class="cred cred-wide glow-card">
        <h3>${esc(t(CR.premier.title))}</h3>
        <p>${esc(t(CR.premier.text))}</p>
        <ul class="badges">${years.map((y) => `<li><img src="${BP}/assets/img/badges/premier-${y}.jpg" alt="Google Premier Partner ${y}" width="96" height="96" loading="lazy"><span>${y}</span></li>`).join('')}</ul>
        <p class="cred-links">
          ${extLink('https://www.google.com/partners/agency?id=8434993335', `${esc(t(CR.premier.verify))} ${ICON.ext}`, 'link-arrow')}
          ${extLink('https://partnersdirectory.withgoogle.com/intl/pt-BR/?certs=search&certs=display&certs=video&certs=shopping&certs=apps&regions=BR&premier=true', `${esc(t(CR.premier.directory))} ${ICON.ext}`, 'link-arrow')}
        </p>
      </article>
      <article class="cred glow-card">
        <h3>${esc(t(CR.ads.title))}</h3>
        <p>${esc(t(CR.ads.text))}</p>
        <ul class="badges badges-sm">${adsBadges.map(([k, n]) => `<li><button type="button" class="zoom" data-full="${BP}/assets/img/badges/ads-${k}-lg.jpg" data-caption="${esc(n)}" aria-label="${esc(t(T.ui.enlarge))}: ${esc(n)}"><img src="${BP}/assets/img/badges/ads-${k}.jpg" alt="${esc(n)} — Certified" width="72" height="72" loading="lazy"></button></li>`).join('')}</ul>
      </article>
      <article class="cred glow-card">
        <h3>${esc(t(CR.linkedin.title))}</h3>
        <p>${esc(t(CR.linkedin.text))}</p>
        <ul class="cert-list">${CR.linkedin.items.map((c) => `<li>
          <button type="button" class="zoom cert-thumb" data-full="${BP}/assets/img/certs/${c.img}.jpg" data-caption="${esc(t(c.name))}" aria-label="${esc(t(T.ui.enlarge))}: ${esc(t(c.name))}"><img src="${BP}/assets/img/certs/${c.img}-thumb.jpg" alt="" width="96" height="74" loading="lazy"></button>
          <span class="cert-name">${esc(t(c.name))}</span>
          ${extLink(c.verify, `${esc(t(T.ui.verify))} ${ICON.ext}`, 'cert-verify')}
        </li>`).join('')}</ul>
      </article>
    </div>
    ${note('Datas das certificações Google Ads e LinkedIn não aparecem nas imagens atuais em formato confirmável; se houver validade/data, incluir. Texto do Premier evita o percentual "menos de 3%" até confirmação da fonte vigente.')}
  </div>
</section>`;

  // ---------- insights ----------
  const fmtDate = (d) => new Date(d + 'T12:00:00').toLocaleDateString(L.html, { day: 'numeric', month: 'long', year: 'numeric' });
  const insights = `
<section class="section" id="insights" aria-labelledby="insights-title">
  <div class="wrap">
    <header class="section-head section-head-row">
      <div>
        <p class="eyebrow">${esc(t(T.insights.eyebrow))}</p>
        <h2 id="insights-title">${esc(t(T.insights.title))}</h2>
      </div>
      <a class="link-arrow" href="${legacy('/blog')}">${esc(t(T.ui.allArticles))} ${ICON.arrow}</a>
    </header>
    <ul class="articles">
      ${ARTICLES.map((a) => `<li class="article glow-card">
        ${a.image ? `<img class="article-thumb" src="${BP}${a.image}" alt="" width="800" height="500" loading="lazy">` : `<div class="article-thumb article-thumb-fallback" aria-hidden="true"><img src="${BP}/assets/img/logo-linka.svg" alt="" width="72" height="72"></div>`}
        <div class="article-body">
        <p class="article-meta"><time datetime="${a.date}">${esc(fmtDate(a.date))}</time>${lang !== 'pt' ? ` · <span lang="pt-BR">${esc(t(T.ui.ptOnly))}</span>` : ''}</p>
        <h3><a href="${legacy(a.url)}" lang="pt-BR">${esc(a.title)}</a></h3>
        <p lang="pt-BR">${esc(a.text)}</p>
        </div>
      </li>`).join('')}
    </ul>
    ${note(`Nome da área editorial não decidido: "${SITE.editorialName.pt}" está em src/content.mjs → SITE.editorialName ("Conteúdos" é a alternativa). Os artigos e a URL /blog foram preservados sem mudança de comportamento.`)}
  </div>
</section>`;

  // ---------- contact ----------
  const CT = T.contact;
  const contactCard = (key, role) => {
    const p = PEOPLE[key];
    return `<article class="contact-card">
      <img src="${BP}${p.photo}" alt="" width="64" height="64" loading="lazy">
      <div>
        <h3>${esc(p.name)}</h3>
        <p class="person-role">${esc(t(role))}</p>
      </div>
      <ul class="person-links contact-links">
        <li>${extLink(p.whatsapp, `${ICON.wa} WhatsApp`, 'btn btn-sm btn-ghost btn-wa-soft')}</li>
        <li>${extLink(p.schedule, `${ICON.cal} ${esc(t(T.ui.schedule))}`, 'btn btn-sm btn-ghost')}</li>
        <li>${extLink(p.linkedin, `${ICON.in} LinkedIn`, 'btn btn-sm btn-ghost btn-in-soft')}</li>
      </ul>
    </article>`;
  };
  const contact = `
<section class="section section-contact on-dark" id="contato" aria-labelledby="contato-title">
  <div class="wrap contact-grid">
    <div>
      <p class="eyebrow">${esc(t(CT.eyebrow))}</p>
      <h2 id="contato-title">${esc(t(CT.title))}</h2>
      <p class="lead">${esc(t(CT.lead))}</p>
      ${t(CT.langNote) ? `<p class="fine">${esc(t(CT.langNote))}</p>` : ''}
      <div class="contact-cards">
        ${contactCard('eric', P.eric.role)}
        ${contactCard('marcelo', P.marcelo.role)}
      </div>
    </div>
    <div class="faq">
      <h3>${esc(t(CT.faqTitle))}</h3>
      <dl class="faq-list">${CT.faq.map((f, i) => `<div class="faq-item" id="faq-${i + 1}"><dt>${esc(t(f.q))}</dt><dd>${esc(t(f.a))}</dd></div>`).join('')}</dl>
    </div>
  </div>
  ${review ? `<div class="wrap">${note('Versões EN/ES avisam que o atendimento comercial é em português, pois o briefing não confirma atendimento nos três idiomas. Confirmar. Nenhum preço, prazo ou condição foi incluído.')}</div>` : ''}
</section>`;

  // ---------- "Analisar com IA": versão em Markdown da página, gerada do mesmo conteúdo ----------
  const pageMarkdown = () => {
    const li = (arr) => arr.map((x) => `- ${x}`).join('\n');
    const pub = LAB.filter((x) => x.public !== false);
    return [
      `# Linka — ${t(H.title)}`,
      t(H.lead), t(H.support),
      `## ${t(S.title)}`, t(S.lead),
      ...S.items.map((it) => [
        `### ${t(it.title)}`, t(it.summary),
        `${t(S.aiLabel)}: ${t(it.ai)}`,
        `${t(S.deliverLabel)}:\n${li(t(it.deliver))}`,
        it.channels ? `${t(S.channelsLabel)}: ${it.channels.filter((c) => !c.review).map((c) => c.name).join(', ')}` : '',
        it.disclaimer ? t(it.disclaimer) : '',
      ].filter(Boolean).join('\n\n')),
      `## ${t(W.title)}`, t(W.lead), li(W.items.map((w) => `${t(w.title)}: ${t(w.text)}`)),
      `## ${t(LB.eyebrow)} — ${t(LB.title)}`, t(LB.lead),
      li(pub.map((x) => `${t(x.name)} (${t(LB.status[x.status])}${x.ai ? ', ' + t(LB.usesAi) : ''}): ${t(x.text)}`)),
      `## ${t(P.title)}`,
      ...['eric', 'marcelo'].map((k) => `### ${PEOPLE[k].name} — ${t(P[k].role)}\n\n${t(P[k].bio)}\n\n${li(t(P[k].more))}\n\nLinkedIn: ${PEOPLE[k].linkedin}`),
      `## ${t(CR.title)}`, t(CR.premier.text), `${t(CR.ads.title)}: Search, Display, Video, Shopping, Apps (${t(CR.ads.text)})`,
      `${t(CR.linkedin.title)}:\n${li(CR.linkedin.items.map((c) => `${t(c.name)} — ${c.verify}`))}`,
      `## ${t(CT.title)}`, t(CT.lead),
      li(['eric', 'marcelo'].map((k) => `${PEOPLE[k].name}: WhatsApp ${PEOPLE[k].whatsapp} · ${t(T.ui.schedule)} ${PEOPLE[k].schedule}`)),
      `## ${t(CT.faqTitle)}`, ...CT.faq.map((f) => `**${t(f.q)}** ${t(f.a)}`),
    ].filter(Boolean).join('\n\n');
  };
  const AI = T.ai;
  const aiMenu = `
    <div class="ai-share" data-ai data-task="${esc(t(AI.task))}" data-context="${esc(t(AI.context))}" data-page-label="${esc(t(AI.pageLabel))}">
      <div class="ai-menu" id="ai-menu" hidden>
        <button type="button" class="ai-opt" data-ai-act="copy">${ICON.copy}<span><span class="ai-opt-title" data-copy-label="${esc(t(AI.copy))}" data-copied-label="${esc(t(AI.copied))}">${esc(t(AI.copy))}</span><span class="ai-opt-sub">${esc(t(AI.copySub))}</span></span></button>
        <a class="ai-opt" href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" data-ai-act="chatgpt">${ICON.chatgpt}<span><span class="ai-opt-title">${esc(t(AI.chatgpt))}</span><span class="ai-opt-sub">${esc(t(AI.chatgptSub))}</span></span>${ICON.ext}<span class="sr-only"> ${nt}</span></a>
        <a class="ai-opt" href="https://claude.ai/new" target="_blank" rel="noopener noreferrer" data-ai-act="claude">${ICON.claude}<span><span class="ai-opt-title">${esc(t(AI.claude))}</span><span class="ai-opt-sub">${esc(t(AI.claudeSub))}</span></span>${ICON.ext}<span class="sr-only"> ${nt}</span></a>
      </div>
      <button type="button" class="ai-trigger" aria-expanded="false" aria-controls="ai-menu">${ICON.ai} ${esc(t(AI.button))} ${ICON.chevron}</button>
      <script type="text/plain" id="page-md">${pageMarkdown().replace(/<\//g, '<\\/')}</script>
    </div>`;

  // ---------- footer + floating WhatsApp + lightbox ----------
  const footer = `
<footer class="site-footer">
  <div class="wrap footer-inner">
    <p class="footer-logo"><img class="logo-mark" src="${BP}/assets/img/logo-linka.svg" alt="Linka" width="36" height="36"></p>
    <p>© ${new Date().getFullYear()} Linka · Eric Gomes &amp; Marcelo Caricati</p>
    ${aiMenu}
    <ul class="footer-links">
      ${['eric', 'marcelo'].map((k) => `<li>${extLink(PEOPLE[k].linkedin, `LinkedIn ${esc(PEOPLE[k].name.split(' ')[0])}`, '')}</li>`).join('')}
      <li><a href="${legacy('/privacidade')}">${esc(t(T.ui.privacy))}</a></li>
    </ul>
  </div>
</footer>
<a class="to-top" href="#inicio" aria-label="${esc(t(T.ui.backToTop))}" title="${esc(t(T.ui.backToTop))}"><svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 19V5M6 11l6-6 6 6"/></svg></a>
<div class="wa-float" data-wa>
  <div class="wa-menu" id="wa-menu" hidden>
    <p class="wa-menu-title">${esc(t(T.ui.whatsappWith))}</p>
    ${['eric', 'marcelo'].map((k) => extLink(PEOPLE[k].whatsapp, `<img src="${BP}${PEOPLE[k].photo}" alt="" width="32" height="32"> ${esc(PEOPLE[k].name)}`, 'wa-opt')).join('')}
  </div>
  <button class="wa-btn" type="button" aria-expanded="false" aria-controls="wa-menu" aria-label="${esc(t(T.ui.whatsapp))}">${ICON.wa}</button>
</div>
<dialog class="lightbox" id="lightbox" aria-label="${esc(t(T.ui.enlarge))}">
  <form method="dialog"><button class="icon-btn lb-close" aria-label="${esc(t(T.ui.close))}">&times;</button></form>
  <img alt="" id="lb-img"><p id="lb-cap"></p>
</dialog>`;

  // ---------- head ----------
  const canonical = SITE.origin + L.path;
  const alternates = LANGS.map((l) => `<link rel="alternate" hreflang="${LANG_META[l].html}" href="${SITE.origin}${LANG_META[l].path}">`).join('\n  ')
    + `\n  <link rel="alternate" hreflang="x-default" href="${SITE.origin}/">`;
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Linka',
    url: canonical,
    description: t(T.meta.description),
    founder: Object.values(PEOPLE).map((p) => ({ '@type': 'Person', name: p.name, sameAs: [p.linkedin] })),
    areaServed: 'BR',
  };

  const head = `<!doctype html>
<html lang="${L.html}" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(t(T.meta.title))}</title>
  <meta name="description" content="${esc(t(T.meta.description))}">
  ${review || preview ? '<meta name="robots" content="noindex, nofollow">' : `<link rel="canonical" href="${canonical}">\n  ${alternates}`}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Linka">
  <meta property="og:title" content="${esc(t(T.meta.title))}">
  <meta property="og:description" content="${esc(t(T.meta.description))}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${SITE.origin}/og-image.jpg">
  <meta property="og:locale" content="${L.og}">
  <meta name="theme-color" content="#A700FE">
  <link rel="icon" href="${BP}/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..700&family=Manrope:wght@500..800&display=swap">
  <link rel="stylesheet" href="${BP}/assets/css/site.css">
  <script>try{var s=localStorage.getItem('linka-theme');var d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}</script>
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
  ${review || preview ? '' : `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${SITE.gtm}');</script>`}
  <script src="${BP}/assets/js/site.js" defer></script>
</head>
<body${review ? ' class="is-review"' : ''}>`;

  return `${head}
${header}
<main id="conteudo" tabindex="-1">
${hero}
${proof}
${services}
${cases}
${work}
${people}
${creds}
${insights}
${contact}
</main>
${footer}
</body>
</html>
`;
}

// Página de redirecionamento: URLs antigas abrem a home na seção correspondente.
export function redirect(target) {
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Linka</title>
<link rel="canonical" href="${SITE.origin}${target}"><meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)})</script></head><body><a href="${target}">Linka</a></body></html>`;
}
