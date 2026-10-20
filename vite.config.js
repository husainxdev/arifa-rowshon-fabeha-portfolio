import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'serve-source-html-in-development',
      configureServer(server) {
        server.middlewares.use((request, _response, next) => {
          if (request.url === '/' || request.url?.startsWith('/?')) request.url = '/index.dev.html'
          next()
        })
      },
    },
    react(),
    tailwindcss(),
  ],
  build: { rollupOptions: { input: resolve('index.dev.html') } },
})
