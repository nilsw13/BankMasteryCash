import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  

    // Configuration du build
    build: {
      outDir: 'dist', // Dossier de sortie de la build
      assetsDir: 'assets', // Dossier des fichiers statiques
      sourcemap: true, // Activation des sourcemaps pour le débogage
    },
})
