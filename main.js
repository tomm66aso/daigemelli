
'use strict';

// ── Progress bar ────────────────────────────────────────────────────────────
const prog = document.querySelector('.prog');
const nav  = document.querySelector('.nav');
const heroBg = document.querySelector('.hero__bg');

window.addEventListener('scroll', () => {
  const y   = window.scrollY;
  const max = document.body.scrollHeight - window.innerHeight;
  const pct = max > 0 ? Math.min(1, y / max) : 0;
  if (nav)   nav.classList.toggle('scrolled', y > 50);
  if (prog)  prog.style.transform = 'scaleX(' + pct + ')';
  if (heroBg && y < window.innerHeight)
    heroBg.style.transform = 'scale(1.02) translateY(' + (y * 0.22) + 'px)';
}, { passive: true });

// ── Mobile menu ──────────────────────────────────────────────────────────────
const burger = document.querySelector('.burger');
const mmenu  = document.querySelector('.mmenu');
if (burger && mmenu) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mmenu.classList.toggle('open', open);
    document.body.classList.toggle('locked', open);
    burger.setAttribute('aria-expanded', open);
  });
  mmenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      mmenu.classList.remove('open');
      document.body.classList.remove('locked');
      burger.setAttribute('aria-expanded', false);
    });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mmenu.classList.contains('open')) {
      burger.classList.remove('open');
      mmenu.classList.remove('open');
      document.body.classList.remove('locked');
    }
  });
}

// ── Active nav link ──────────────────────────────────────────────────────────
(function(){
  const path = location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav__links a, .mmenu__nav a').forEach(a => {
    const href = a.getAttribute('href').replace(/\.html$/, '').replace(/\/$/, '') || '/';
    if (href === path) a.classList.add('active');
  });
})();

// ── Reveal on scroll ─────────────────────────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Loader (home only) ───────────────────────────────────────────────────────
const loader = document.querySelector('.loader');
if (loader) {
  const counterEl = loader.querySelector('.loader__counter');
  let count = 0;
  loader.classList.add('filling');
  const iv = setInterval(() => {
    count += Math.floor(Math.random() * 14) + 6;
    if (count >= 100) {
      count = 100;
      if (counterEl) counterEl.textContent = '100';
      clearInterval(iv);
      setTimeout(() => {
        loader.classList.add('done');
        document.body.classList.remove('locked');
        setTimeout(() => loader.classList.add('gone'), 1500);
      }, 200);
    } else {
      if (counterEl) counterEl.textContent = String(count).padStart(2, '0');
    }
  }, 32);
}

// ── Letter animation setup ───────────────────────────────────────────────────
document.querySelectorAll('.word').forEach(word => {
  word.querySelectorAll('.ltr').forEach((ltr, i) => {
    ltr.style.setProperty('--i', i);
    const f = ltr.querySelector('.ltr-f');
    if (f) f.style.setProperty('--i', i);
  });
});

// ── Magnetic buttons ─────────────────────────────────────────────────────────
document.querySelectorAll('[data-mag]').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    el.style.transform = 'translate(' + ((e.clientX - r.left - r.width/2) * 0.22) + 'px,' + ((e.clientY - r.top - r.height/2) * 0.3) + 'px)';
  });
  el.addEventListener('mouseleave', () => { el.style.transform = ''; });
});
