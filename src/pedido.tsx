import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { waLink } from './data';

// Os serviços que a visitante marcou. Todos os botões de WhatsApp leem daqui,
// então a mensagem já sai com a lista escolhida.
type Pedido = { escolhidos: string[]; alternar: (nome: string) => void; link: string; rotulo: string };
const Ctx = createContext<Pedido | null>(null);

export function PedidoProvider({ children }: { children: ReactNode }) {
  const [escolhidos, setEscolhidos] = useState<string[]>([]);
  const valor = useMemo<Pedido>(() => {
    const n = escolhidos.length;
    return {
      escolhidos,
      alternar: nome => setEscolhidos(a => (a.includes(nome) ? a.filter(x => x !== nome) : [...a, nome])),
      link: waLink(escolhidos),
      rotulo: n === 0 ? 'Agendar no WhatsApp' : n === 1 ? 'Agendar 1 serviço' : `Agendar ${n} serviços`,
    };
  }, [escolhidos]);
  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}

export function usePedido() {
  const v = useContext(Ctx);
  if (!v) throw new Error('usePedido fora do PedidoProvider');
  return v;
}
