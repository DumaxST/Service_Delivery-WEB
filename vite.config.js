import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({  
  plugins: [react()],
  build: {
    outDir: 'build', 
  },
  define: {
    'process.env': {
      REACT_MICROSERVICES_API: JSON.stringify(process.env.REACT_MICROSERVICES_API),
    },
  }
})
