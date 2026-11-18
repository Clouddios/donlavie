import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { contato, diferenciais, don, duvidas, img, listar, metodos, numeros, servicos, trabalhos } from '../data';
import { usePedido } from '../pedido';
import { BotaoWa, Cabecalho, Contagem, Linhas, Magnetico, Prov, Revela, Seta, SUAVE } from './ui';

/* ---------- 01 Serviços ---------- */
export function Servicos() {
  const { escolhidos, alternar } = usePedido();
  return (
    <section className="sec" id="servicos">
      <div className="wrap">
        <Cabecalho num="01" linhas={['Escolha o que', 'você quer fazer.']}>
          Toque nos serviços para marcar. A mensagem do WhatsApp já sai com a sua lista.
        </Cabecalho>
        <ul className="servicos">
          {servicos.map((s, i) => {
            const on = escolhidos.includes(s.nome);
            return (
              <Revela key={s.nome} atraso={i * 0.05}>
                <li>
                  <button type="button" className={`servico${on ? ' servico--on' : ''}`} aria-pressed={on} onClick={() => alternar(s.nome)}>
                    <span className="servico-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span className="servico-nome">{s.nome}</span>
                    <span className="servico-texto">{s.texto}</span>
                    <span className="servico-marca" aria-hidden="true">{on ? 'Marcado ✓' : 'Marcar +'}</span>
                  </button>
                </li>
              </Revela>
            );
          })}
        </ul>
        <div className="pedido" aria-live="polite">
          <p key={escolhidos.join()} className="troca">{escolhidos.length ? `Você escolheu: ${listar(escolhidos)}.` : 'Nenhum serviço marcado ainda.'}</p>
          <BotaoWa />
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 Mega hair em detalhe ---------- */
function Metodo({ m, i }: { m: (typeof metodos)[number]; i: number }) {
  // brilho que segue o cursor dentro do cartão
  const mover = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <Revela atraso={i * 0.08}>
      <article className="metodo" onMouseMove={mover}>
        <div className="metodo-foto"><img src={img(m.foto)} alt="" loading="lazy" decoding="async" /></div>
        <div className="metodo-corpo">
          <span className="metodo-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <h3>{m.nome} <Prov quando={m.provisorio} /></h3>
          <p>{m.texto}</p>
        </div>
      </article>
    </Revela>
  );
}
export function Metodos() {
  return (
    <section className="sec sec--papel" id="mega-hair">
      <div className="wrap">
        <Cabecalho num="02" linhas={['Mega hair,', 'quatro métodos.']}>
          O método certo depende do seu cabelo e da sua rotina. A escolha é feita com você, na avaliação.
        </Cabecalho>
        <div className="metodos">{metodos.map((m, i) => <Metodo key={m.nome} m={m} i={i} />)}</div>
      </div>
    </section>
  );
}

/* ---------- 03 Trabalhos ---------- */
export function Trabalhos() {
  const [aberto, setAberto] = useState<number | null>(null);
  const fechar = () => setAberto(null);
  useEffect(() => {
    if (aberto === null) return;
    const tecla = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar();
      if (e.key === 'ArrowRight') setAberto(a => (a === null ? a : (a + 1) % trabalhos.length));
      if (e.key === 'ArrowLeft') setAberto(a => (a === null ? a : (a - 1 + trabalhos.length) % trabalhos.length));
    };
    addEventListener('keydown', tecla);
    document.documentElement.style.overflow = 'hidden';
    return () => { removeEventListener('keydown', tecla); document.documentElement.style.overflow = ''; };
  }, [aberto]);
  const t = aberto === null ? null : trabalhos[aberto];
  return (
    <section className="sec" id="trabalhos">
      <div className="wrap">
        <Cabecalho num="03" linhas={['Antes, depois e o', 'caminho entre os dois.']}>
          Trabalhos feitos no salão. Toque em uma foto para ver grande.
        </Cabecalho>
        <ul className="mural">
          {trabalhos.map((tr, i) => (
            <Revela key={tr.foto} atraso={(i % 4) * 0.07}>
              <li>
                <motion.button type="button" className="mural-item" onClick={() => setAberto(i)} whileHover={{ y: -8, rotate: i % 2 ? 1.2 : -1.2 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} aria-label={`Ampliar: ${tr.rotulo}`}>
                  <motion.img layoutId={`trab-${i}`} src={img(tr.foto)} alt={tr.alt} loading="lazy" decoding="async" />
                  <b aria-hidden="true">{String(i + 1).padStart(2, '0')}</b>
                  <span>{tr.rotulo}</span>
                </motion.button>
              </li>
            </Revela>
          ))}
        </ul>
        <Revela><p className="mural-mais"><a className="link" href={contato.instagram[1].href} target="_blank" rel="noopener">Ver mais no Instagram <Seta /></a></p></Revela>
      </div>
      <AnimatePresence>
        {t && aberto !== null && (
          <motion.div className="luz" role="dialog" aria-modal="true" aria-label={t.rotulo} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={fechar}>
            <motion.img layoutId={`trab-${aberto}`} src={img(t.foto)} alt={t.alt} onClick={e => e.stopPropagation()} />
            <p>{String(aberto + 1).padStart(2, '0')} · {t.rotulo}</p>
            <button type="button" className="luz-x" onClick={fechar} aria-label="Fechar" autoFocus>×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------- 04 Don Alexandre ---------- */
function Palavra({ children, p, de, ate }: { children: string; p: MotionValue<number>; de: number; ate: number }) {
  const opacity = useTransform(p, [de, ate], [0.22, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}
export function Don() {
  const ref = useRef<HTMLQuoteElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'start 35%'] });
  const palavras = `“${don.frase}”`.split(' ');
  return (
    <section className="sec don" id="don">
      <div className="don-fundo" aria-hidden="true">Don</div>
      <div className="wrap don-grid">
        <Revela className="retrato">
          <div className="retrato-foto"><img src={img('don-alexandre.webp')} alt="Don Alexandre trabalhando na bancada do salão" width={1000} height={1169} loading="lazy" decoding="async" /></div>
        </Revela>
        <div>
          <Revela><small className="sobre">04 · Quem assina <Prov quando={don.provisorio} /></small></Revela>
          <blockquote ref={ref}>
            {palavras.map((w, i) => <Palavra key={i} p={scrollYProgress} de={i / palavras.length} ate={(i + 1) / palavras.length}>{w}</Palavra>)}
          </blockquote>
          <Revela atraso={0.1}><p className="don-bio">{don.bio}</p></Revela>
          <Revela atraso={0.15}><div className="assina" aria-hidden="true">Don Alexandre</div></Revela>
          <ul className="don-fatos">
            {don.fatos.map((f, i) => <Revela key={f.valor} atraso={0.1 + i * 0.08}><li><b>{f.valor}</b><span>{f.texto}</span></li></Revela>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 05 O salão + números ---------- */
export function Salao() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['18%', '-18%']);
  return (
    <section className="sec" id="salao">
      <div className="wrap">
        <Cabecalho num="05" linhas={['Um salão inteiro', 'dentro do shopping.']} />
        <div className="salao-fotos" ref={ref}>
          <motion.div className="salao-a" style={{ y: y1 }}><img src={img('salao-frente.webp')} alt="Salão Don La Vié visto pela vitrine: bancada com espelhos redondos iluminados e cadeiras" width={960} height={682} loading="lazy" decoding="async" /></motion.div>
          <motion.div className="salao-b" style={{ y: y2 }}><img src={img('salao-interior.webp')} alt="Interior do salão, com estações de cabelo e espelhos iluminados" width={425} height={680} loading="lazy" decoding="async" /></motion.div>
        </div>
        <dl className="diferenciais">
          {diferenciais.map((d, i) => <Revela key={d.titulo} atraso={i * 0.08}><div><dt>{d.titulo}</dt><dd>{d.texto}</dd></div></Revela>)}
        </dl>
        <ul className="numeros">
          {numeros.map((n, i) => (
            <Revela key={n.texto} atraso={i * 0.06}>
              <li><b><Contagem valor={n.valor} prefixo={n.prefixo} sufixo={n.sufixo} /></b><span>{n.texto}</span></li>
            </Revela>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 06 Dúvidas ---------- */
export function Duvidas() {
  const [aberta, setAberta] = useState<number | null>(0);
  return (
    <section className="sec sec--papel" id="duvidas">
      <div className="wrap duvidas-grid">
        <Cabecalho num="06" linhas={['Antes de', 'você perguntar.']} />
        <ul className="duvidas">
          {duvidas.map((d, i) => {
            const on = aberta === i;
            return (
              <li key={d.p} className={on ? 'on' : ''}>
                <h3><button type="button" aria-expanded={on} aria-controls={`duv-${i}`} onClick={() => setAberta(on ? null : i)}>
                  <span>{d.p} <Prov quando={d.provisorio} /></span><i aria-hidden="true" />
                </button></h3>
                <motion.div id={`duv-${i}`} initial={false} animate={{ height: on ? 'auto' : 0, opacity: on ? 1 : 0 }} transition={{ duration: 0.45, ease: SUAVE }} style={{ overflow: 'hidden' }} aria-hidden={!on}>
                  <p>{d.r}</p>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------- 07 Contato ---------- */
export function Contato() {
  return (
    <section className="sec" id="contato">
      <div className="wrap">
        <Cabecalho num="07" linhas={['Onde a gente', 'se encontra.']} />
        <div className="contato-grid">
          <Revela className="contato-info">
            <div><h3>Endereço</h3><address>{contato.endereco}<br /><span>{contato.complemento}</span></address></div>
            <div><h3>Horário</h3><p>{contato.horario}<br /><span>{contato.fechado}</span></p></div>
            <div><h3>Telefones</h3><ul>{contato.telefones.map(t => <li key={t.href}><a href={t.href}>{t.numero}</a> <span>{t.tipo}</span></li>)}</ul></div>
            <div><h3>Instagram</h3><ul>{contato.instagram.map(i => <li key={i.href}><a href={i.href} target="_blank" rel="noopener">{i.nome}</a></li>)}</ul></div>
          </Revela>
          <Revela className="mapa" atraso={0.1}>
            <iframe src={contato.mapa} title="Localização do Don La Vié no Sorocaba Shopping" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </Revela>
        </div>
      </div>
    </section>
  );
}

/* ---------- Fecho, rodapé e barra do celular ---------- */
export function Fecho() {
  return (
    <section className="fecho">
      <div className="wrap">
        <h2><Linhas linhas={['Vem.']} /></h2>
        <Revela atraso={0.2}><p>Seu horário começa numa mensagem. Sorocaba Shopping, de segunda a sábado, das 10h às 22h.</p></Revela>
        <Revela atraso={0.3}><Magnetico><BotaoWa claro grande /></Magnetico></Revela>
      </div>
    </section>
  );
}

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="wrap rodape-in">
        <span className="marca" translate="no">Don La Vié</span>
        <div>{contato.instagram.slice(0, 2).map(i => <a key={i.href} href={i.href} target="_blank" rel="noopener">{i.nome}</a>)}</div>
        <p>© 2026 Don La Vié · Sorocaba/SP</p>
      </div>
    </footer>
  );
}

/** No celular, o botão de agendar fica fixo embaixo depois que o topo sai da tela. */
export function BarraWa() {
  const { link, rotulo } = usePedido();
  const [ver, setVer] = useState(false);
  useEffect(() => {
    const f = () => {
      const fim = document.documentElement.scrollHeight - innerHeight - 500;
      setVer(scrollY > innerHeight * 0.8 && scrollY < fim);
    };
    f();
    addEventListener('scroll', f, { passive: true });
    return () => removeEventListener('scroll', f);
  }, []);
  return <a className={`barra${ver ? ' barra--ver' : ''}`} href={link} target="_blank" rel="noopener" tabIndex={ver ? 0 : -1}>{rotulo}</a>;
}
