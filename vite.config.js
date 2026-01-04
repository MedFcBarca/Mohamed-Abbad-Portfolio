import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production'
    ? '/Mohamed-Abbad-Portfolio/'
    : '/',
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
}))
