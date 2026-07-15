# Don La Vié — Landing Page

Site institucional do salão Don La Vié (Sorocaba Shopping, Sorocaba/SP).

## Estrutura

```
DonLaVie/
├── index.html          página única do site
├── css/
│   └── style.css       todos os estilos
├── js/
│   └── main.js         menu mobile, header ao rolar, animações de entrada
└── assets/
    └── img/
        ├── logo.jpg           logo (nav, rodapé, favicon, apple-touch-icon)
        └── frente-salao.jpg   foto da fachada (seção hero, imagem de preview ao compartilhar)
```

Site 100% estático — sem dependências, sem build, sem Node.js. Abre direto no navegador ou em qualquer hospedagem de arquivos estáticos.

## Rodando localmente

Como o navegador bloqueia alguns recursos ao abrir o `index.html` direto com `file://`, sirva a pasta com um servidor local simples:

```bash
python3 -m http.server 8000
# ou
npx serve .
```

Depois acesse `http://localhost:8000`.

## Responsividade

- **Desktop (>900px):** menu horizontal, hero em duas colunas, grade de serviços em 3 colunas.
- **Tablet (≤900px):** hero empilha em uma coluna, menu vira um botão hambúrguer com painel dropdown.
- **Celular (≤560px):** grades em 1–2 colunas, espaçamentos reduzidos, botão do WhatsApp flutuante respeita a área segura (notch/home indicator) via `env(safe-area-inset-bottom)`.

Teste manualmente redimensionando a janela do navegador ou usando o modo de dispositivo móvel (DevTools → Toggle device toolbar).

## Editando conteúdo

- **Textos e seções:** direto no `index.html`.
- **Cores e estilos:** variáveis no topo do `css/style.css` (`:root { --ink, --champagne, ... }`).
- **Fotos do portfólio (antes/depois):** hoje são ilustrações SVG geradas em CSS. Para trocar por fotos reais, adicione os arquivos em `assets/img/` e substitua o `<svg>` de cada `.tile` por uma tag `<img>`.
- **Vitrine do Instagram (seção `#instagram`):** usa o embed oficial e gratuito do Instagram (`instagram-media` + `embed.js`), sem API, sem token, sem custo. Não atualiza sozinha — para trocar um post, edite o `data-instgrm-permalink` (e o `href` do link de fallback logo abaixo) do card correspondente em `index.html` com o link do novo post.
  - **Importante:** use sempre o formato curto `instagram.com/p/CÓDIGO/` (posts) ou `instagram.com/reel/CÓDIGO/` (reels) — **sem** o nome de usuário no meio do link. O formato `instagram.com/usuario/p/CÓDIGO/` que aparece ao copiar o link de dentro do perfil de alguém não é reconhecido de forma confiável pelo embed do Instagram e o post não carrega. Se o link que você copiou tiver o usuário no meio, é só apagar essa parte.
  - Se mesmo assim algum post não carregar (visualmente aparece só um link "Ver post/reel no Instagram"), é uma limitação do próprio widget gratuito do Instagram com múltiplos embeds na mesma página — o link de fallback garante que o visitante ainda consegue acessar o post.
- **WhatsApp:** o número aparece em vários links (`wa.me/5515988245917`) — troque em todos os lugares se mudar.
- **Mapa (seção `#contato`):** embed gratuito do Google Maps (sem chave de API), busca pelo endereço em texto. Se o endereço mudar, edite a URL do `<iframe>` (parâmetro `q=`) em `index.html`.
- **Telefones:** já são clicáveis (`tel:`) — no celular, tocar neles abre o discador direto.

## Deploy

Por ser um site estático, pode ser publicado em qualquer serviço de hospedagem de arquivos, por exemplo:

- **Netlify / Vercel:** arraste a pasta do projeto ou conecte um repositório Git — nenhum comando de build é necessário (deixe o campo de build vazio).
- **GitHub Pages:** Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `(root)` → Save. Fica disponível em `https://<usuário>.github.io/<repositório>/` depois de ~1 minuto. Bom para mostrar o link para o cliente antes de ter um domínio próprio — não é pensado como endereço final (é preciso repositório público no plano gratuito).

Nenhuma variável de ambiente ou configuração de servidor é necessária.

### ⚠️ Pendência ao trocar de domínio

O `index.html` tem 3 ocorrências da URL de preview/SEO (tags `og:image`, `og:url` e no JSON-LD) — hoje apontando para `https://clouddios.github.io/donlavie` (GitHub Pages). Quando o site for para o domínio definitivo, busque e substitua essa URL — sem isso, o preview do link ao compartilhar no WhatsApp/Instagram não mostra a foto corretamente, e o Google não consegue confirmar a imagem do negócio.

```bash
# exemplo, trocando pelo domínio real:
sed -i 's#https://clouddios.github.io/donlavie#https://www.donlavie.com.br#g' index.html
```

## SEO e compartilhamento

- **Preview ao compartilhar (Open Graph):** já configurado com título, descrição e a foto da fachada — o link mandado pelo WhatsApp/Instagram/Facebook aparece com um card visual em vez de só texto.
- **Dados estruturados (JSON-LD):** informa ao Google que é um salão de beleza, com endereço, telefone e horário de funcionamento — ajuda a aparecer com informações ricas na busca. Se o horário ou endereço mudar, atualize tanto o bloco `<script type="application/ld+json">` no `<head>` quanto o texto visível na seção de contato.

## Acessibilidade

- Link "Pular para o conteúdo" aparece ao navegar por teclado (Tab a partir do topo da página), para pular o menu.
- Foco de teclado tem contorno dourado visível em links e botões.
- Conteúdo principal está dentro de `<main id="main">`, seções usam títulos hierárquicos (`h1` → `h2` → `h3`).
