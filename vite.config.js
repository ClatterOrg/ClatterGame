import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative paths for custom domain (root) and GitHub Pages compatibility
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure Unity build files are copied correctly
    rollupOptions: {
      output: {
        // Preserve directory structure for Unity files
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.unityweb')) {
            return 'build/[name][extname]'
          }
          if (assetInfo.name && assetInfo.name.endsWith('.js') && assetInfo.name.includes('loader')) {
            return 'build/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // Increase chunk size warning limit for Unity files
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 3000,
    open: true
  }
})

