// Depois do build: escreve o HTML da página dentro de dist/index.html,
// para o Google e as prévias de link lerem o conteúdo sem depender de JavaScript.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);
const file = 'dist/index.html';
const html = await readFile(file, 'utf8');
if (!html.includes('<!--app-->')) throw new Error('marcador <!--app--> não encontrado em dist/index.html');
await writeFile(file, html.replace('<!--app-->', render()));
await rm('dist-ssr', { recursive: true, force: true });
console.log('prerender: dist/index.html pronto');
