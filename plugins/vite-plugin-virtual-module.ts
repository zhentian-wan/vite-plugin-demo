import { Plugin } from "vite";

let virtualModuleId = `virtual:fib`;

const resolvedVirtualFibModuleId = `${virtualModuleId}`;
export default function viteVirtualModulePlugin(): Plugin {
  return {
    name: "vite-plugin-virtual-module",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualFibModuleId;
      }
    },
    load(id) {
      if (id === virtualModuleId) {
        return `export default function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
        }`;
      }
    },
  };
}
