import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // Если твой сайт на GitHub Pages открывается по адресу username.github.io/space_lesson/
  // то base должен быть именно таким:
  base: '/space_lesson/', 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
