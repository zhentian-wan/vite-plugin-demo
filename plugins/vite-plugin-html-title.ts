import { Plugin } from "vite";

export default function viteHtmlTitlePlugin({ title = "" }): Plugin {
  return {
    name: "vite-plugin-html-title",
    enforce: "pre", // apply before Vite plugins
    apply: "serve", // only apply this plugin in development mode
    transformIndexHtml(html) {
      return html.replace(/<title>(.*?)<\/title>/, `<title>${title}</title>`);
    },
  };
}
