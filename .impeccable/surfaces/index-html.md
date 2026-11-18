---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["css/style.css","js/main.js"]
---

# Surface brief: index.html (landing page)

Scope: página única do salão. Visitor mode: Persuade.

Audience and job: mulheres de Sorocaba que chegam pelo celular (Instagram ou Google) e decidem se agendam. Action: tocar em "Agendar no WhatsApp". Proof on hand: foto da fachada, foto do interior, seis posts do Instagram. No testimonials, no before/after files yet.

Constraints: site estático sem build; logo e paleta preto e dourado são obrigatórios; SEO e leitura por IA (JSON-LD, llms.txt) precisam continuar coerentes com o texto visível; nada de fatos não confirmados ("vinte anos", "16k+").

Memorable moment: os espelhos de serviço acendem ao toque e a mensagem do WhatsApp sai com os serviços escolhidos.

Unresolved: fotos de antes e depois, foto do Don Alexandre e depoimentos ainda não foram entregues; domínio final.

## Direction contract

THESIS: A página é o camarim do salão no escuro, e cada coisa que importa é um espelho com anel de luz que acende. Recusa o arranjo padrão da categoria: título em serifa à esquerda, foto retangular à direita e grade de cartões de serviço com ícones.

OWN-WORLD: Preto fosco de vidro (#0A0908) como ambiente; dourado (#D4AF5A) e luz quente (#F3D98B) só onde há luz. Toda moldura é um espelho: círculo ou cápsula com uma faixa de LED dourada e brilho suave. Apagado é contorno bronze; aceso é faixa clara com halo. Didone de alto contraste em dourado para títulos, grotesca humanista para texto. Sem cartões retangulares, sem ícones decorativos.

STORY: A visitante entende que é um salão completo no Sorocaba Shopping, acredita porque vê o salão real e os trabalhos reais do Instagram, e age acendendo os serviços que quer e enviando a mensagem.

FIRST VIEWPORT: Fundo preto. À direita (no celular, abaixo do texto), um espelho redondo de até 78vh com a foto do salão, anel de luz que acende no carregamento. À esquerda, o h1 em didone dourada com categoria e lugar, uma linha com serviços e horário, e o botão "Agendar no WhatsApp" seguido do link "Escolher serviços". Logo no canto superior esquerdo.

SIGNATURE INTERACTION: seis espelhos de serviço são caixas de seleção; tocar acende o espelho (bronze para dourado, 0,5s, ease-out exponencial) e reescreve a mensagem de todos os botões de WhatsApp. Motion grammar: só luz acendendo, nunca deslocamento.

FORM: Espelho de Camarim, posição 1 da lista da segunda rodada (escolha do usuário, cartão "pick"). Seed key 02279f84, reroll 1.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
