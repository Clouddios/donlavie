const nav = document.getElementById('nav');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40));

function closeMenu() {
  navLinks.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = '☰';
}

function toggleMenu() {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  menuBtn.textContent = isOpen ? '✕' : '☰';
}

menuBtn.addEventListener('click', toggleMenu);
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
addEventListener('resize', () => { if (innerWidth > 900) closeMenu(); });

const io = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  }),
  { threshold: .12 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Instagram's embed script sometimes fails silently on posts loaded
// simultaneously (rate limiting). Re-running process() is safe — it
// only touches blockquotes not yet converted to an iframe — so retry
// a few times and again whenever an unprocessed card scrolls into view.
function processInstagramEmbeds() {
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
  }
}
[500, 1500, 3000, 6000].forEach(ms => setTimeout(processInstagramEmbeds, ms));

const instaObserver = new IntersectionObserver(
  entries => { if (entries.some(e => e.isIntersecting)) processInstagramEmbeds(); },
  { threshold: .1 }
);
document.querySelectorAll('.insta-card').forEach(el => instaObserver.observe(el));
