import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Імпорт плагіна

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Додавання плагіна
  ],
})