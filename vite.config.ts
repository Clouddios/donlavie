import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O site é publicado em https://clouddios.github.io/donlavie/ (GitHub Pages).
// Ao trocar para domínio próprio, mude base para '/'.
export default defineConfig({
  base: '/donlavie/',
  plugins: [react()],
});
