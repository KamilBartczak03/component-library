import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgVue from 'vite-svg-loader'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue(), svgVue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'component-library',
      fileName: (format) => `component-library.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        exports: 'named'
      }
    }
  }
})
