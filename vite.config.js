import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/my-new-app/",
  // Merge conflict starts here
<<<<<<< HEAD
  server: {
    port: 3000
  }
=======
  server: {
    port: 5173
  }
>>>>>>> commit-hash
});
