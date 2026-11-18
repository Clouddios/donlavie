// Gera as imagens leves (webp) em public/img a partir dos originais em assets/img.
// Rode `npm run images` sempre que trocar ou adicionar uma foto.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const IG = 'assets/img/instagram/';
const out = 'public/img/';
await mkdir(out, { recursive: true });

// [origem, destino, largura, recorte opcional {left, top, width, height} em fração da imagem]
const lista = [
  [IG + 'DdwTnFsFulV_1.jpg', 'hero', 1200],
  [IG + 'DdcRYRuTcuy.jpg', 'hero-antes-depois', 700],
  [IG + 'DQhoZOfCRU8.jpg', 'don-alexandre', 1000, { left: 0, top: 0.02, width: 1, height: 0.66 }],
  ['assets/img/frente-salao.jpg', 'salao-frente', 1400],
  ['assets/img/interior-salao.jpg', 'salao-interior', 850],
  [IG + 'DeCVQWLFqdn_1.jpg', 'metodo-1', 800],
  [IG + 'DeCVQWLFqdn_2.jpg', 'metodo-2', 800],
  [IG + 'DdwTnFsFulV_2.jpg', 'metodo-3', 800],
  [IG + 'DQm8UKciQqr.jpg', 'metodo-4', 800, { left: 0, top: 0.05, width: 1, height: 0.62 }],
  ...['DfDoTmlTNny', 'DdAhobRzks5', 'Dd75c-VzRwi', 'DdPrUcbz4mq', 'DdPpS-7T_Em', 'DdunCYzTDdY', 'DdPp0lsTsMi', 'DdPrKAmz5eJ']
    .map((id, i) => [IG + id + '.jpg', `trabalho-${i + 1}`, 1100]),
];

for (const [src, nome, largura, corte] of lista) {
  let img = sharp(src).rotate();
  if (corte) {
    const { width, height } = await sharp(src).metadata();
    img = img.extract({
      left: Math.round(corte.left * width), top: Math.round(corte.top * height),
      width: Math.round(corte.width * width), height: Math.round(corte.height * height),
    });
  }
  const info = await img.resize({ width: largura, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${out}${nome}.webp`);
  console.log(`${nome}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
// Imagem de compartilhamento (WhatsApp, Instagram): precisa ser jpg.
await sharp(IG + 'DdwTnFsFulV_1.jpg').resize(1200, 630, { fit: 'cover', position: 'top' }).jpeg({ quality: 82 }).toFile(out + 'share.jpg');
console.log('share.jpg 1200x630');
