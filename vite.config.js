import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      icons: resolve(__dirname, "src/assets/icons"),
    },
  },
  extensions: [".js", ".jsx"],
  build: {
    rollupOptions: {
      output: {
        // 最小化拆分包
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 通过拆分包的方式将所有来自node_modules的模块打包到单独的chunk中
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
        // 设置chunk的文件名格式
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split("/")
            : [];
          const fileName1 =
            facadeModuleId[facadeModuleId.length - 2] || "[name]";
          // 根据chunk的facadeModuleId（入口模块的相对路径）生成chunk的文件名
          return `js/${fileName1}/[name].[hash].js`;
        },
        // 设置入口文件的文件名格式
        entryFileNames: "js/[name].[hash].js",
        // 设置静态资源文件的文件名格式
        assetFileNames: "[ext]/[name].[hash:4].[ext]",
      },
    },
  },
});

