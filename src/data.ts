// Todo o conteúdo do site fica aqui. Itens com `provisorio: true` são textos de
// rascunho que o salão ainda precisa confirmar; abra o site com ?revisao no
// endereço para ver uma etiqueta em cada um.

const BASE = import.meta.env.BASE_URL;
export const img = (nome: string) => `${BASE}img/${nome}`;

export const WHATSAPP = '5515988245917';
export const waLink = (servicos: string[] = []) => {
  const msg = servicos.length
    ? `Olá! Quero agendar no Don La Vié: ${listar(servicos)}.`
    : 'Olá! Quero agendar um horário no Don La Vié.';
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
};
export const listar = (nomes: string[]) =>
  nomes.length < 2 ? nomes.join('') : `${nomes.slice(0, -1).join(', ')} e ${nomes[nomes.length - 1]}`;

export const servicos = [
  { nome: 'Mega Hair', texto: 'Nó italiano, queratina, fita adesiva e ponto americano.' },
  { nome: 'Visagismo', texto: 'Corte e cor pensados a partir do seu rosto, com Don Alexandre.' },
  { nome: 'Cabelo e Cor', texto: 'Cortes, coloração, mechas e tratamentos capilares.' },
  { nome: 'Barbearia', texto: 'Barba, corte masculino e acabamento.' },
  { nome: 'Manicure e Estética', texto: 'Mãos, pés, sobrancelhas e micropigmentação.' },
  { nome: 'Perucas e Manutenção', texto: 'Perucas sob medida e manutenção do seu mega hair.' },
];

// PROVISÓRIO: descrições gerais de cada técnica. O salão deve revisar e, se quiser,
// acrescentar duração e intervalo de manutenção de cada método.
export const metodos = [
  { nome: 'Fita adesiva', foto: 'metodo-1.webp', texto: 'Faixas finas de cabelo coladas rente à raiz. Aplicação rápida e acabamento discreto, que acompanha o movimento do seu cabelo.', provisorio: true },
  { nome: 'Nó italiano', foto: 'metodo-2.webp', texto: 'Mechas presas fio a fio com um nó de linha, sem cola e sem calor. Leve no dia a dia e fácil de ajustar na manutenção.', provisorio: true },
  { nome: 'Queratina', foto: 'metodo-3.webp', texto: 'Mechas com ponta de queratina fixadas uma a uma. Liberdade para prender o cabelo e resultado muito natural.', provisorio: true },
  { nome: 'Ponto americano', foto: 'metodo-4.webp', texto: 'Tela de cabelo costurada em uma base firme. Muito volume e comprimento em uma única aplicação.', provisorio: true },
];

export const trabalhos = [
  { foto: 'trabalho-1.webp', rotulo: 'Cor e corte', alt: 'Antes e depois: cabelo castanho com mechas, de frente' },
  { foto: 'trabalho-2.webp', rotulo: 'Mega hair loiro', alt: 'Antes e depois: mega hair loiro platinado em ondas, de costas' },
  { foto: 'trabalho-3.webp', rotulo: 'Mechas acobreadas', alt: 'Antes e depois: cabelo escuro liso que ganhou mechas acobreadas e ondas' },
  { foto: 'trabalho-4.webp', rotulo: 'Volume e ondas', alt: 'Antes e depois: cabelo castanho com mais volume e ondas, diante da parede verde do salão' },
  { foto: 'trabalho-5.webp', rotulo: 'Loiro iluminado', alt: 'Antes e depois: loiro iluminado com mega hair em ondas' },
  { foto: 'trabalho-6.webp', rotulo: 'Do curto ao longo', alt: 'Antes e depois: cabelo curto que ficou longo e preto com mega hair' },
  { foto: 'trabalho-7.webp', rotulo: 'Comprimento', alt: 'Antes e depois: cabelo castanho com mais comprimento' },
  { foto: 'trabalho-8.webp', rotulo: 'Liso longo', alt: 'Antes e depois: cabelo preto liso e longo com mega hair' },
];

export const don = {
  // PROVISÓRIO: frase e biografia montadas a partir das legendas do Instagram dele.
  frase: 'Todo cabelo começa pelo seu rosto.',
  bio: 'Don Alexandre é dono do Don La Vié e o cabeleireiro principal da casa. Ele conduz cada atendimento pelo visagismo: olha o formato do rosto, o tom de pele e a sua rotina antes de decidir corte, cor e mega hair.',
  fatos: [
    { valor: '27 anos', texto: 'trabalhando com cor' },
    { valor: 'Visagista', texto: 'formado no método Claude Juillard' },
    { valor: 'Educador', texto: 'leva cursos de cor e corte a outros profissionais' },
  ],
  provisorio: true,
};

export const diferenciais = [
  { titulo: 'Dentro do Sorocaba Shopping', texto: 'Fácil de chegar, com estacionamento e conforto.' },
  { titulo: 'Aberto até as 22h', texto: 'De segunda a sábado, das 10h às 22h. Dá para vir depois do trabalho.' },
  { titulo: 'Direção de visagismo', texto: 'Cada atendimento parte do que valoriza o seu rosto, não de uma fórmula pronta.' },
];

// Números tirados do perfil @don.megahairsorocaba em novembro de 2026.
export const numeros = [
  { valor: 27, sufixo: ' anos', texto: 'de Don Alexandre na coloração' },
  { valor: 16, sufixo: ' mil', texto: 'pessoas acompanham o mega hair no Instagram' },
  { valor: 700, prefixo: '+', texto: 'trabalhos publicados' },
  { valor: 12, sufixo: 'h', texto: 'aberto por dia, seis dias por semana' },
];

// PROVISÓRIO: respostas genéricas. O salão deve confirmar cada uma.
export const duvidas = [
  { p: 'Preciso passar por uma avaliação antes do mega hair?', r: 'Sim. Toda aplicação começa com uma conversa de visagismo, para escolher o método, a cor e o comprimento que combinam com você.', provisorio: true },
  { p: 'Quanto custa?', r: 'O valor depende do método, do comprimento e da quantidade de cabelo. Passamos o orçamento pelo WhatsApp depois da avaliação.', provisorio: true },
  { p: 'Qual método de mega hair é o melhor?', r: 'Depende do seu cabelo e da sua rotina. Trabalhamos com fita adesiva, nó italiano, queratina e ponto americano, e indicamos o mais adequado na avaliação.', provisorio: true },
  { p: 'Vocês fazem a manutenção?', r: 'Sim. Fazemos a manutenção do mega hair aplicado aqui e também perucas sob medida.' },
  { p: 'Como eu agendo?', r: 'Pelo WhatsApp (15) 98824-5917. Você pode marcar os serviços nesta página e a mensagem já sai preenchida.' },
];

export const contato = {
  // ATENÇÃO: a bio do Instagram diz número 1766; o site antigo e os diretórios dizem 1700. Confirmar.
  endereco: 'Av. Dr. Afonso Vergueiro, 1700',
  complemento: 'Sorocaba Shopping · Centro, Sorocaba/SP',
  horario: 'Segunda a sábado, 10h às 22h',
  fechado: 'Domingo fechado',
  telefones: [
    { numero: '(15) 98824-5917', href: 'tel:+5515988245917', tipo: 'WhatsApp' },
    { numero: '(15) 3211-5732', href: 'tel:+551532115732', tipo: 'Fixo' },
  ],
  mapa: 'https://www.google.com/maps?q=Av.+Dr.+Afonso+Vergueiro,+1700+-+Sorocaba+Shopping,+Sorocaba+-+SP&output=embed',
  instagram: [
    { nome: '@donlavie_', href: 'https://www.instagram.com/donlavie_' },
    { nome: '@don.megahairsorocaba', href: 'https://www.instagram.com/don.megahairsorocaba' },
    { nome: '@donalexandre.visagismo', href: 'https://www.instagram.com/donalexandre.visagismo' },
  ],
};
