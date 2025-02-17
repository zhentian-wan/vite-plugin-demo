import { Plugin } from "vite";
export default function testPlugin(): Plugin {
  return {
    name: "vite-plugin-test",
    // Vite provided hook, read initial config
    config(config, configEnv) {
      console.log("~ config:");
    },
    // Vite provided hook, read resolved config
    configResolved(config) {
      console.log("~ configResolved:");
    },
    // General hook
    options(opts) {
      console.log("~ options");
    },
    // Vite provided hook, for dev server
    configureServer(server) {
      console.log("~ configureServer");
    },
    // General hook
    buildStart(options) {
      console.log("~ buildStart");
    },
    buildEnd() {
      console.log("~ buildEnd");
    },
  };
}
