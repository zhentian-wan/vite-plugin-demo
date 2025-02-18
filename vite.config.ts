import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteHtmlTitlePlugin from "./plugins/vite-plugin-html-title";
import viteDynamicVirtualModulePlugin from "./plugins/vite-plugin-dynamic-virtual-modules";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteHtmlTitlePlugin({ title: "Hello Vite with title plugin" }),
    viteDynamicVirtualModulePlugin(),
  ],
  build: {
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
        manualChunks: {
           'vender': ['vue', 'vue-router'],
           'element-plus': ['element-plus'],
           'lodash-es': ['lodash-es'],
        }
      }
    }
  }
});
