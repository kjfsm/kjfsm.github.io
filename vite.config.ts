import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './app'),
    },
  },
})