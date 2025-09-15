import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/',  

  plugins: [
    react(),
    visualizer({
      filename: 'stats.html',   // file will be created in project root
      template: 'treemap',      // or 'sunburst'
      gzipSize: true,
      brotliSize: true,
      open: false               // set to true if you want auto-open locally
    })
  ],

  server: {
    port: 3000
  },

  build: {
    sourcemap: true             // helpful for debugging
  }
})
