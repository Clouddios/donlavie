---
name: Don La Vié
description: "Espelho de Camarim: sala preta, dourado só onde há luz."
colors:
  preto: "#0A0908"
  vidro: "#1B1815"
  bronze: "#5E4D2A"
  ouro: "#D4AF5A"
  luz: "#F3D98B"
  luz-alta: "#FFF1C9"
  marfim: "#F4ECDD"
  suave: "#B8AC96"
  linha: "rgba(212,175,90,.24)"
typography:
  display:
    fontFamily: "'Bodoni Moda', 'Didot', 'Bodoni MT', serif"
    fontSize: "clamp(2.5rem, 4.3vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Bodoni Moda', 'Didot', 'Bodoni MT', serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Bodoni Moda', 'Didot', 'Bodoni MT', serif"
    fontSize: "1.5rem"
    fontWeight: 500
    letterSpacing: "-0.01em"
  espelho-nome:
    fontFamily: "'Bodoni Moda', 'Didot', 'Bodoni MT', serif"
    fontSize: "clamp(1rem, 1.45vw, 1.3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "'Hanken Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    letterSpacing: "0.01em"
rounded:
  circulo: "50%"
  capsula: "999px"
  mapa: "28px"
  embed: "22px"
  logo: "14px"
  foco: "4px"
spacing:
  calha: "clamp(20px, 4vw, 48px)"
  secao: "clamp(88px, 11vw, 152px)"
  bloco: "clamp(48px, 6vw, 80px)"
  bancada: "clamp(16px, 2vw, 28px)"
  alvo-toque: "44px"
  alvo-cta: "56px"
components:
  botao-whatsapp:
    backgroundColor: "{colors.ouro}"
    textColor: "{colors.preto}"
    typography: "{typography.button}"
    rounded: "{rounded.capsula}"
    height: "{spacing.alvo-cta}"
    padding: "0 30px"
  botao-whatsapp-hover:
    backgroundColor: "{colors.luz-alta}"
  botao-whatsapp-active:
    backgroundColor: "{colors.luz}"
  botao-nav-agendar:
    textColor: "{colors.luz}"
    rounded: "{rounded.capsula}"
    height: "{spacing.alvo-toque}"
    padding: "0 22px"
  botao-nav-agendar-hover:
    backgroundColor: "{colors.ouro}"
    textColor: "{colors.preto}"
  barra-whatsapp:
    backgroundColor: "{colors.ouro}"
    textColor: "{colors.preto}"
    rounded: "{rounded.capsula}"
    height: "{spacing.alvo-cta}"
    padding: "0 26px"
  link-luz:
    textColor: "{colors.luz}"
    height: "{spacing.alvo-toque}"
  link-luz-hover:
    textColor: "{colors.luz-alta}"
  espelho:
    backgroundColor: "{colors.vidro}"
    rounded: "{rounded.circulo}"
  espelho-servico:
    backgroundColor: "{colors.vidro}"
    textColor: "{colors.ouro}"
    typography: "{typography.espelho-nome}"
    rounded: "{rounded.circulo}"
    padding: "17%"
  espelho-servico-aceso:
    textColor: "{colors.luz-alta}"
  moldura-embed:
    backgroundColor: "{colors.vidro}"
    rounded: "{rounded.embed}"
---

# Design System: Don La Vié

## Overview

**Creative North Star: "Espelho de Camarim"**

A página é o camarim do salão com a luz geral apagada. O ambiente é preto fosco, quase sem superfícies, e o que importa aparece como um espelho de bancada: um círculo ou uma cápsula de vidro escuro com um anel de LED. Apagado, o anel é um contorno bronze e a imagem fica escurecida. Aceso, o anel vira uma faixa clara com halo quente e a imagem ganha a cor real. O dourado não é tinta de parede: ele só existe onde alguma coisa está acesa ou recebendo luz.

A densidade é baixa e o ritmo é vertical, com muito preto entre os blocos. O movimento é um só: luz acendendo. Anel, halo, brilho da imagem e cor do texto mudam; o conteúdo não desliza, não cresce e não entra de lado. O único deslocamento que existe no build são os dois traços do botão de menu virando um X. Sem JavaScript tudo aparece aceso, e com `prefers-reduced-motion: reduce` todas as transições e animações são desligadas.

O sistema recusa o arranjo comum de salão: foto retangular ao lado do título e grade de cartões de serviço com ícones. Os serviços são seis espelhos que a visitante acende, e a escolha reescreve a mensagem de todos os botões de WhatsApp.

**Key Characteristics:**
- Sala preta (`preto`) como único fundo de página; nenhuma seção muda de cor de fundo.
- Moldura própria é sempre espelho: círculo ou cápsula, com anel de LED e fio de vidro.
- Três degraus de luz: bronze apagado, ouro em repouso, luz alta aceso.
- Didone dourada para o que é dito em voz alta; grotesca humanista em marfim e areia para o resto.
- Movimento só de luz, com a mesma curva de saída exponencial em tudo.
- Uma ação: agendar pelo WhatsApp, sempre em cápsula dourada cheia.

## Colors

Preto quente e uma única família dourada, lida como intensidade de luz e não como matiz de marca.

### Primary
- **Ouro de Bancada** (`ouro`, #D4AF5A): a luz em repouso. Fundo do botão de WhatsApp e da barra fixa, contorno do "Agendar" da nav, nome dos serviços com o espelho apagado, anel do espelho de serviço no hover, cor de seleção de texto.
- **Luz Quente** (`luz`, #F3D98B): a cor dos títulos em didone (h1, h2, títulos de bloco, nome da marca), do link de luz e do estado pressionado do botão. É também a cor de todos os halos, sempre em rgba(243,217,139, …).
- **Luz Alta** (`luz-alta`, #FFF1C9): o aceso. Faixa de LED ligada, nome do serviço escolhido, hover de botões e links, ênfase em itálico do h1 e o contorno de foco do teclado.
- **Bronze Apagado** (`bronze`, #5E4D2A): o LED desligado. Anel dos espelhos antes de acender, sublinhado do link em repouso e cor da barra de rolagem. Nunca é cor de texto.

### Neutral
- **Preto de Camarim** (`preto`, #0A0908): fundo da página, texto sobre dourado, fundo da nav ao rolar (a 90% com desfoque de 14px) e do menu aberto.
- **Vidro Escuro** (`vidro`, #1B1815): a superfície de todo espelho e das molduras de embed.
- **Marfim** (`marfim`, #F4ECDD): texto principal.
- **Areia** (`suave`, #B8AC96): texto secundário: lede, descrições, links da nav e do rodapé, o rótulo de estado dos espelhos.
- **Fio Dourado** (`linha`, rgba(212,175,90,.24)): todo fio de 1px: borda do vidro, divisórias de lista, linha da bancada, borda da nav rolada, bordas de embed, do logo e do rodapé.

### Named Rules
**A Regra do Dourado Só na Luz.** Dourado aparece em coisa que emite ou recebe luz: anel de LED, título, botão, fio. Nunca como fundo de seção, faixa ou painel. Se tirar o dourado de um elemento não "apaga" nada, ele não devia ser dourado.

**A Regra dos Três Degraus.** Todo estado sobe a mesma escada: `bronze` (apagado), `ouro` (em repouso ou hover do apagado), `luz-alta` (aceso ou hover do que já é dourado). Não existe quarta cor de estado, nem cor de sucesso ou de erro.

## Typography

**Display Font:** Bodoni Moda (com Didot, Bodoni MT, serif), eixo óptico 6 a 96, pesos 400 a 700 carregados, com itálico
**Body Font:** Hanken Grotesk (com system-ui, -apple-system, Segoe UI, sans-serif), pesos 400, 500 e 600

**Character:** Uma didone de alto contraste que pega luz como metal polido, contra uma grotesca humanista discreta que não disputa atenção. A serifa fala; a grotesca informa.

### Hierarchy
- **Display** (500, clamp(2.5rem, 4.3vw, 4.25rem), 1.04, -0.02em): o h1 do hero, em `luz`, com `text-wrap: balance`. A ênfase dentro dele é itálico peso 400 em `luz-alta`.
- **Headline** (500, clamp(2.1rem, 4.2vw, 3.6rem), 1.06, -0.02em): h2 de seção, em `luz`. Dentro do espelho de fecho desce para clamp(1.9rem, 4vw, 3.2rem) e no máximo 13ch.
- **Title** (500, 1.5rem, -0.01em): títulos de bloco em didone `luz`: os motivos do salão e o nome da marca na nav (1.3rem até 560px). Os títulos da faixa de contato usam 1.375rem.
- **Espelho-nome** (500, clamp(1rem, 1.45vw, 1.3rem), 1.1, -0.01em): nome do serviço dentro do espelho, em `ouro`. 1.25rem até 900px e 1.5rem na lista do celular.
- **Lede** (400, 1.1875rem, 1.6): parágrafo do hero, em `suave`, no máximo 46ch. 1.0625rem até 560px.
- **Body** (400, 1.0625rem, 1.6): texto corrente em `marfim` ou `suave`, com `text-wrap: pretty` e medida entre 34ch e 54ch. 1rem até 560px.
- **Body-sm** (400, 0.95rem, 1.6): links da nav e rodapé. Descrições de serviço usam 0.9375rem com entrelinha 1.5.
- **Button** (600, 1.0625rem, 0.01em): rótulo do botão de WhatsApp. Links e o "Agendar" da nav usam peso 500.

### Named Rules
**A Regra da Didone que Brilha.** Bodoni Moda só aparece em peso 500 e só em `luz`, `ouro` ou `luz-alta`. Nunca em marfim, nunca em areia, nunca em caixa alta. O itálico (peso 400) é reservado a uma ênfase curta dentro do h1.

**A Regra dos Números Alinhados.** Telefones usam `font-variant-numeric: tabular-nums`.

## Layout

Coluna central de no máximo 1240px com calha lateral `calha` (clamp(20px, 4vw, 48px)); a nav fixa alinha a mesma calha. Seções têm respiro vertical `secao` (clamp(88px, 11vw, 152px)) e o cabeçalho de seção, limitado a 760px, fica a `bloco` (clamp(48px, 6vw, 80px)) do conteúdo. O preto entre os blocos é o que separa; fios `linha` só aparecem dentro de listas e sob a bancada.

- **Hero:** altura mínima de 100svh, duas colunas iguais com intervalo de clamp(32px, 5vw, 80px); texto à esquerda, espelho redondo à direita com largura min(100%, 76svh, 680px). Até 900px vira uma coluna, com o espelho abaixo do texto, centrado e limitado a 520px.
- **Bancada de serviços:** seis espelhos numa linha (6 colunas, intervalo `bancada`), com um fio contínuo sob eles e as descrições abaixo do fio. Até 900px, 3 colunas com 48px entre linhas. Até 560px, cada serviço vira uma linha de lista com um espelho-lâmpada de 56px à esquerda, o nome ao lado e o estado à direita.
- **Vitrine do Instagram:** 3 colunas com 24px; 2 colunas até 900px; até 560px, uma fileira horizontal com encaixe (`scroll-snap`), cartões a 84% da largura e sangria até a borda da tela.
- **O salão:** cápsula de até 380px à esquerda e texto à direita, intervalo de clamp(40px, 7vw, 112px); empilha até 900px com a cápsula centrada em 340px.
- **Contato:** espelho de fecho centrado (até 680px), depois três colunas de informação sobre um fio e o mapa em 16/6 (16/9 até 900px, 4/3 até 560px).
- **Alvos de toque:** 44px no mínimo para links e 56px para ações de agendamento e itens do menu aberto.
- **Quebras:** 900px (menu recolhido, barra fixa de agendamento, grades reduzidas) e 560px (listas em coluna, botão de WhatsApp em largura total).

## Elevation & Depth

Não há elevação por sombra escura. A profundidade vem de luz emitida: o que está aceso projeta um halo quente sobre o preto e um brilho para dentro do vidro; o que está apagado é plano. Superfícies são duas, `preto` e `vidro`, e o vidro aceso ganha um gradiente radial com a luz vindo de cima (centro em 50% 28–30%).

### Shadow Vocabulary
- **Halo** (`box-shadow: 0 14px 70px -6px rgba(243,217,139,.34), 0 4px 18px -2px rgba(243,217,139,.3)`): luz que o anel dos espelhos grandes joga para fora.
- **Halo de dentro** (`box-shadow: inset 0 0 34px 2px rgba(243,217,139,.38)`): a mesma luz para dentro do vidro; sempre junto com o Halo.
- **Halo pequeno** (`box-shadow: 0 8px 30px -4px rgba(243,217,139,.36), 0 2px 10px -2px rgba(243,217,139,.3), inset 0 0 16px 1px rgba(243,217,139,.4)`): a versão para os espelhos de serviço.
- **Brilho do botão** (`box-shadow: 0 10px 34px -12px rgba(243,217,139,.55)`; no hover `0 14px 44px -10px rgba(243,217,139,.8)`): o botão de WhatsApp é uma fonte de luz.
- **Sombra da barra fixa** (`box-shadow: 0 14px 34px -10px rgba(0,0,0,.85)`): a única sombra escura do sistema; só separa a barra flutuante do conteúdo que passa por baixo.

### Named Rules
**A Regra do Halo.** Sombra é luz: quente, difusa e na cor `luz`. Apagado não tem sombra nenhuma. Nada de sombra dura deslocada, nada de sombra cinza para "levantar" um bloco.

**A Regra do Acender.** Mudança de estado anima só `border-color`, `box-shadow`, `filter`, `opacity`, `color` e `background-color`, sempre com `cubic-bezier(.16,1,.3,1)`: 0,9s para espelhos grandes, 0,5s para espelhos de serviço, 0,3 a 0,4s para hover. O espelho do hero acende no carregamento (1,5s, atraso de 0,2s) enquanto a foto sai de `brightness(.3) saturate(.5)`; os demais acendem uma vez ao entrar na tela e não apagam mais.

## Shapes

A forma é o espelho de bancada. Conteúdo próprio do salão fica em círculo (`circulo`) ou cápsula (`capsula`); o espelho de fecho, que é círculo no desktop, vira uma cápsula alta (raio de 220px) no celular para caber o texto. Tudo o que se clica para agendar é cápsula. O anel de LED é uma borda de 4 a 10px recuada da borda do vidro (8 a 26px), e a borda do vidro é um fio de 1px.

Há três exceções retangulares, todas de conteúdo que não pode ser recortado: os embeds do Instagram (`embed`, 22px), o mapa (`mapa`, 28px; 22px no celular) e o logo do cliente (`logo`, 14px). Elas levam fundo `vidro` e fio `linha`, sem anel de LED.

### Named Rules
**A Regra do Espelho.** Foto ou bloco de destaque do próprio salão só entra em círculo ou cápsula com anel de LED. Retângulo arredondado é reservado a iframe de terceiro e ao logo, e nunca ganha anel.

## Components

### Buttons
Cápsulas douradas cheias: o botão é uma lâmpada, não uma placa.
- **Shape:** cápsula (999px), altura mínima de 56px.
- **Primary (Agendar no WhatsApp):** fundo `ouro`, texto `preto` em peso 600, respiro de 0 30px, intervalo de 12px entre a marca do WhatsApp (SVG em linha, 20px, `currentColor`) e o rótulo, Brilho do botão. Largura total até 560px. O rótulo muda para "Agendar 1 serviço" ou "Agendar N serviços" conforme a escolha na bancada.
- **Hover / Focus:** fundo `luz-alta` e brilho mais forte em 0,35s; pressionado, fundo `luz`. Sem deslocamento nem escala. Foco de teclado: contorno de 2px em `luz-alta` com 4px de afastamento, igual em todo o sistema.
- **Ghost (Agendar da nav):** cápsula de 44px com contorno de 1px `ouro` e texto `luz` em peso 500; no hover preenche de `ouro` com texto `preto`.
- **Barra fixa:** o mesmo botão primário flutuando no rodapé da tela até 900px (à direita; de borda a borda até 560px, respeitando a área segura). Some com fade enquanto houver um botão de agendar visível na página.

### Link de luz
Ação secundária em texto: `luz`, peso 500, sublinhado de 1px em `bronze` a 7px do texto, seguido de uma seta em SVG (18px, traço 1.5). No hover, texto e sublinhado sobem para `luz-alta`. Altura mínima de 44px.

### Navigation
Barra fixa transparente sobre o hero; depois de 40px de rolagem ganha fundo `preto` a 90% com desfoque de 14px e um fio `linha` embaixo. À esquerda, logo (52px, raio 14px) e o nome em didone `luz`. Links em `suave` (0.95rem) que acendem para `luz-alta`. Até 900px os links recolhem num painel preto sólido aberto por um botão circular de 48px com dois traços que viram X; os itens passam a 56px de altura, 1.125rem, separados por fio, com o "Agendar" centrado no fim. Fecha com Escape ou ao escolher um item.

### Espelho (moldura)
O componente que define o sistema. Vidro `vidro` em círculo ou cápsula; por cima, a faixa de LED (borda de `--led`, 6 a 10px, recuada `--recuo`, 12 a 26px) e, na borda externa, um fio `linha`. Aceso: faixa `luz-alta` com Halo e Halo de dentro, imagem em cor real. Apagado: faixa `bronze`, sem sombra, imagem em `brightness(.4) saturate(.6)`. A transição leva 0,9s. Usado com foto (hero redondo, cápsula 5/8 do salão) e com texto (espelho de fecho, com vidro em gradiente radial e título, frase e botão centrados).

### Espelho de serviço
Uma caixa de seleção real vestida de espelho. Círculo de vidro com anel de 4px recuado 8px, nome do serviço em didone no centro e um rótulo de estado ("Acender" / "Aceso", que só aparece com JavaScript). Apagado: anel `bronze`, nome `ouro`. Hover: anel `ouro`. Escolhido: anel `luz-alta` com Halo pequeno, vidro aceso em fade, nome `luz-alta`. Tudo em 0,5s. O foco de teclado contorna o espelho inteiro (2px `luz-alta`, 6px de afastamento). No celular o espelho encolhe para uma lâmpada de 56px no início da linha e o nome passa a 1.5rem. A linha de pedido abaixo da bancada diz o que foi escolhido (`aria-live`) e leva um link de luz para agendar.

### Molduras de embed
Para iframes de terceiros (Instagram, Google Maps): retângulo arredondado com fundo `vidro`, fio `linha` e conteúdo cortado na borda. A vitrine do Instagram entra apagada (`brightness(.45) saturate(.6)`) e acende em 0,9s como os espelhos; cada cartão tem a proporção da mídia do post mais 54px do cabeçalho do embed. O mapa recebe um filtro de inversão para ficar escuro.

### Listas com fio
Informação em lista não usa cartão: cada item é separado por um fio `linha` no topo, com título em didone `luz` e texto em `suave` (motivos do salão, faixa de endereço, horário e contato, linha de pedido).

## Do's and Don'ts

### Do:
- **Do** manter `preto` (#0A0908) como fundo de toda a página e usar `vidro` só dentro de espelhos e molduras de embed.
- **Do** emoldurar toda foto do salão em círculo ou cápsula com anel de LED, e deixar a foto escurecida enquanto o anel estiver em `bronze`.
- **Do** seguir a escada `bronze` → `ouro` → `luz-alta` para qualquer estado novo.
- **Do** animar só luz (cor de borda, sombra, filtro, opacidade, cor) com `cubic-bezier(.16,1,.3,1)`.
- **Do** escrever títulos em Bodoni Moda peso 500 na cor `luz`, com entrelinha entre 1.04 e 1.1.
- **Do** dar a toda ação de agendamento a cápsula `ouro` cheia de 56px e a todo link 44px de altura mínima.
- **Do** garantir que sem JavaScript tudo apareça aceso e que `prefers-reduced-motion: reduce` desligue transições e animações.
- **Do** separar itens de lista com fio de 1px `linha`, sem caixa em volta.

### Don't:
- **Don't** usar dourado como fundo de seção, faixa ou painel; dourado cheio só em botão de agendar.
- **Don't** pôr conteúdo do próprio salão em cartão retangular; retângulo arredondado é só para iframe de terceiro e para o logo.
- **Don't** usar sombra escura para elevar blocos nem sombra dura deslocada; a única sombra escura é a da barra fixa.
- **Don't** fazer conteúdo deslizar, crescer ou entrar de lado; nada de `transform` em entrada de seção ou em hover.
- **Don't** escrever Bodoni Moda em marfim, areia ou caixa alta, nem usar `bronze` como cor de texto.
- **Don't** ilustrar serviços ou seções com ícones; os únicos SVGs são a marca do WhatsApp nos botões de agendar, a seta do link de luz e os traços do menu.
- **Don't** substituir foto real por ilustração ou banco de imagens dentro de um espelho.
- **Don't** criar uma segunda cor de destaque; o sistema tem uma família dourada e mais nada.
