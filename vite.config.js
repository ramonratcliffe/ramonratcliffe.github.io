import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'dist/index.html', dest: '' }, // Copy index.html to 404.html
        { src: 'dist/index.html', rename: '404.html', dest: '' },
      ],
    }),
  ],
  base: "/",
});
