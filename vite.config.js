import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // server: {
  //   proxy: {
  //     '/front': {
  //       target: 'https://account.meracacs.com/',
  //       // target: 'http://localhost/ca',
  //       changeOrigin: true,
  //       secure: true
  //     }
  //   },
  // },
  plugins: [react()],
})