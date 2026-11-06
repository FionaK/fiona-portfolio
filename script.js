// Mobile menu
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('open');
  btn.setAttribute('aria-expanded', false);
}));

// If a local image is missing, fall back to the original hosted copy
document.querySelectorAll('img[data-fallback]').forEach(img => {
  const swap = () => { if (img.src !== img.dataset.fallback) img.src = img.dataset.fallback; };
  img.addEventListener('error', swap, { once: true });
  if (img.complete && img.naturalWidth === 0) swap();
});

document.getElementById('year').textContent = new Date().getFullYear();

// ───────────── Motion & fun ─────────────
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll reveal with a gentle stagger inside each group
const groups = [
  '.section > h2', '.section > .sub', '.section > .tag', '.about', '#about .btn',
  '.panel', '.accordion details', '.skill', '.project', '.rows .row', '.footer-top'
];
document.querySelectorAll(groups.join(',')).forEach(el => {
  el.classList.add('reveal');
  const siblings = [...el.parentElement.children].filter(c => c.matches(groups.join(',')));
  const i = siblings.indexOf(el);
  if (i > 0) el.style.setProperty('--d', Math.min(i * 0.07, 0.5) + 's');
});
if (reduce || !('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.classList.add('in');
      io.unobserve(el);
      // once revealed, hand control back to the normal (snappier) hover transitions
      const delay = parseFloat(el.style.getPropertyValue('--d') || 0) * 1000;
      setTimeout(() => { el.classList.remove('reveal', 'in'); el.style.removeProperty('--d'); }, 800 + delay);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// Progress bar + nav shadow
const bar = document.querySelector('.progress');
const nav = document.querySelector('.nav');
const onScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  nav.classList.toggle('scrolled', scrollY > 10);
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Highlight the nav link for the section on screen
const navLinks = [...document.querySelectorAll('.links a')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
navLinks.forEach(a => { const s = document.querySelector(a.getAttribute('href')); if (s) spy.observe(s); });
