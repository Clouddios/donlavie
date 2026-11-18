import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

const root = document.getElementById('root')!;
const app = <StrictMode><App /></StrictMode>;
// No build a página já vem pronta em HTML (scripts/prerender.mjs); no `npm run dev` ela nasce vazia.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
