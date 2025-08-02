import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    allowedHosts:['5da4b67ba8af.ngrok-free.app'],
    
    proxy:{
      '/api': {
        target: 'https://23db8bb9b778.ngrok-free.app/',
        changeOrigin: true,
        secure: true,
        cookieDomainRewrite:'aed4650cd6e9.ngrok-free.app',
      }
    }
  }
});
