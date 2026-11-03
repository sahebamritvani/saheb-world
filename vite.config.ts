import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Saheb World',
        short_name: 'SahebWorld',
        theme_color: '#701A07',
        background_color: '#FDFBF7',
        display: 'standalone',
        start_url: '/',
        scope: '/'
      }
    })
  ]
});
