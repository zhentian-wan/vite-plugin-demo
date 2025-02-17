import { Plugin, ResolvedConfig } from "vite";
import stringify from "json-stringify-safe";

type Module = {
  [key: `virtual:${string}`]: (config?: ResolvedConfig) => string;
};

const modules: Module = {
  "virtual:fib": () => `export default function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
        }`,
  "virtual:config": (
    config?: ResolvedConfig
  ) => `export default function getConfig() {
        return ${stringify(config)}
    }`,
};

const prefix = "virtual:";
let config: ResolvedConfig;
export default function viteDynamicVirtualModulePlugin(): Plugin {
  return {
    name: "vite-plugin-dynamic-virtual-module",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    resolveId(id) {
      if (id.startsWith(prefix)) {
        return `${id}`;
      }
    },
    load(id) {
      if (id.startsWith(prefix)) {
        // @ts-ignore
        return modules[`${id}`](config);
      }
    },
  };
}
