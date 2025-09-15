import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'stats.html',    // file will be created in project root
      template: 'treemap',       // or 'sunburst' if you like
      gzipSize: true,
      brotliSize: true,
      open: true                 // auto-open after build
    })
  ],
  server: {
    port: 3000
  },
  build: {
    sourcemap: true              // makes it easier to debug bundle size
  }
})
