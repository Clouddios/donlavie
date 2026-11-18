import { MotionConfig } from 'motion/react';
import { PedidoProvider } from './pedido';
import { Faixa, Hero, Nav } from './components/Topo';
import { BarraWa, Contato, Don, Duvidas, Fecho, Metodos, Rodape, Salao, Servicos, Trabalhos } from './components/Secoes';

export default function App() {
  return (
    // reducedMotion="user": quem pede menos movimento no sistema vê a página parada e completa
    <MotionConfig reducedMotion="user">
      <PedidoProvider>
        <a className="pular" href="#main">Pular para o conteúdo</a>
        <Nav />
        <main id="main">
          <Hero />
          <Faixa />
          <Servicos />
          <Metodos />
          <Trabalhos />
          <Don />
          <Salao />
          <Duvidas />
          <Contato />
          <Fecho />
        </main>
        <Rodape />
        <BarraWa />
      </PedidoProvider>
    </MotionConfig>
  );
}
