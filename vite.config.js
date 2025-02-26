import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/my-react-app/",  // Set this to your GitHub repository name
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
