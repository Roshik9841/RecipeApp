import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:"/RecipeApp/",
  server: {
    open: true, // This will open the browser on npm run dev
  },
}) 