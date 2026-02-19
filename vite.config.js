import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/RoadToSenior/' to match your GitHub repository name
// e.g., if your repo is github.com/yourusername/my-site → base: '/my-site/'
export default defineConfig({
  plugins: [react()],
  base: '/RoadToSenior/',
})
