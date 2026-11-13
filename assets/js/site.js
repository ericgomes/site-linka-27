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
  const sections = navLinks.map((a) => document.getElementById(a.dataset.nav)).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navLinks.forEach((a) => {
          if (a.dataset.nav === en.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => io.observe(s));
  }

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
})();
