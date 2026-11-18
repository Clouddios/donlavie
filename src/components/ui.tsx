import { motion, useInView, useMotionValue, useSpring, animate } from 'motion/react';
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { usePedido } from '../pedido';

export const SUAVE = [0.22, 1, 0.36, 1] as const;

/** Sobe e aparece quando entra na tela, uma vez. */
export function Revela({ children, atraso = 0, className }: { children: ReactNode; atraso?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, delay: atraso, ease: SUAVE }}
    >
      {children}
    </motion.div>
  );
}

/** Título que sobe linha por linha de trás de uma máscara. */
export function Linhas({ linhas, atraso = 0, aoCarregar = false }: { linhas: ReactNode[]; atraso?: number; aoCarregar?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const naTela = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const ativo = aoCarregar || naTela;
  return (
    <span ref={ref} className="linhas">
      {linhas.map((l, i) => (
        <span className="linha" key={i}>
          <motion.span
            initial={{ y: '110%' }}
            animate={ativo ? { y: 0 } : undefined}
            transition={{ duration: 0.9, delay: atraso + i * 0.09, ease: SUAVE }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Número que conta até o valor quando entra na tela. */
export function Contagem({ valor, prefixo = '', sufixo = '' }: { valor: number; prefixo?: string; sufixo?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const naTela = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const [n, setN] = useState(valor); // sem JavaScript (e no HTML pronto) aparece o número final
  useEffect(() => {
    if (!naTela) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = animate(0, valor, { duration: 1.4, ease: 'easeOut', onUpdate: v => setN(Math.round(v)) });
    return () => c.stop();
  }, [naTela, valor]);
  return <span ref={ref} className="contagem">{prefixo}{n}{sufixo}</span>;
}

/** Botão que é puxado de leve pelo cursor. */
export function Magnetico({ children }: { children: ReactNode }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 }), sy = useSpring(y, { stiffness: 220, damping: 16 });
  const mover = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  return (
    <motion.div className="magnetico" style={{ x: sx, y: sy }} onMouseMove={mover} onMouseLeave={() => { x.set(0); y.set(0); }}>
      {children}
    </motion.div>
  );
}

export const IconeWa = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.4.2-.4a.5.5 0 0 0 0-.5c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3A2.8 2.8 0 0 0 5 8.9a4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c.6.3 1.1.4 1.5.5a3.5 3.5 0 0 0 1.6.1c.5-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1z"/></svg>
);
export const Seta = () => (
  <svg aria-hidden="true" className="seta" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
);

/** O botão de agendar: sempre com o link e o rótulo do pedido atual. */
export function BotaoWa({ claro = false, grande = false }: { claro?: boolean; grande?: boolean }) {
  const { link, rotulo } = usePedido();
  return (
    <a className={`btn${claro ? ' btn--claro' : ''}${grande ? ' btn--grande' : ''}`} href={link} target="_blank" rel="noopener">
      <IconeWa /><span key={rotulo} className="troca">{rotulo}</span><Seta />
    </a>
  );
}

/** Etiqueta de "provisório": só aparece com ?revisao no endereço. */
export function Prov({ quando = true }: { quando?: boolean }) {
  const [ver, setVer] = useState(false);
  useEffect(() => { setVer(new URLSearchParams(location.search).has('revisao')); }, []);
  if (!quando || !ver) return null;
  return <span className="prov">provisório</span>;
}

/** Cabeçalho numerado de seção, no estilo de sumário de revista. */
export function Cabecalho({ num, linhas, children }: { num: string; linhas: ReactNode[]; children?: ReactNode }) {
  return (
    <div className="cab">
      <Revela className="num"><span aria-hidden="true">{num}</span></Revela>
      <div>
        <h2><Linhas linhas={linhas} /></h2>
        {children && <Revela atraso={0.15}><p className="cab-p">{children}</p></Revela>}
      </div>
    </div>
  );
}
