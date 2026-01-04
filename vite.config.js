import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Mohamed-Abbad-Portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})
