/* ═══════════════════════════════════════════════════════════
   KAYEE ROOFING LLC — script.js
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─── LOGO FALLBACK ──────────────────────────────────────── */
(function initLogoFallback() {
  const ids = [
    ['navLogoImg',    'navLogoFallback'],
    ['mobileLogoImg', 'mobileLogoFallback'],
    ['footerLogoImg', 'footerLogoFallback'],
  ];
  // Hero logo: just hide the wrap if it fails (no text fallback needed)
  const heroImg = document.getElementById('heroLogoImg');
  if (heroImg) {
    heroImg.addEventListener('error', () => {
      const wrap = heroImg.closest('.hero-logo-wrap');
      if (wrap) wrap.style.display = 'none';
    });
    if (heroImg.complete && heroImg.naturalWidth === 0) {
      const wrap = heroImg.closest('.hero-logo-wrap');
      if (wrap) wrap.style.display = 'none';
    }
  }
  ids.forEach(([imgId, fallbackId]) => {
    const img = document.getElementById(imgId);
    const fallback = document.getElementById(fallbackId);
    if (!img || !fallback) return;
    // Show image if it loads, else show fallback text
    img.addEventListener('load', () => {
      if (img.naturalWidth > 0) {
        fallback.style.display = 'none';
      }
    });
    img.addEventListener('error', () => {
      img.style.display = 'none';
      fallback.style.display = '';
    });
    // If already cached / loaded
    if (img.complete) {
      if (img.naturalWidth === 0) {
        img.style.display = 'none';
        fallback.style.display = '';
      } else {
        fallback.style.display = 'none';
      }
    }
  });
})();

/* ─── PARTICLES ──────────────────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H, raf;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    const count = Math.floor((W * H) / 14000);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,150,60,${p.alpha})`;
      ctx.fill();
    });
    raf = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    createParticles();
    draw();
  });

  resize();
  createParticles();
  draw();
})();

/* ─── NAV SCROLL ─────────────────────────────────────────── */
(function initNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ─── MOBILE MENU ────────────────────────────────────────── */
(function initMobileMenu() {
  const toggle  = document.getElementById('menuToggle');
  const close   = document.getElementById('menuClose');
  const menu    = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');
  if (!toggle || !menu) return;

  function open() {
    menu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', open);
  if (close)   close.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-link, .mobile-cta .btn').forEach(el => {
    el.addEventListener('click', closeMenu);
  });
})();

/* ─── SCROLL REVEAL ──────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = Array.from(entry.target.parentElement?.children || [])
          .indexOf(entry.target) * 80;
        setTimeout(() => entry.target.classList.add('revealed'), Math.min(delay, 300));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ─── COUNTERS ───────────────────────────────────────────── */
(function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateCounter(el) {
    const target   = parseFloat(el.dataset.target);
    const duration = 1800;
    const start    = performance.now();
    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value    = easeOutQuart(progress) * target;
      el.textContent = target % 1 === 0 ? Math.floor(value) : value.toFixed(1);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target % 1 === 0 ? target : target.toFixed(1);
    }
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(n => observer.observe(n));
})();

/* ─── BEFORE / AFTER SLIDER ──────────────────────────────── */
(function initBASlider() {
  const slider = document.getElementById('baSlider');
  const handle = document.getElementById('baHandle');
  if (!slider || !handle) return;

  const before = slider.querySelector('.ba-before');
  let isDragging = false;
  let animating  = true;

  // Animated intro sweep
  let introPos = 100;
  const target = 50;
  const intro  = () => {
    introPos += (target - introPos) * 0.06;
    setPosition(introPos);
    if (Math.abs(introPos - target) > 0.5) {
      requestAnimationFrame(intro);
    } else {
      setPosition(50);
      animating = false;
    }
  };

  // Wait until visible
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setTimeout(() => requestAnimationFrame(intro), 400);
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(slider);

  function setPosition(pct) {
    const clamped = Math.max(4, Math.min(96, pct));
    before.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
    handle.style.left     = `${clamped}%`;
  }

  function getPercent(clientX) {
    const rect = slider.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  slider.addEventListener('mousedown', e => {
    if (animating) return;
    isDragging = true;
    setPosition(getPercent(e.clientX));
  });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    setPosition(getPercent(e.clientX));
  });
  window.addEventListener('mouseup', () => { isDragging = false; });

  slider.addEventListener('touchstart', e => {
    if (animating) return;
    isDragging = true;
    setPosition(getPercent(e.touches[0].clientX));
  }, { passive: true });
  window.addEventListener('touchmove', e => {
    if (!isDragging) return;
    setPosition(getPercent(e.touches[0].clientX));
  }, { passive: true });
  window.addEventListener('touchend', () => { isDragging = false; });
})();

/* ─── REVIEWS CAROUSEL ───────────────────────────────────── */
(function initCarousel() {
  const carousel  = document.getElementById('reviewsCarousel');
  const dotsWrap  = document.getElementById('carouselDots');
  const btnPrev   = document.getElementById('carouselPrev');
  const btnNext   = document.getElementById('carouselNext');
  if (!carousel) return;

  const cards = carousel.querySelectorAll('.review-card');
  if (!cards.length) return;

  let current   = 0;
  let autoTimer = null;
  const total   = cards.length;

  // Build dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Review ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function updateDots() {
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function goTo(index) {
    current = (index + total) % total;
    carousel.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5500);
  }

  btnPrev && btnPrev.addEventListener('click', () => goTo(current - 1));
  btnNext && btnNext.addEventListener('click', () => goTo(current + 1));

  // Touch swipe
  let touchStartX = 0;
  carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', () => clearInterval(autoTimer));
  carousel.addEventListener('mouseleave', resetAuto);

  resetAuto();
})();

/* ─── CONTACT FORM ───────────────────────────────────────── */
(function initForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = document.getElementById('submitBtn');
  if (!form) return;

  function showErr(inputId, errId, msg) {
    const el = document.getElementById(inputId);
    const er = document.getElementById(errId);
    if (el)  el.classList.add('error');
    if (er)  er.textContent = msg;
  }
  function clearErr(inputId, errId) {
    const el = document.getElementById(inputId);
    const er = document.getElementById(errId);
    if (el)  el.classList.remove('error');
    if (er)  er.textContent = '';
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    // First name
    clearErr('firstName', 'firstNameErr');
    if (!form.firstName.value.trim()) {
      showErr('firstName', 'firstNameErr', 'Please enter your first name.');
      valid = false;
    }
    // Last name
    clearErr('lastName', 'lastNameErr');
    if (!form.lastName.value.trim()) {
      showErr('lastName', 'lastNameErr', 'Please enter your last name.');
      valid = false;
    }
    // Phone
    clearErr('phone', 'phoneErr');
    const phone = form.phone.value.replace(/\D/g, '');
    if (phone.length < 10) {
      showErr('phone', 'phoneErr', 'Please enter a valid phone number.');
      valid = false;
    }

    if (!valid) return;

    // Simulate submit
    const textEl = btn.querySelector('.btn-text');
    const loadEl = btn.querySelector('.btn-loading');
    btn.disabled = true;
    if (textEl) textEl.style.display = 'none';
    if (loadEl) loadEl.style.display = '';

    setTimeout(() => {
      form.style.display = 'none';
      if (success) success.style.display = 'flex';
    }, 1200);
  });

  // Live clear errors
  ['firstName', 'lastName', 'phone'].forEach(name => {
    const el = form[name];
    const errId = name + 'Err';
    if (el) el.addEventListener('input', () => clearErr(name, errId));
  });
})();

/* ─── SMOOTH SCROLL ──────────────────────────────────────── */
(function initSmoothScroll() {
  const NAV_HEIGHT = 80;
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
