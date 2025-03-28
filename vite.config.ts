import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path" // Agregar esta línea

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/client/components"),
        "@hooks": path.resolve(__dirname, "./src/client/hooks"),
        "@interface": path.resolve(__dirname, "./src/client/interface"),
        "@services": path.resolve(__dirname, "./src/client/services"),
        "@layouts": path.resolve(__dirname, "./src/client/layouts"),
        "@routes": path.resolve(__dirname, "./src/client/routes"),
        "@pages": path.resolve(__dirname, "./src/client/pages"),
      }
    },
    server: {
      host: true,
      proxy: {
        "/api": {
          target: `http://localhost:${process.env.VITE_SERVER_PORT}`,
          changeOrigin: true,
          secure: false,
          ws: true
        }
      },
      //enable hot reload on windows
      watch: {
        usePolling: true
      }
    }
  });
};
