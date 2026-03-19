/* ═══════════════════════════════════════════════════════════
   KAYEE ROOFING LLC — script.js
   ═══════════════════════════════════════════════════════════ */

'use strict';

const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── 1. HERO CANVAS — Particle Field ────────────────────── */
(function initParticles() {
  const canvas = $('#heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, raf;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); buildParticles(); });

  const TOTAL = window.innerWidth < 768 ? 60 : 110;
  let particles = [];

  class Particle {
    constructor() { this.reset(true); }
    reset(initial = false) {
      this.x     = Math.random() * W;
      this.y     = initial ? Math.random() * H : (Math.random() > 0.5 ? -10 : H + 10);
      this.r     = Math.random() * 1.4 + 0.3;
      this.vx    = (Math.random() - 0.5) * 0.3;
      this.vy    = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.45 + 0.08;
      this.color = Math.random() > 0.55 ? '37,99,235' : '255,255,255';
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < -10 || this.x > W + 10 || this.y < -10 || this.y > H + 10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
      ctx.fill();
    }
  }

  function buildParticles() { particles = Array.from({ length: TOTAL }, () => new Particle()); }
  buildParticles();

  function drawConnections() {
    const MAX_DIST = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.hypot(dx, dy);
        if (d < MAX_DIST) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(37,99,235,${0.1 * (1 - d / MAX_DIST)})`;
          ctx.lineWidth   = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    raf = requestAnimationFrame(loop);
  }
  loop();

  const heroObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { if (!raf) loop(); }
    else { cancelAnimationFrame(raf); raf = null; }
  });
  heroObs.observe($('#hero'));
})();


/* ── 2. NAV — Scroll & Mobile Toggle ───────────────────── */
(function initNav() {
  const nav        = $('#nav');
  const hamburger  = $('#hamburger');
  const mobileMenu = $('#mobileMenu');
  const mobileClose= $('#mobileClose');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => mobileMenu.classList.contains('open') ? closeMenu() : openMenu());
  mobileClose?.addEventListener('click', closeMenu);
  $$('.mobile-nav a, .mobile-cta').forEach(a => a.addEventListener('click', closeMenu));
  mobileMenu?.addEventListener('click', e => { if (e.target === mobileMenu) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
})();


/* ── 3. SCROLL REVEAL ───────────────────────────────────── */
(function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
})();


/* ── 4. COUNTER ANIMATION ───────────────────────────────── */
(function initCounters() {
  const DURATION = 1800;
  const seen = new Set();

  function animateCount(el) {
    if (seen.has(el)) return;
    seen.add(el);
    const target  = parseFloat(el.dataset.target);
    const decimal = el.hasAttribute('data-decimal');
    const start   = performance.now();
    function step(now) {
      const p    = Math.min((now - start) / DURATION, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      const val  = target * ease;
      el.textContent = decimal ? val.toFixed(1) : Math.floor(val);
      if (p < 1) requestAnimationFrame(step);
      else       el.textContent = decimal ? target.toFixed(1) : target;
    }
    requestAnimationFrame(step);
  }

  setTimeout(() => { $$('[data-target]').forEach(animateCount); }, 800);
})();


/* ── 5. BEFORE/AFTER SLIDER ─────────────────────────────── */
(function initBASlider() {
  const slider     = $('#baSlider');
  const afterPanel = $('#baAfter');
  const handle     = $('#baHandle');
  if (!slider || !afterPanel || !handle) return;

  let dragging = false;

  function setPos(clientX) {
    const rect = slider.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(5, Math.min(95, pct));
    afterPanel.style.width = `${pct}%`;
    handle.style.left      = `${pct}%`;
  }

  handle.addEventListener('mousedown', e => { dragging = true; e.preventDefault(); });
  document.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
  document.addEventListener('mouseup',   () => { dragging = false; });
  handle.addEventListener('touchstart', e => { dragging = true; e.preventDefault(); }, { passive: false });
  document.addEventListener('touchmove', e => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
  document.addEventListener('touchend',  () => { dragging = false; });
  slider.addEventListener('click', e => { if (!dragging) setPos(e.clientX); });

  // Animated intro on scroll-into-view
  let introTriggered = false;
  const introObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !introTriggered) {
      introTriggered = true;
      let p = 10;
      const intro = setInterval(() => {
        p += 2;
        afterPanel.style.width = `${p}%`;
        handle.style.left      = `${p}%`;
        if (p >= 50) clearInterval(intro);
      }, 16);
    }
  }, { threshold: 0.3 });
  introObs.observe(slider);
})();


/* ── 6. REVIEWS CAROUSEL ────────────────────────────────── */
(function initCarousel() {
  const track   = $('#carouselTrack');
  const dotsEl  = $('#carouselDots');
  const prevBtn = $('#carouselPrev');
  const nextBtn = $('#carouselNext');
  if (!track) return;

  const cards   = $$('.review-card', track);
  const total   = cards.length;
  let current   = 0;
  let autoTimer = null;
  let isHovered = false;

  function getVisible() {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }
  function cardWidth() { return cards[0].offsetWidth + 20; }
  function maxIndex()  { return Math.max(0, total - getVisible()); }

  // Build dots
  dotsEl.innerHTML = '';
  for (let i = 0; i <= maxIndex(); i++) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Review ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  }

  function updateDots() {
    $$('.carousel-dot', dotsEl).forEach((d, i) => d.classList.toggle('active', i === current));
  }
  function goTo(index) {
    current = Math.max(0, Math.min(index, maxIndex()));
    track.style.transform = `translateX(-${current * cardWidth()}px)`;
    updateDots();
  }
  function next() { goTo(current >= maxIndex() ? 0 : current + 1); }
  function prev() { goTo(current <= 0 ? maxIndex() : current - 1); }

  prevBtn?.addEventListener('click', () => { prev(); resetAuto(); });
  nextBtn?.addEventListener('click', () => { next(); resetAuto(); });

  function startAuto() { autoTimer = setInterval(() => { if (!isHovered) next(); }, 4500); }
  function resetAuto() { clearInterval(autoTimer); startAuto(); }

  track.closest('.carousel-wrap')?.addEventListener('mouseenter', () => { isHovered = true;  });
  track.closest('.carousel-wrap')?.addEventListener('mouseleave', () => { isHovered = false; });

  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); resetAuto(); }
  }, { passive: true });

  window.addEventListener('resize', () => goTo(Math.min(current, maxIndex())));
  startAuto();
})();


/* ── 7. CONTACT FORM ────────────────────────────────────── */
(function initForm() {
  const form    = $('#contactForm');
  const success = $('#formSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name  = form.querySelector('[name="name"]');
    const phone = form.querySelector('[name="phone"]');
    let valid   = true;
    [name, phone].forEach(field => {
      if (!field?.value.trim()) {
        field.style.borderColor = '#EF4444';
        valid = false;
        field.addEventListener('input', () => field.style.borderColor = '', { once: true });
      }
    });
    if (!valid) return;
    form.style.display    = 'none';
    success.style.display = 'flex';
  });
})();


/* ── 8. SMOOTH ANCHOR SCROLL ────────────────────────────── */
(function initSmoothScroll() {
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const id     = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();
