import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Esta é a linha mais importante!
  // Define o caminho base para o deploy no GitHub Pages.
  base: '/meu-chatgpt-clone/', 
})