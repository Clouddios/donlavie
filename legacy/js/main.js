const root = document.documentElement;
const nav = document.getElementById('nav');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const hasIO = 'IntersectionObserver' in window;

// O CSS só apaga espelhos e mostra dicas de interação sob a classe .js,
// então sem JavaScript a página aparece inteira e acesa.
root.classList.add('js');

addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40), { passive: true });

/* ---------- Menu mobile ---------- */
function setMenu(open) {
  navLinks.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}
menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    setMenu(false);
    menuBtn.focus();
  }
});
addEventListener('resize', () => { if (innerWidth > 900) setMenu(false); });

/* ---------- Espelhos que acendem ao entrar na tela ---------- */
const espelhos = document.querySelectorAll('[data-acende]');
if (hasIO) {
  const luz = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aceso');
      luz.unobserve(entry.target);
    }
  }), { threshold: 0, rootMargin: '0px 0px -18% 0px' }); // sem limiar de área: funciona em telas baixas
  espelhos.forEach(el => luz.observe(el));
} else {
  espelhos.forEach(el => el.classList.add('aceso'));
}

/* ---------- Serviços escolhidos -> mensagem do WhatsApp ---------- */
const WA = 'https://wa.me/5515988245917?text=';
const servicos = document.querySelectorAll('.espelho input');
const waLinks = document.querySelectorAll('[data-wa]');
const waLabels = document.querySelectorAll('[data-wa-label]');
const pedido = document.querySelector('[data-pedido]');

function lista(nomes) {
  if (nomes.length < 2) return nomes.join('');
  return nomes.slice(0, -1).join(', ') + ' e ' + nomes[nomes.length - 1];
}

// Troca o texto e reacende o elemento (classe .reacende no CSS), só quando o texto muda de fato.
function trocarTexto(el, texto) {
  if (el.textContent === texto) return;
  el.textContent = texto;
  el.classList.remove('reacende');
  void el.offsetWidth; // reinicia a animação
  el.classList.add('reacende');
}

function atualizarPedido() {
  const nomes = [...servicos].filter(i => i.checked).map(i => i.value);
  const n = nomes.length;
  const msg = n
    ? `Olá! Quero agendar no Don La Vié: ${lista(nomes)}.`
    : 'Olá! Quero agendar um horário no Don La Vié.';
  const href = WA + encodeURIComponent(msg);
  waLinks.forEach(a => { a.href = href; });
  const rotulo = n === 0 ? 'Agendar no WhatsApp' : n === 1 ? 'Agendar 1 serviço' : `Agendar ${n} serviços`;
  waLabels.forEach(el => trocarTexto(el, rotulo));
  if (pedido) trocarTexto(pedido, n ? `Você escolheu: ${lista(nomes)}.` : 'Nenhum serviço escolhido ainda.');
}
servicos.forEach(i => i.addEventListener('change', atualizarPedido));
atualizarPedido(); // o navegador pode restaurar caixas marcadas ao voltar para a página

/* ---------- Barra fixa: some enquanto um botão de agendar da página está na tela ---------- */
const waBar = document.querySelector('.wa-bar');
if (waBar && hasIO) {
  const visiveis = new Set();
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting ? visiveis.add(e.target) : visiveis.delete(e.target));
    waBar.classList.toggle('is-hidden', visiveis.size > 0);
  });
  document.querySelectorAll('.btn-wa, .pedido .link-luz').forEach(el => obs.observe(el));
}

/* ---------- Instagram: o embed.js só é baixado perto da vitrine (LCP) ---------- */
function processarInstagram() {
  if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process();
}
let instagramCarregado = false;
function carregarInstagram() {
  if (instagramCarregado) return;
  instagramCarregado = true;
  const s = document.createElement('script');
  s.src = 'https://www.instagram.com/embed.js';
  s.async = true;
  // O script às vezes falha em silêncio com vários posts ao mesmo tempo.
  // process() só toca nos blockquotes ainda não convertidos, então repetir é seguro.
  s.onload = () => [500, 1500, 3000, 6000].forEach(ms => setTimeout(processarInstagram, ms));
  document.body.appendChild(s);
}
const vitrine = document.getElementById('trabalhos');
if (vitrine && hasIO) {
  const obs = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      carregarInstagram();
      processarInstagram();
    }
  }, { rootMargin: '600px 0px' });
  obs.observe(vitrine);
  document.querySelectorAll('.insta-card').forEach(el => obs.observe(el));
} else {
  carregarInstagram();
}
