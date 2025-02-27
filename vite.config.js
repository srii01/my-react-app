import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://github.com/srii01/my-react-app',  // Your GitHub repository name
  plugins: [react()]
});
