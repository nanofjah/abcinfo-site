/* ══════════════════════════════════════════════════════
   THÈME 80s / 90s
══════════════════════════════════════════════════════ */
function setTheme(t) {
  const b80 = document.getElementById('btn80');
  const b90 = document.getElementById('btn90');
  if (t === '80') {
    document.body.classList.add('theme-80');
    b80.style.color = '#33ff33'; b80.style.borderColor = '#33ff33';
    b90.style.color = 'rgba(255,255,255,0.45)'; b90.style.borderColor = 'rgba(255,255,255,0.2)';
  } else {
    document.body.classList.remove('theme-80');
    b80.style.color = 'rgba(255,255,255,0.45)'; b80.style.borderColor = 'rgba(255,255,255,0.2)';
    b90.style.color = '#ffb300'; b90.style.borderColor = '#ffb300';
  }
}
setTheme('90');


/* ══════════════════════════════════════════════════════
   NAVIGATION — scroll effect & mobile
══════════════════════════════════════════════════════ */
const navbar  = document.getElementById('navbar');
const burger   = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');

const themeBar = document.getElementById('themeBar');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 40;
  navbar.style.opacity = scrolled ? '0' : '1';
  navbar.style.pointerEvents = scrolled ? 'none' : 'auto';
  themeBar.style.opacity = scrolled ? '0' : '1';
  themeBar.style.pointerEvents = scrolled ? 'none' : 'auto';
});

burger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

function closeMobile() {
  navMobile.classList.remove('open');
}

function positionThemeBar() {
  const contact = document.querySelector('.nav-contact');
  const bar = document.getElementById('themeBar');
  if (!contact || !bar) return;
  const r = contact.getBoundingClientRect();
  bar.style.right = (document.documentElement.clientWidth - r.right) + 'px';
}
positionThemeBar();
window.addEventListener('resize', positionThemeBar);


/* ══════════════════════════════════════════════════════
   ANIMATIONS — Intersection Observer
══════════════════════════════════════════════════════ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('anim-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


/* ══════════════════════════════════════════════════════
   FORMULAIRE DE CONTACT
══════════════════════════════════════════════════════ */
function envoyerForm(e) {
  e.preventDefault();
  const btn     = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  const form    = document.getElementById('contactForm');

  btn.textContent = 'Envoi en cours…';
  btn.disabled = true;

  const data = new FormData(form);

  fetch('/contact.php', { method: 'POST', body: data })
    .then(r => r.json())
    .then(res => {
      if (res.ok) {
        form.reset();
        btn.style.display = 'none';
        success.style.display = 'block';
      } else {
        btn.textContent = 'Réessayer';
        btn.disabled = false;
        alert('Erreur : ' + (res.error || 'envoi impossible'));
      }
    })
    .catch(() => {
      btn.textContent = 'Réessayer';
      btn.disabled = false;
      alert('Erreur réseau, veuillez réessayer.');
    });
}


/* ══════════════════════════════════════════════════════
   TÉLÉCHARGEMENT VCARD
══════════════════════════════════════════════════════ */
function telechargerVCard() {
  const vcf = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Eric Miermon',
    'N:Miermon;Eric;;;',
    'ORG:AbcInfo',
    'TITLE:Ingénieur diplômé EPITA Paris',
    'TEL;TYPE=WORK,VOICE:+41223205600',
    'EMAIL;TYPE=WORK:eric@abcinfo.ch',
    'URL:https://www.abcinfo.ch',
    'ADR;TYPE=WORK:;;Carouge;Genève;;CH',
    'NOTE:Support & Maintenance · Développement & Applications · Genève',
    'END:VCARD',
  ].join('\r\n');

  const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'eric-miermon-abcinfo.vcf';
  link.click();
  URL.revokeObjectURL(link.href);
}


/* ══════════════════════════════════════════════════════
   TYPEWRITER — titre hero
══════════════════════════════════════════════════════ */
(function () {
  const el = document.getElementById('hero-title');
  if (!el) return;

  const cursor = document.createElement('span');
  cursor.className = 'hero-cursor';
  el.appendChild(cursor);

  let timer = null;

  function buildLines(rawLines) {
    // line 2 (index 1) gets gradient in FR, line 1 (index 0) in EN
    return rawLines.filter(t => t !== '').map((text, i) => ({
      text,
      gradient: text === 'informatique' || (rawLines[0] !== 'votre partenaire' && i === 0)
    }));
  }

  function startTypewriter(rawLines) {
    if (timer) clearTimeout(timer);
    // Clear previous spans/brs but keep cursor
    [...el.childNodes].forEach(n => { if (n !== cursor) n.remove(); });

    const lines = buildLines(rawLines);
    let lineIdx = 0, charIdx = 0;
    const SPEED = 110;
    const PAUSE = 500;

    function typeLine() {
      if (lineIdx >= lines.length) return;
      const { text, gradient } = lines[lineIdx];

      if (charIdx === 0) {
        const span = document.createElement('span');
        span.dataset.line = lineIdx;
        if (gradient) span.className = 'gradient-text';
        el.insertBefore(span, cursor);
        if (lineIdx > 0) el.insertBefore(document.createElement('br'), span);
      }

      const span = el.querySelector(`[data-line="${lineIdx}"]`);
      span.textContent = text.slice(0, charIdx + 1);
      charIdx++;

      if (charIdx < text.length) {
        timer = setTimeout(typeLine, SPEED);
      } else {
        lineIdx++;
        charIdx = 0;
        timer = setTimeout(typeLine, PAUSE);
      }
    }

    timer = setTimeout(typeLine, 300);
  }

  // Expose pour i18n.js
  window._restartTypewriter = startLines => startTypewriter(startLines);

  // Démarrer avec lignes FR par défaut
  startTypewriter(['votre partenaire', 'informatique', 'à Genève']);
})();


/* ══════════════════════════════════════════════════════
   SMOOTH SCROLL pour les ancres
══════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80; // hauteur navbar
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    });
  });
});


/* ══════════════════════════════════════════════════════
   MATRIX RAIN — toutes sections
══════════════════════════════════════════════════════ */
(function () {
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF><{}[]()';
  const COL_W = 16;

  function initMatrix(canvas) {
    const ctx  = canvas.getContext('2d');
    const dark = canvas.dataset.theme === 'dark';
    const bgFade = dark ? 'rgba(6,13,6,0.05)' : 'rgba(248,250,252,0.05)';
    let cols, drops;

    function getAmber() {
      return getComputedStyle(document.body).getPropertyValue('--amber').trim() || '#ffb300';
    }

    function init() {
      canvas.width  = canvas.offsetWidth  || canvas.parentElement.offsetWidth;
      canvas.height = canvas.offsetHeight || canvas.parentElement.offsetHeight;
      cols  = Math.floor(canvas.width / COL_W);
      drops = Array(cols).fill(1);
    }

    function draw() {
      ctx.fillStyle = bgFade;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = dark ? getAmber() : '#334155';
      ctx.font = '14px monospace';
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * COL_W, y * COL_W);
        if (y * COL_W > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }

    new ResizeObserver(init).observe(canvas.parentElement);
    init();
    setInterval(draw, 50);
  }

  document.querySelectorAll('.matrix-canvas').forEach(initMatrix);
})();
