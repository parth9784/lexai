import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    allowedHosts:['ec707ceab64c.ngrok-free.app'],
    
    proxy:{
      '/api': {
        target: 'https://5f32a0a66483.ngrok-free.app/',
        changeOrigin: true,
        secure: true,
        cookieDomainRewrite:'ec707ceab64c.ngrok-free.app',
      }
    }
  }
});
