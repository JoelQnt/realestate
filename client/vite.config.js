import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://realestate-tru1.onrender.com/",
        secure: false,
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
