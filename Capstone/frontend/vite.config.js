import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // sends any /api request to my Express server so I don't need CORS
    proxy: {
      '/api': 'http://localhost:8081',
    },
  },
})
