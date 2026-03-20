/* ═══════════════════════════════════════════════════════════
   KAYEE ROOFING LLC — style.css
   Premium Black / Charcoal / Gold Design System
   ═══════════════════════════════════════════════════════════ */

/* ─── DESIGN TOKENS ─────────────────────────────────────── */
:root {
  /* Core Palette */
  --black:          #080808;
  --charcoal:       #111111;
  --charcoal-2:     #181818;
  --charcoal-3:     #222222;
  --charcoal-4:     #2C2C2C;
  --gray-dark:      #3A3A3A;
  --gray-mid:       #666666;
  --gray-light:     #999999;
  --gray-pale:      #CCCCCC;
  --silver:         #E5E5E5;
  --white:          #FFFFFF;

  /* Gold Accent */
  --gold:           #C8963C;
  --gold-light:     #DDB060;
  --gold-dark:      #A07828;
  --gold-faint:     rgba(200,150,60,0.12);
  --gold-border:    rgba(200,150,60,0.30);

  /* Functional */
  --bg:             #0C0C0C;
  --bg-alt:         #141414;
  --bg-card:        #1A1A1A;
  --bg-card-hover:  #202020;
  --text:           #F0F0F0;
  --text-2:         #AAAAAA;
  --text-3:         #666666;
  --border:         rgba(255,255,255,0.07);
  --border-2:       rgba(255,255,255,0.12);

  /* Typography */
  --font-body:      'Inter', system-ui, sans-serif;
  --font-display:   'Barlow Condensed', 'Inter', sans-serif;

  /* Spacing */
  --gap:            clamp(60px, 8vw, 120px);
  --gap-sm:         clamp(40px, 5vw, 72px);
  --radius:         8px;
  --radius-lg:      16px;
  --radius-xl:      24px;

  /* Transitions */
  --ease:           cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out:       cubic-bezier(0, 0, 0.2, 1);
}

/* ─── RESET ─────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
img { display: block; max-width: 100%; height: auto; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }
input, textarea, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}
svg { flex-shrink: 0; }

/* ─── TYPOGRAPHY ─────────────────────────────────────────── */
h1, h2, h3, h4, h5 {
  font-family: var(--font-display);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: var(--white);
}
h1 { font-size: clamp(3.2rem, 7vw, 6.5rem); letter-spacing: -0.03em; }
h2 { font-size: clamp(2.2rem, 4.5vw, 3.8rem); }
h3 { font-size: clamp(1.3rem, 2vw, 1.6rem); font-weight: 700; }
h4 { font-size: 1.05rem; font-weight: 700; letter-spacing: 0; line-height: 1.3; }
h5 { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gray-pale); }
p  { color: var(--text-2); line-height: 1.75; }

/* ─── LAYOUT ─────────────────────────────────────────────── */
.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 48px);
}

/* ─── BUTTONS ────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: all 0.22s var(--ease);
  white-space: nowrap;
  border: 1.5px solid transparent;
}
.btn-lg { padding: 16px 34px; font-size: 0.95rem; }
.btn-sm { padding: 10px 20px; font-size: 0.8rem; }
.btn-full { width: 100%; justify-content: center; }

.btn-gold {
  background: var(--gold);
  color: #fff;
  border-color: var(--gold);
}
.btn-gold:hover {
  background: var(--gold-light);
  border-color: var(--gold-light);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(200,150,60,0.35);
}

.btn-outline-white {
  background: transparent;
  color: var(--white);
  border-color: rgba(255,255,255,0.4);
}
.btn-outline-white:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.7);
}

/* ─── SECTION TAGS ───────────────────────────────────────── */
.section-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gray-light);
  padding: 6px 14px;
  border: 1px solid var(--border-2);
  border-radius: 100px;
  margin-bottom: 18px;
}
.section-tag--gold {
  color: var(--gold);
  border-color: var(--gold-border);
  background: var(--gold-faint);
}

.section-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--gap-sm);
}
.section-header p { font-size: 1.05rem; margin-top: 14px; }
.section-header--light h2, .section-header--light p { color: var(--white); }
.section-header--light p { color: rgba(255,255,255,0.65); }

/* ─── SCROLL REVEAL ──────────────────────────────────────── */
[data-reveal] {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
}
[data-reveal].revealed {
  opacity: 1;
  transform: none;
}

/* ─── LOGO ───────────────────────────────────────────────── */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.logo-img {
  height: 42px;
  width: auto;
  object-fit: contain;
}
.logo-img--footer { height: 38px; }
.logo-fallback {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  color: var(--white);
  text-transform: uppercase;
  line-height: 1;
}
.logo-fallback em {
  font-style: normal;
  color: var(--gold);
}
.logo-fallback--footer { font-size: 1.3rem; }

/* ─── MOBILE MENU ────────────────────────────────────────── */
.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(4px);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s var(--ease);
}
.menu-overlay.active { opacity: 1; visibility: visible; }

.mobile-menu {
  position: fixed;
  top: 0; right: 0;
  width: min(360px, 90vw);
  height: 100vh;
  background: var(--charcoal-2);
  border-left: 1px solid var(--border-2);
  z-index: 999;
  transform: translateX(100%);
  transition: transform 0.35s var(--ease);
  display: flex;
  flex-direction: column;
  padding: 0 28px 40px;
}
.mobile-menu.active { transform: translateX(0); }

.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.menu-close {
  width: 38px; height: 38px;
  display: flex; align-items: center; justify-content: center;
  color: var(--gray-light);
  border-radius: var(--radius);
  transition: color 0.2s, background 0.2s;
}
.menu-close:hover { color: var(--white); background: var(--charcoal-4); }

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 24px 0;
  flex: 1;
}
.mobile-link {
  padding: 14px 12px;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--gray-pale);
  border-radius: var(--radius);
  transition: color 0.2s, background 0.2s;
}
.mobile-link:hover { color: var(--white); background: var(--charcoal-4); }

.mobile-cta {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

/* ─── NAV ────────────────────────────────────────────────── */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 900;
  transition: background 0.3s var(--ease), box-shadow 0.3s var(--ease), padding 0.3s;
  padding: 0;
}
.nav.scrolled {
  background: rgba(10,10,10,0.96);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--border-2);
}
.nav-inner {
  display: flex;
  align-items: center;
  gap: 32px;
  height: 76px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 48px);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
}
.nav-links a {
  padding: 8px 14px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray-pale);
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}
.nav-links a:hover { color: var(--white); background: rgba(255,255,255,0.06); }
.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-phone {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gray-pale);
  transition: color 0.2s;
}
.nav-phone:hover { color: var(--gold); }
.nav-phone svg { color: var(--gold); }

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  margin-left: 8px;
}
.menu-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all 0.2s;
}

/* ─── HERO ───────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.04);
  transition: transform 8s ease;
}
.hero:hover .hero-bg-img { transform: scale(1); }
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(5,5,5,0.92) 0%,
    rgba(10,10,10,0.80) 50%,
    rgba(5,5,5,0.88) 100%
  );
}
.hero-canvas {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.4;
}
.hero-container {
  position: relative;
  z-index: 2;
  padding-top: 100px;
  padding-bottom: 80px;
}
.hero-content {
  max-width: 760px;
}
/* ── Hero Logo ── */
.hero-logo-wrap {
  margin-bottom: 28px;
}
.hero-logo {
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 50%;
  display: block;
  filter: drop-shadow(0 0 24px rgba(200, 150, 60, 0.45)) drop-shadow(0 4px 16px rgba(0,0,0,0.6));
  animation: heroLogoIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes heroLogoIn {
  from { opacity: 0; transform: scale(0.8) translateY(-16px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(200,150,60,0.12);
  border: 1px solid var(--gold-border);
  color: var(--gold-light);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 8px 16px;
  border-radius: 100px;
  margin-bottom: 28px;
  animation: heroFadeDown 0.8s var(--ease-out) both;
}
.badge-stars { color: var(--gold); letter-spacing: -1px; }

.hero-headline {
  animation: heroSlideUp 0.9s 0.1s var(--ease-out) both;
  margin-bottom: 22px;
}
.headline-accent {
  color: var(--gold);
  display: block;
}
.hero-sub {
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: rgba(255,255,255,0.65);
  max-width: 560px;
  margin-bottom: 36px;
  animation: heroSlideUp 0.9s 0.2s var(--ease-out) both;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 44px;
  animation: heroSlideUp 0.9s 0.3s var(--ease-out) both;
}
.hero-trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  animation: heroSlideUp 0.9s 0.4s var(--ease-out) both;
}
.trust-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.75);
  font-size: 0.78rem;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 100px;
}
.trust-pill svg { color: var(--gold); }

.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.scroll-dot {
  width: 26px;
  height: 42px;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 100px;
  position: relative;
}
.scroll-dot::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: var(--gold);
  border-radius: 50%;
  animation: scrollPulse 1.8s ease infinite;
}

/* ─── TICKER ─────────────────────────────────────────────── */
.ticker-wrap {
  background: var(--charcoal-3);
  border-top: 1px solid var(--border-2);
  border-bottom: 1px solid var(--border-2);
  overflow: hidden;
  padding: 13px 0;
}
.ticker-track {
  display: flex;
  align-items: center;
  gap: 0;
  white-space: nowrap;
  animation: ticker 42s linear infinite;
  width: max-content;
}
.ticker-item {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--gray-pale);
  padding: 0 28px;
}
.ticker-item strong { color: var(--white); }
.ticker-sep {
  color: var(--gold);
  font-size: 0.6rem;
  opacity: 0.6;
}

/* ─── STATS ──────────────────────────────────────────────── */
.stats-section {
  padding: 64px 0;
  background: var(--charcoal-2);
  border-bottom: 1px solid var(--border);
}
.stats-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 20px 52px;
  text-align: center;
}
.stat-num-wrap {
  display: flex;
  align-items: baseline;
  gap: 2px;
}
.stat-num {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 4.5vw, 3.8rem);
  font-weight: 900;
  color: var(--white);
  line-height: 1;
}
.stat-suffix {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 800;
  color: var(--gold);
}
.stat-label {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray-mid);
}
.stat-divider {
  width: 1px;
  height: 52px;
  background: var(--border-2);
  flex-shrink: 0;
}

/* ─── SERVICES ───────────────────────────────────────────── */
.services-section {
  padding: var(--gap) 0;
  background: var(--bg);
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
.service-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.3s var(--ease), transform 0.3s var(--ease);
}
.service-card:hover {
  border-color: var(--gold-border);
  transform: translateY(-4px);
}
.service-card-bg {
  position: absolute;
  inset: 0;
  background-image: var(--svc-img);
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s var(--ease);
  z-index: 0;
}
.service-card-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(5,5,5,0.82);
}
.service-card:hover .service-card-bg { opacity: 1; }
.service-card-inner {
  position: relative;
  z-index: 1;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.service-icon {
  width: 52px; height: 52px;
  background: var(--charcoal-3);
  border: 1px solid var(--border-2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  transition: background 0.3s, border-color 0.3s;
}
.service-card:hover .service-icon {
  background: rgba(200,150,60,0.15);
  border-color: var(--gold-border);
}
.service-icon--gold {
  background: rgba(200,150,60,0.15);
  border-color: var(--gold-border);
}
.service-card h3 { font-size: 1.15rem; transition: color 0.2s; }
.service-card p { font-size: 0.875rem; line-height: 1.7; flex: 1; }
.service-link {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.02em;
  transition: gap 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
}
.service-link:hover { color: var(--gold-light); }

.service-card--highlight {
  background: linear-gradient(135deg, var(--charcoal-3), var(--charcoal-2));
  border-color: var(--gold-border);
}
.service-card--highlight:hover { border-color: var(--gold); }

/* ─── GALLERY ────────────────────────────────────────────── */
.gallery-section {
  padding: var(--gap) 0;
  background: var(--charcoal-2);
}

/* Before / After */
.ba-wrapper {
  position: relative;
  max-width: 900px;
  margin: 0 auto var(--gap-sm);
}
.ba-label {
  position: absolute;
  top: 20px;
  z-index: 10;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 5px 12px;
  background: rgba(0,0,0,0.7);
  border-radius: 4px;
  pointer-events: none;
}
.ba-label--left  { left: 20px; color: #ff6b6b; border: 1px solid rgba(255,107,107,0.3); }
.ba-label--right { right: 20px; color: var(--gold); border: 1px solid var(--gold-border); }

.ba-slider {
  position: relative;
  width: 100%;
  height: 480px;
  overflow: hidden;
  border-radius: var(--radius-xl);
  cursor: col-resize;
  user-select: none;
  border: 1px solid var(--border-2);
}
.ba-before, .ba-after {
  position: absolute;
  inset: 0;
}
.ba-before img, .ba-after img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ba-before { z-index: 1; clip-path: inset(0 50% 0 0); }
.ba-after  { z-index: 0; }

.ba-tag {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: rgba(0,0,0,0.75);
  padding: 5px 12px;
  border-radius: 4px;
  white-space: nowrap;
}

.ba-handle {
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44px;
  cursor: col-resize;
}
.ba-handle-line {
  flex: 1;
  width: 2px;
  background: linear-gradient(to bottom, transparent, var(--gold), transparent);
}
.ba-handle-circle {
  width: 44px; height: 44px;
  background: var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(200,150,60,0.5);
  color: #fff;
}
.ba-caption {
  text-align: center;
  font-size: 0.78rem;
  color: var(--gray-mid);
  margin-top: 14px;
  letter-spacing: 0.02em;
}

/* Project Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}
.project-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  transition: border-color 0.3s, transform 0.3s;
}
.project-card:hover {
  border-color: var(--gold-border);
  transform: translateY(-4px);
}
.project-img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}
.project-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease);
}
.project-card:hover .project-img-wrap img { transform: scale(1.06); }

.project-badge {
  position: absolute;
  top: 14px; left: 14px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--gold);
  color: #fff;
  padding: 4px 10px;
  border-radius: 4px;
}
.project-badge--repair { background: #444; color: var(--silver); }
.project-badge--new    { background: var(--charcoal-4); color: var(--gold); border: 1px solid var(--gold-border); }

.project-info {
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.project-location {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gold);
}
.project-info h4 { font-size: 0.95rem; color: var(--white); }
.project-info p  { font-size: 0.82rem; color: var(--text-2); line-height: 1.6; margin: 0; }

.gallery-cta { text-align: center; }

/* ─── PROCESS ────────────────────────────────────────────── */
.process-section {
  padding: var(--gap) 0;
  background: var(--bg);
}
.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
}
.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 28px;
  position: relative;
}
.process-num-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  position: relative;
  width: 100%;
}
.process-num {
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--gold-border);
  line-height: 1;
  width: 70px;
  text-align: center;
  position: relative;
  z-index: 1;
}
.process-connector {
  position: absolute;
  top: 50%;
  left: calc(50% + 35px);
  right: -28px;
  height: 1px;
  background: linear-gradient(to right, var(--gold-border), transparent);
}
.process-icon {
  width: 56px; height: 56px;
  background: var(--charcoal-3);
  border: 1px solid var(--border-2);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  margin-bottom: 20px;
}
.process-step h4 {
  font-size: 1rem;
  margin-bottom: 10px;
  color: var(--white);
}
.process-step p {
  font-size: 0.85rem;
  line-height: 1.7;
}

/* ─── REVIEWS ────────────────────────────────────────────── */
.reviews-section {
  padding: var(--gap) 0;
  background: var(--charcoal-2);
}
.reviews-aggregate {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin-top: 16px;
}
.agg-stars { color: var(--gold); font-size: 1.1rem; letter-spacing: 2px; }
.agg-score {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  color: var(--white);
  line-height: 1;
}
.agg-count { font-size: 0.82rem; color: var(--gray-light); }

.reviews-carousel-wrap {
  position: relative;
  margin-top: 48px;
  overflow: hidden;
}
.reviews-carousel {
  display: flex;
  transition: transform 0.5s var(--ease);
}
.review-card {
  min-width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border-2);
  border-radius: var(--radius-xl);
  padding: clamp(28px, 4vw, 48px);
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  padding-left: max(calc((100% - 760px) / 2), clamp(28px, 4vw, 48px));
  padding-right: max(calc((100% - 760px) / 2), clamp(28px, 4vw, 48px));
}
.review-top {
  display: flex;
  align-items: center;
  gap: 14px;
}
.reviewer-avatar {
  width: 46px; height: 46px;
  background: var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}
.reviewer-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}
.reviewer-name  { font-size: 0.95rem; font-weight: 700; color: var(--white); }
.reviewer-location { font-size: 0.78rem; color: var(--gray-light); }
.review-stars   { color: var(--gold); font-size: 1rem; letter-spacing: 1px; }
.review-text {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--gray-pale);
  font-style: italic;
}
.review-service {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  background: var(--gold-faint);
  border: 1px solid var(--gold-border);
  padding: 4px 12px;
  border-radius: 4px;
  align-self: flex-start;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
}
.carousel-btn {
  width: 42px; height: 42px;
  background: var(--charcoal-3);
  border: 1px solid var(--border-2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-pale);
  transition: all 0.2s;
}
.carousel-btn:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: #fff;
}
.carousel-dots { display: flex; gap: 8px; align-items: center; }
.carousel-dot {
  width: 8px; height: 8px;
  background: var(--charcoal-4);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.carousel-dot.active {
  background: var(--gold);
  width: 22px;
  border-radius: 4px;
}

/* ─── SERVICE AREAS ──────────────────────────────────────── */
.areas-section {
  padding: var(--gap) 0;
  background: var(--bg);
}
.areas-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}
.areas-content { display: flex; flex-direction: column; gap: 0; }
.areas-content h2 { margin-bottom: 16px; }
.areas-content p  { margin-bottom: 28px; font-size: 1rem; }
.areas-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 36px;
}
.area-tag {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--gray-pale);
  background: var(--charcoal-3);
  border: 1px solid var(--border-2);
  padding: 7px 16px;
  border-radius: 100px;
  transition: all 0.2s;
}
.area-tag:hover {
  color: var(--gold);
  border-color: var(--gold-border);
  background: var(--gold-faint);
}

.areas-photo {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 4/5;
  border: 1px solid var(--border-2);
}
.areas-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.areas-badge {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(10,10,10,0.88);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-2);
  border-radius: var(--radius);
  padding: 12px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--white);
}
.areas-badge svg { color: var(--gold); }

/* ─── CTA SECTION ────────────────────────────────────────── */
.cta-section {
  position: relative;
  padding: clamp(72px, 10vw, 120px) 0;
  overflow: hidden;
}
.cta-bg {
  position: absolute;
  inset: 0;
}
.cta-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(5,5,5,0.95), rgba(15,10,0,0.90));
}
.cta-inner {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 680px;
  margin: 0 auto;
}
.cta-inner h2 { font-size: clamp(2rem, 4vw, 3.2rem); margin-bottom: 16px; }
.cta-inner p  { font-size: 1.05rem; margin-bottom: 36px; color: rgba(255,255,255,0.65); }
.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.cta-phone {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--white);
  transition: color 0.2s;
}
.cta-phone:hover { color: var(--gold); }
.cta-phone svg { color: var(--gold); }
.cta-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 0.78rem;
  font-weight: 600;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.04em;
}

/* ─── CONTACT ────────────────────────────────────────────── */
.contact-section {
  padding: var(--gap) 0;
  background: var(--charcoal-2);
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 72px;
  align-items: start;
}
.contact-info { display: flex; flex-direction: column; gap: 0; }
.contact-info h2 { margin: 12px 0 16px; }
.contact-info > p { margin-bottom: 36px; }
.contact-details { display: flex; flex-direction: column; gap: 4px; margin-bottom: 32px; }
.contact-detail-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px;
  border-radius: var(--radius);
  transition: background 0.2s;
}
a.contact-detail-row:hover { background: var(--charcoal-4); }
.detail-icon {
  width: 38px; height: 38px;
  background: var(--charcoal-3);
  border: 1px solid var(--border-2);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  flex-shrink: 0;
  margin-top: 2px;
}
.detail-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray-mid);
  margin-bottom: 3px;
}
.detail-value { font-size: 0.92rem; font-weight: 600; color: var(--gray-pale); }
.contact-badges { display: flex; gap: 10px; flex-wrap: wrap; }
.c-badge {
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--charcoal-3);
  border: 1px solid var(--border-2);
  padding: 9px 16px;
  border-radius: var(--radius);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--gray-pale);
}

/* Form */
.contact-form-wrap {
  background: var(--bg-card);
  border: 1px solid var(--border-2);
  border-radius: var(--radius-xl);
  padding: clamp(28px, 4vw, 44px);
}
.contact-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 7px; }
.form-group label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--gray-light);
}
.form-group input,
.form-group select,
.form-group textarea {
  background: var(--charcoal-3);
  border: 1.5px solid var(--border-2);
  border-radius: var(--radius);
  padding: 13px 16px;
  color: var(--white);
  font-size: 0.9rem;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  -webkit-appearance: none;
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--gray-mid);
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(200,150,60,0.12);
}
.form-group input.error, .form-group select.error { border-color: #e05252; }
.form-error { font-size: 0.75rem; color: #e05252; min-height: 16px; }
.form-group select { cursor: pointer; }
.form-group textarea { resize: vertical; min-height: 110px; }
.form-note { font-size: 0.78rem; color: var(--gray-mid); text-align: center; }
.form-success {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(200,150,60,0.1);
  border: 1px solid var(--gold-border);
  border-radius: var(--radius);
  padding: 16px 20px;
  color: var(--gold-light);
}
.form-success p { color: var(--gold-light); margin: 0; }
.form-success svg { color: var(--gold); flex-shrink: 0; }

/* ─── FOOTER ─────────────────────────────────────────────── */
.footer { background: var(--charcoal); }
.footer-main { padding: 72px 0 56px; border-bottom: 1px solid var(--border); }
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.4fr;
  gap: 48px;
}
.footer-brand { display: flex; flex-direction: column; gap: 16px; }
.footer-logo-link { display: inline-flex; }
.footer-tagline { font-size: 0.875rem; line-height: 1.7; color: var(--gray-mid); max-width: 280px; }
.footer-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--gray-light);
}
.footer-stars { color: var(--gold); letter-spacing: 1px; }
.footer-socials { display: flex; gap: 10px; }
.social-link {
  width: 36px; height: 36px;
  background: var(--charcoal-3);
  border: 1px solid var(--border-2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-light);
  transition: all 0.2s;
}
.social-link:hover { color: var(--white); background: var(--charcoal-4); border-color: var(--border-2); }

.footer-col h5 { margin-bottom: 20px; }
.footer-col ul { display: flex; flex-direction: column; gap: 10px; }
.footer-col li, .footer-col li a {
  font-size: 0.875rem;
  color: var(--gray-mid);
  display: flex;
  align-items: center;
  gap: 7px;
  transition: color 0.2s;
}
.footer-col li a:hover { color: var(--gold); }
.footer-col li svg { color: var(--gold); flex-shrink: 0; }
.footer-cta-btn { margin-top: 20px; align-self: flex-start; }

.footer-bottom {
  padding: 20px 0;
  display: flex;
}
.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.footer-bottom p {
  font-size: 0.78rem;
  color: var(--gray-dark);
}

/* ─── ANIMATIONS ─────────────────────────────────────────── */
@keyframes heroSlideUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: none; }
}
@keyframes heroFadeDown {
  from { opacity: 0; transform: translateY(-14px); }
  to   { opacity: 1; transform: none; }
}
@keyframes ticker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes scrollPulse {
  0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
  50%       { opacity: 0.3; transform: translateX(-50%) translateY(8px); }
}

/* ─── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 1100px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .process-steps { grid-template-columns: repeat(2, 1fr); gap: 40px; }
  .process-connector { display: none; }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
}

@media (max-width: 900px) {
  .nav-links, .nav-actions { display: none; }
  .menu-toggle { display: flex; margin-left: auto; }
  .contact-grid { grid-template-columns: 1fr; gap: 40px; }
  .areas-inner  { grid-template-columns: 1fr; gap: 40px; }
  .areas-photo  { aspect-ratio: 16/9; max-height: 320px; }
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
  .ba-slider { height: 340px; }
  .stat-item { padding: 16px 28px; }
}

@media (max-width: 640px) {
  h1 { font-size: 3rem; }
  h2 { font-size: 2rem; }
  .services-grid    { grid-template-columns: 1fr; }
  .projects-grid    { grid-template-columns: 1fr; }
  .process-steps    { grid-template-columns: 1fr; }
  .stats-grid       { flex-direction: column; }
  .stat-divider     { width: 80px; height: 1px; }
  .stat-item        { padding: 16px 0; }
  .form-row         { grid-template-columns: 1fr; }
  .ba-slider        { height: 240px; }
  .footer-grid      { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom .container { flex-direction: column; text-align: center; }
  .hero-actions     { flex-direction: column; }
  .hero-actions .btn { width: 100%; justify-content: center; }
}
