import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { img, servicos } from '../data';
import { usePedido } from '../pedido';
import { BotaoWa, Linhas, Seta, SUAVE } from './ui';

const LINKS = [['#servicos', 'Serviços'], ['#trabalhos', 'Trabalhos'], ['#don', 'Don Alexandre'], ['#salao', 'O salão'], ['#contato', 'Contato']];

/** Alterna entre tema claro e escuro. A escolha fica salva no navegador;
 *  ?tema=escuro ou ?tema=claro no endereço força um deles (útil para mostrar ao cliente). */
function BotaoTema() {
  const [escuro, setEscuro] = useState(false);
  useEffect(() => { setEscuro(document.documentElement.dataset.theme === 'dark'); }, []);
  const trocar = () => {
    const novo = !escuro;
    setEscuro(novo);
    document.documentElement.dataset.theme = novo ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', novo ? '#15100E' : '#F3ECE2');
    try { localStorage.setItem('tema', novo ? 'escuro' : 'claro'); } catch { /* navegação privada */ }
  };
  return (
    <button type="button" className="tema-btn" onClick={trocar} aria-pressed={escuro} aria-label={escuro ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'} title={escuro ? 'Tema claro' : 'Tema escuro'}>
      {escuro ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="4.2" /><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" /></svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.2A8 8 0 0 1 9.8 4a8 8 0 1 0 10.2 10.2z" /></svg>
      )}
    </button>
  );
}

export function Nav() {
  const { link } = usePedido();
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  useEffect(() => {
    const f = () => setRolou(scrollY > 30);
    f();
    addEventListener('scroll', f, { passive: true });
    return () => removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
    addEventListener('keydown', esc);
    return () => removeEventListener('keydown', esc);
  }, []);
  return (
    <nav className={`nav${rolou ? ' nav--rolou' : ''}${aberto ? ' nav--aberto' : ''}`} aria-label="Principal">
      <div className="wrap nav-in">
        <a href="#inicio" className="marca" translate="no">Don La Vié</a>
        <div className="nav-links" id="nav-links">
          {LINKS.map(([h, t]) => <a key={h} href={h} onClick={() => setAberto(false)}>{t}</a>)}
          <a className="nav-cta" href={link} target="_blank" rel="noopener">Agendar</a>
        </div>
        <div className="nav-dir">
          <BotaoTema />
          <button className="menu-btn" type="button" aria-expanded={aberto} aria-controls="nav-links" aria-label={aberto ? 'Fechar menu' : 'Abrir menu'} onClick={() => setAberto(a => !a)}>
            <span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yFoto = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const yPeq = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);
  return (
    <header className="hero" id="inicio" ref={ref}>
      <div className="wrap">
        <motion.div className="edicao" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <span>Edição Sorocaba</span><span className="so-desk">Mega hair · Visagismo · Cor</span><span>Seg a sáb · 10h às 22h</span>
        </motion.div>
        <div className="hero-grid">
          <div className="hero-texto">
            <h1><Linhas aoCarregar atraso={0.1} linhas={['Mega hair', 'que parece', <em key="e">seu.</em>]} /></h1>
            <motion.p className="lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease: SUAVE }}>
              Salão de beleza no Sorocaba Shopping. Corte, cor e mega hair com direção de visagismo de Don Alexandre.
            </motion.p>
            <motion.div className="acoes" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.68, ease: SUAVE }}>
              <BotaoWa />
              <a className="link" href="#servicos">Escolher serviços <Seta /></a>
            </motion.div>
          </div>
          <div className="colagem">
            <motion.div className="colagem-grande" initial={{ clipPath: 'inset(100% 0 0 0 round 300px 300px 6px 6px)' }} animate={{ clipPath: 'inset(0% 0 0 0 round 300px 300px 6px 6px)' }} transition={{ duration: 1.2, delay: 0.15, ease: SUAVE }}>
              <motion.img style={{ y: yFoto }} src={img('hero.webp')} alt="Cliente do Don La Vié com mega hair loiro em ondas longas" width={1200} height={1585} fetchPriority="high" />
            </motion.div>
            <motion.div className="colagem-pequena" style={{ y: yPeq }} initial={{ opacity: 0, rotate: -14, scale: 0.8 }} animate={{ opacity: 1, rotate: -5, scale: 1 }} transition={{ duration: 0.9, delay: 0.8, ease: SUAVE }} whileHover={{ rotate: -1, scale: 1.05 }}>
              <img src={img('hero-antes-depois.webp')} alt="Antes e depois de uma coloração loira feita no salão" width={700} height={631} />
            </motion.div>
            <motion.div className="etiqueta" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1, ease: SUAVE }}>Nº 01 · ondas loiras</motion.div>
            <motion.div className="selo-pos" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.1, ease: SUAVE }}>
              <svg className="selo" viewBox="0 0 120 120" aria-hidden="true">
                <defs><path id="selo-c" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs>
                <text fontSize="11" fontWeight="700"><textPath href="#selo-c" textLength="264" lengthAdjust="spacing">AGENDE PELO WHATSAPP ✦ AGENDE PELO WHATSAPP ✦</textPath></text>
              </svg>
              <span className="selo-oi" aria-hidden="true">oi!</span>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Faixa() {
  const itens = servicos.map(s => s.nome.toLowerCase());
  const bloco = (k: string) => (
    <span key={k} aria-hidden={k !== 'a'}>
      {itens.map((t, i) => <span key={i} className={i % 2 ? 'vazado' : ''}>{t}<i>✦</i></span>)}
    </span>
  );
  return <div className="faixa"><div className="faixa-trilho">{bloco('a')}{bloco('b')}</div></div>;
}
