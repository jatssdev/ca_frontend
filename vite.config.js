import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://account.meracacs.com', // Ensure this is correct
        changeOrigin: true,
        secure: false, // Set to false if the target server is using HTTP
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite the path if necessary
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log('Request URL:', req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('Response Status:', proxyRes.statusCode);
          });
        },
      },
    },
  },
  plugins: [react()],
});
