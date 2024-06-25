import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://account.meracacs.com',
        // target: 'http://localhost/ca',
        changeOrigin: true,
        secure: false
      }
    },
  },
  plugins: [react()],
})