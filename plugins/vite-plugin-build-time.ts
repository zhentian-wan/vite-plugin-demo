import { ResolvedConfig } from "vite";
export default function viteBuildTimePlugin() {
  let config: ResolvedConfig | undefined;
  let startTime: number;
  return {
    name: "vite-plugin-build-time",
    configResolved(resolvedConfig: ResolvedConfig) {
      console.log(resolvedConfig);
      config = resolvedConfig;
    },
    buildStart() {
      if (config!.command === "build") {
        console.log("Build started");
        startTime = Date.now();
      }
    },
    closeBundle() {
      if (config && config!.command === "build") {
        console.log("Build completed in", Date.now() - startTime, "ms");
      }
    },
  };
}
