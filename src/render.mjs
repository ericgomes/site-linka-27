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
  ai: '<svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Zm6 12 .9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14Z"/></svg>',
};

export function render(lang, { review = false } = {}) {
  const t = (o) => (o == null ? '' : typeof o === 'string' ? o : (o[lang] ?? o.pt));
  const L = LANG_META[lang];
  const base = review ? '/review' : '';
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
${review ? `<div class="rv-banner" role="note">Versão de revisão: inclui notas internas, conteúdos pendentes e estruturas sem dados. Não publicar. A versão pública está em <a href="${L.path}">${L.path}</a>.</div>` : ''}
<header class="site-header" id="topo">
  <div class="wrap header-inner">
    <a class="logo" href="${home}#topo" aria-label="Linka — ${esc(t(T.ui.backToTop))}">
      <span class="wordmark">l<span class="l-i">i</span>nk<span class="l-a">a</span></span>
    </a>
    <nav class="main-nav" id="main-nav" aria-label="${esc(t(T.ui.menu))}">
      <ul>
        ${navItems.map((n) => `<li><a href="#${n.id}" data-nav="${n.id}">${esc(t(n.label))}</a></li>`).join('')}
      </ul>
      <a class="btn btn-sm btn-primary nav-cta" href="#contato">${esc(t(T.navCta))}</a>
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
  const diagram = `
<figure class="journey" aria-labelledby="journey-title">
  <figcaption>
    <span class="journey-title" id="journey-title">${esc(t(H.diagramTitle))}</span>
    <span class="sr-only">${esc(t(H.diagramDesc))}</span>
  </figcaption>
  <ol class="journey-stages" aria-hidden="true">
    ${stages.map((s, i) => `<li><span class="stage-n">${i + 1}</span>${esc(s)}</li>`).join('')}
  </ol>
  <div class="journey-tracks" aria-hidden="true">
    <div class="track t1"><span>${esc(touch[0])}</span></div>
    <div class="track t2"><span>${esc(touch[1])}</span></div>
    <div class="track t3"><span>${esc(touch[2])}</span></div>
    <div class="track t4"><span>${esc(touch[3])}</span></div>
  </div>
  <p class="journey-foot" aria-hidden="true"><span class="dot"></span>${esc(t(H.lastClick))}</p>
</figure>`;

  const hero = `
<section class="hero" aria-labelledby="hero-title">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">${esc(t(H.eyebrow))}</p>
      <h1 id="hero-title">${esc(t(H.title))}</h1>
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
  const services = `
<section class="section" id="servicos" aria-labelledby="servicos-title">
  <div class="wrap">
    <header class="section-head">
      <p class="eyebrow">${esc(t(S.eyebrow))}</p>
      <h2 id="servicos-title">${esc(t(S.title))}</h2>
      <p class="lead">${esc(t(S.lead))}</p>
    </header>
    <div class="services">
      ${S.items.map((it, i) => `
      <article class="service" id="${it.id}" aria-labelledby="${it.id}-t">
        <span class="service-n" aria-hidden="true">0${i + 1}</span>
        <h3 id="${it.id}-t">${esc(t(it.title))}</h3>
        <p>${esc(t(it.summary))}</p>
        <div class="service-ai">
          <p class="mini-label">${ICON.ai} ${esc(t(S.aiLabel))}</p>
          <p>${esc(t(it.ai))}</p>
        </div>
        <details class="more" data-deeplink="${it.id}">
          <summary>${esc(t(T.ui.details))}</summary>
          <div class="more-body">
            <p class="mini-label">${esc(t(S.deliverLabel))}</p>
            <ul class="check-list">${t(it.deliver).map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
            ${it.channels ? `<p class="mini-label">${esc(t(S.channelsLabel))}</p>
            <ul class="chips">${it.channels.filter(visible).map((c) => `<li${c.review ? ' class="rv-item"' : ''}>${esc(c.name)}</li>`).join('')}</ul>${note(it.channelsNote)}` : ''}
            ${it.disclaimer ? `<p class="fine">${esc(t(it.disclaimer))}</p>` : ''}
          </div>
        </details>
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
  const labCard = (x) => {
    const url = x.url || (review ? x.reviewUrl : null);
    const st = x.status;
    const cta = x.url && st === 'open' ? t(LB.ctaOpen) : x.url && st === 'demo' ? t(LB.ctaDemo) : null;
    return `
      <li class="tool${x.public === false ? ' rv-item' : ''}">
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
<section class="section" id="como-trabalhamos" aria-labelledby="work-title">
  <div class="wrap">
    <header class="section-head">
      <p class="eyebrow">${esc(t(W.eyebrow))}</p>
      <h2 id="work-title">${esc(t(W.title))}</h2>
      <p class="lead">${esc(t(W.lead))}</p>
    </header>
    <ol class="practices">
      ${W.items.map((w) => `<li><h3>${esc(t(w.title))}</h3><p>${esc(t(w.text))}</p></li>`).join('')}
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
    <details class="more more-wide" data-deeplink="lab-completo" id="lab-completo">
      <summary>${esc(t(LB.showAll))}</summary>
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
      <article class="person" id="${key}" aria-labelledby="${key}-name">
        <img class="person-photo" src="${p.photo}" alt="${esc(p.name)}" width="160" height="160" loading="lazy">
        <div class="person-body">
          <h3 id="${key}-name">${esc(p.name)}</h3>
          <p class="person-role">${esc(t(c.role))}</p>
          <p>${esc(t(c.bio))}</p>
          <ul class="person-links">
            <li>${extLink(p.whatsapp, `${ICON.wa} WhatsApp`, 'btn btn-sm btn-wa')}</li>
            <li>${extLink(p.schedule, `${ICON.cal} ${esc(t(T.ui.schedule))}`, 'btn btn-sm btn-ghost')}</li>
            <li>${extLink(p.linkedin, `${ICON.in} LinkedIn`, 'btn btn-sm btn-ghost')}</li>
          </ul>
          <details class="more" data-deeplink="${key}-trajetoria" id="${key}-trajetoria">
            <summary>${esc(t(P.moreLabel))}</summary>
            <div class="more-body"><ul class="plain-list">${t(c.more).map((m) => `<li>${esc(m)}</li>`).join('')}</ul></div>
          </details>
        </div>
      </article>`;
  };
  const people = `
<section class="section" id="socios" aria-labelledby="socios-title">
  <div class="wrap">
    <header class="section-head">
      <p class="eyebrow">${esc(t(P.eyebrow))}</p>
      <h2 id="socios-title">${esc(t(P.title))}</h2>
      <p class="lead">${esc(t(P.lead))}</p>
    </header>
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
      <article class="cred cred-wide">
        <h3>${esc(t(CR.premier.title))}</h3>
        <p>${esc(t(CR.premier.text))}</p>
        <ul class="badges">${years.map((y) => `<li><img src="/assets/img/badges/premier-${y}.jpg" alt="Google Premier Partner ${y}" width="96" height="96" loading="lazy"><span>${y}</span></li>`).join('')}</ul>
        <p class="cred-links">
          ${extLink('https://www.google.com/partners/agency?id=8434993335', `${esc(t(CR.premier.verify))} ${ICON.ext}`, 'link-arrow')}
          ${extLink('https://partnersdirectory.withgoogle.com/intl/pt-BR/?certs=search&certs=display&certs=video&certs=shopping&certs=apps&regions=BR&premier=true', `${esc(t(CR.premier.directory))} ${ICON.ext}`, 'link-arrow')}
        </p>
      </article>
      <article class="cred">
        <h3>${esc(t(CR.ads.title))}</h3>
        <p>${esc(t(CR.ads.text))}</p>
        <ul class="badges badges-sm">${adsBadges.map(([k, n]) => `<li><button type="button" class="zoom" data-full="/assets/img/badges/ads-${k}-lg.jpg" data-caption="${esc(n)}" aria-label="${esc(t(T.ui.enlarge))}: ${esc(n)}"><img src="/assets/img/badges/ads-${k}.jpg" alt="${esc(n)} — Certified" width="72" height="72" loading="lazy"></button></li>`).join('')}</ul>
      </article>
      <article class="cred">
        <h3>${esc(t(CR.linkedin.title))}</h3>
        <p>${esc(t(CR.linkedin.text))}</p>
        <ul class="cert-list">${CR.linkedin.items.map((c) => `<li>
          <button type="button" class="zoom cert-thumb" data-full="/assets/img/certs/${c.img}.jpg" data-caption="${esc(t(c.name))}" aria-label="${esc(t(T.ui.enlarge))}: ${esc(t(c.name))}"><img src="/assets/img/certs/${c.img}-thumb.jpg" alt="" width="96" height="74" loading="lazy"></button>
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
      <a class="link-arrow" href="/blog">${esc(t(T.ui.allArticles))} ${ICON.arrow}</a>
    </header>
    <ul class="articles">
      ${ARTICLES.map((a) => `<li class="article">
        <p class="article-meta"><time datetime="${a.date}">${esc(fmtDate(a.date))}</time>${lang !== 'pt' ? ` · <span lang="pt-BR">${esc(t(T.ui.ptOnly))}</span>` : ''}</p>
        <h3><a href="${a.url}" lang="pt-BR">${esc(a.title)}</a></h3>
        <p lang="pt-BR">${esc(a.text)}</p>
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
      <img src="${p.photo}" alt="" width="64" height="64" loading="lazy">
      <div>
        <h3>${esc(p.name)}</h3>
        <p class="person-role">${esc(t(role))}</p>
        <ul class="person-links">
          <li>${extLink(p.whatsapp, `${ICON.wa} WhatsApp`, 'btn btn-sm btn-wa')}</li>
          <li>${extLink(p.schedule, `${ICON.cal} ${esc(t(T.ui.schedule))}`, 'btn btn-sm btn-ghost')}</li>
        </ul>
      </div>
    </article>`;
  };
  const contact = `
<section class="section section-contact" id="contato" aria-labelledby="contato-title">
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
      ${CT.faq.map((f, i) => `<details class="faq-item" id="faq-${i + 1}" data-deeplink="faq-${i + 1}"><summary>${esc(t(f.q))}</summary><p>${esc(t(f.a))}</p></details>`).join('')}
    </div>
  </div>
  ${review ? `<div class="wrap">${note('Versões EN/ES avisam que o atendimento comercial é em português, pois o briefing não confirma atendimento nos três idiomas. Confirmar. Nenhum preço, prazo ou condição foi incluído.')}</div>` : ''}
</section>`;

  // ---------- footer + floating WhatsApp + lightbox ----------
  const footer = `
<footer class="site-footer">
  <div class="wrap footer-inner">
    <p><span class="wordmark wordmark-sm">l<span class="l-i">i</span>nk<span class="l-a">a</span></span></p>
    <p>© ${new Date().getFullYear()} Linka · Eric Gomes &amp; Marcelo Caricati</p>
    <ul class="footer-links">
      <li><a href="/privacidade">${esc(t(T.ui.privacy))}</a></li>
      <li><a href="${home}#topo">${esc(t(T.ui.backToTop))}</a></li>
    </ul>
  </div>
</footer>
<div class="wa-float" data-wa>
  <div class="wa-menu" id="wa-menu" hidden>
    <p class="wa-menu-title">${esc(t(T.ui.whatsappWith))}</p>
    ${['eric', 'marcelo'].map((k) => extLink(PEOPLE[k].whatsapp, `<img src="${PEOPLE[k].photo}" alt="" width="32" height="32"> ${esc(PEOPLE[k].name)}`, 'wa-opt')).join('')}
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
  ${review ? '<meta name="robots" content="noindex, nofollow">' : `<link rel="canonical" href="${canonical}">\n  ${alternates}`}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Linka">
  <meta property="og:title" content="${esc(t(T.meta.title))}">
  <meta property="og:description" content="${esc(t(T.meta.description))}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${SITE.origin}/og-image.jpg">
  <meta property="og:locale" content="${L.og}">
  <meta name="theme-color" content="#7C3AED">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..800&display=swap">
  <link rel="stylesheet" href="/assets/css/site.css">
  <script>try{var s=localStorage.getItem('linka-theme');var d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}</script>
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
  ${review ? '' : `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${SITE.gtm}');</script>`}
  <script src="/assets/js/site.js" defer></script>
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
