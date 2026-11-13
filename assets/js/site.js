(() => {
  'use strict';
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------- Tema claro/escuro (persistente) ---------- */
  const themeBtn = $('.theme-toggle');
  const syncThemeLabel = () => {
    if (!themeBtn) return;
    const dark = root.dataset.theme === 'dark';
    themeBtn.setAttribute('aria-label', dark ? themeBtn.dataset.labelLight : themeBtn.dataset.labelDark);
  };
  syncThemeLabel();
  themeBtn?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('linka-theme', root.dataset.theme); } catch (e) {}
    syncThemeLabel();
  });

  /* ---------- Menu móvel ---------- */
  const nav = $('#main-nav');
  const menuBtn = $('.menu-toggle');
  const setMenu = (open) => {
    if (!nav || !menuBtn) return;
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? menuBtn.dataset.labelClose : menuBtn.dataset.labelOpen);
  };
  menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  nav?.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (nav?.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
    if (waMenu && !waMenu.hidden) { setWa(false); waBtn.focus(); }
  });

  /* ---------- Seletor de idioma preserva a seção atual ---------- */
  $$('[data-lang-link]').forEach((a) => {
    a.addEventListener('click', () => {
      if (location.hash) a.href = a.getAttribute('href').split('#')[0] + location.hash;
    });
  });

  /* ---------- Links diretos para seções e detalhes ---------- */
  const openFromHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    // Abre o detalhe apontado (ex.: #dados-mensuracao abre o "Ver detalhes" do card)
    const target = $(`details[data-deeplink="${CSS.escape(id)}"]`);
    if (target) target.open = true;
    // Abre detalhes ancestrais fechados
    for (let p = el.parentElement?.closest('details'); p; p = p.parentElement?.closest('details')) p.open = true;
    requestAnimationFrame(() => el.scrollIntoView({ block: 'start' }));
  };
  window.addEventListener('hashchange', openFromHash);
  if (location.hash) window.addEventListener('load', openFromHash, { once: true });

  // Atualiza a URL ao abrir um detalhe, sem pular a página (compartilhável).
  $$('details[data-deeplink]').forEach((d) => {
    d.addEventListener('toggle', () => {
      if (!d.open) return;
      const id = d.id || d.dataset.deeplink;
      if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
    });
  });

  /* ---------- Destaque do item de menu da seção visível ---------- */
  const navLinks = $$('a[data-nav]');
  // Seções na ordem do documento (sem repetir: "contato" aparece no link e no botão do menu).
  const sections = [...new Set(navLinks.map((a) => a.dataset.nav))]
    .map((id) => document.getElementById(id)).filter(Boolean)
    .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
  const setActive = (id) => navLinks.forEach((a) => {
    if (a.dataset.nav === id) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
  const spy = () => {
    if (!sections.length) return;
    // No fim da página, a última seção (contato) fica ativa mesmo sendo curta.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      setActive(sections[sections.length - 1].id); return;
    }
    // Nenhum item aceso enquanto o topo (hero) está na tela.
    const line = window.innerHeight * 0.4;
    let current = null;
    for (const s of sections) if (s.getBoundingClientRect().top <= line) current = s;
    setActive(current ? current.id : null);
  };
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { spy(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', spy);
  window.addEventListener('hashchange', () => setTimeout(spy, 50));
  spy();

  /* ---------- WhatsApp flutuante ---------- */
  const waWrap = $('[data-wa]');
  const waBtn = $('.wa-btn');
  const waMenu = $('#wa-menu');
  const setWa = (open) => {
    if (!waMenu) return;
    waMenu.hidden = !open;
    waBtn.setAttribute('aria-expanded', String(open));
    if (open) waMenu.querySelector('a')?.focus();
  };
  waBtn?.addEventListener('click', () => setWa(waMenu.hidden));
  document.addEventListener('click', (e) => { if (waWrap && !waWrap.contains(e.target)) setWa(false); });
  // Esconde o botão quando a seção de contato (que já tem os mesmos canais) está na tela.
  const contact = $('#contato');
  if (waWrap && contact && 'IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => {
      waWrap.classList.toggle('is-hidden', en.isIntersecting);
      root.classList.toggle('wa-off', en.isIntersecting);
      if (en.isIntersecting) setWa(false);
    }, { threshold: 0.15 }).observe(contact);
  }

  /* ---------- Ampliar selos e certificados ---------- */
  const lb = $('#lightbox');
  $$('.zoom').forEach((b) => b.addEventListener('click', () => {
    if (!lb || typeof lb.showModal !== 'function') { window.open(b.dataset.full, '_blank', 'noopener'); return; }
    $('#lb-img').src = b.dataset.full;
    $('#lb-img').alt = b.dataset.caption || '';
    $('#lb-cap').textContent = b.dataset.caption || '';
    lb.showModal();
  }));
  lb?.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

  /* ---------- Voltar ao topo (aparece depois de rolar uma tela) ---------- */
  const toTop = $('.to-top');
  if (toTop) {
    const syncTop = () => toTop.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', syncTop, { passive: true });
    syncTop();
    toTop.addEventListener('click', () => { requestAnimationFrame(() => $('#conteudo')?.focus({ preventScroll: true })); });
  }

  /* ---------- Analisar com IA (rodapé) ---------- */
  const ai = $('[data-ai]');
  if (ai) {
    const trigger = $('.ai-trigger', ai);
    const menu = $('#ai-menu', ai);
    const setAi = (open) => {
      menu.hidden = !open;
      trigger.setAttribute('aria-expanded', String(open));
      if (open) menu.querySelector('.ai-opt')?.focus();
    };
    const pageUrl = () => location.origin + location.pathname;
    const prompt = () => `${ai.dataset.task}\n\n${ai.dataset.pageLabel}: ${pageUrl()}\n\n${ai.dataset.context}`;
    const markdown = () => `${($('#page-md')?.textContent || '').trim()}\n\n${ai.dataset.pageLabel}: ${pageUrl()}`;
    const copyText = async (text) => {
      try { await navigator.clipboard.writeText(text); return true; } catch (e) {
        const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); let ok = false; try { ok = document.execCommand('copy'); } catch (err) {} ta.remove(); return ok;
      }
    };
    const URLS = { chatgpt: 'https://chatgpt.com/?q=', claude: 'https://claude.ai/new?q=' };
    trigger.addEventListener('click', () => setAi(menu.hidden));
    menu.addEventListener('click', async (e) => {
      const el = e.target.closest('[data-ai-act]');
      if (!el) return;
      const act = el.dataset.aiAct;
      if (act === 'copy') {
        const ok = await copyText(markdown());
        const title = $('.ai-opt-title', el);
        if (ok) {
          title.textContent = title.dataset.copiedLabel; el.classList.add('is-done');
          setTimeout(() => { title.textContent = title.dataset.copyLabel; el.classList.remove('is-done'); }, 1800);
        }
        return;
      }
      if (URLS[act]) { el.href = URLS[act] + encodeURIComponent(prompt()); setTimeout(() => setAi(false), 0); }
    });
    document.addEventListener('click', (e) => { if (!ai.contains(e.target)) setAi(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { setAi(false); trigger.focus(); } });
  }

  /* ---------- Diagrama "animated beam": linhas canais → núcleo → conversão ---------- */
  const beam = $('[data-beam]');
  if (beam) {
    const svg = $('.beam-svg', beam);
    const NS = 'http://www.w3.org/2000/svg';
    const draw = () => {
      const box = beam.getBoundingClientRect();
      if (!box.width) return;
      const hub = $('[data-beam-hub]', beam).getBoundingClientRect();
      const to = $('[data-beam-to]', beam).getBoundingClientRect();
      const rel = (x, y) => [x - box.left, y - box.top];
      const curve = ([x1, y1], [x2, y2]) => { const dx = (x2 - x1) * 0.5; return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`; };
      const hubL = rel(hub.left, hub.top + hub.height / 2);
      const hubR = rel(hub.right, hub.top + hub.height / 2);
      const paths = $$('[data-beam-from]', beam).map((n) => { const r = n.getBoundingClientRect(); return curve(rel(r.right, r.top + r.height / 2), hubL); });
      paths.push(curve(hubR, rel(to.left, to.top + to.height / 2)));
      svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);
      svg.innerHTML = `<defs><linearGradient id="beam-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="${box.width}" y2="0"><stop offset="0" stop-color="var(--grad-a)" stop-opacity="0"/><stop offset=".35" stop-color="var(--grad-a)"/><stop offset="1" stop-color="var(--grad-b)"/></linearGradient></defs>`;
      paths.forEach((d, i) => {
        const last = i === paths.length - 1;
        const base = document.createElementNS(NS, 'path');
        base.setAttribute('d', d); base.setAttribute('class', 'beam-path-base');
        const glow = document.createElementNS(NS, 'path');
        glow.setAttribute('d', d); glow.setAttribute('class', 'beam-path-glow'); glow.setAttribute('pathLength', '100');
        // os canais "chegam" em momentos diferentes; a saída para a conversão vem depois
        glow.style.animationDelay = `${last ? 1.6 : i * 0.45}s`;
        svg.append(base, glow);
      });
    };
    draw();
    if ('ResizeObserver' in window) new ResizeObserver(draw).observe(beam);
    else window.addEventListener('resize', draw);
    document.fonts?.ready.then(draw);
  }

  /* ---------- Cards com borda/luz que seguem o ponteiro ---------- */
  $$('.glow-card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* ---------- Entrada suave dos blocos ao rolar ---------- */
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const items = $$('.section-head, .bento > .service, .connect, .timeline > li, .tools > li, .socios-photo, .people > *, .creds > *, .articles > li, .contact-grid > *');
    const vh = window.innerHeight;
    items.forEach((el, i) => {
      el.classList.add('rv');
      // pequenos atrasos em sequência dentro de cada grupo
      const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.transitionDelay = `${Math.min(idx, 5) * 70}ms`;
      if (el.getBoundingClientRect().top < vh) el.classList.add('is-in'); // já visível: sem piscar
    });
    root.classList.add('reveal-ready');
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => { if (!el.classList.contains('is-in')) io.observe(el); });
  }

  /* ---------- Demonstração de modelos de atribuição ---------- */
  $$('[data-attr]').forEach((fig) => {
    const buttons = $$('.attr-model', fig);
    const bars = $$('.attr-bar > span', fig);
    const vals = $$('[data-attr-val]', fig);
    buttons.forEach((b) => b.addEventListener('click', () => {
      buttons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      b.dataset.credit.split(',').forEach((v, i) => {
        if (bars[i]) bars[i].style.width = `${v}%`;
        if (vals[i]) vals[i].textContent = `${v}%`;
      });
    }));
  });
})();
