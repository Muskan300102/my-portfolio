import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
const base = process.env.GITHUB_PAGES === "true" ? "/my-portfolio/" : "/"

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})
