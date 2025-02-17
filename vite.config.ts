import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteHtmlTitlePlugin from "./plugins/vite-plugin-html-title";
import viteVirtualModulePlugin from "./plugins/vite-plugin-virtual-module";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteHtmlTitlePlugin({ title: "Hello Vite with title plugin" }),
    viteVirtualModulePlugin(),
  ],
});
