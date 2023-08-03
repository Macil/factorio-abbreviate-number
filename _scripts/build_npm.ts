import { build, emptyDir } from "https://deno.land/x/dnt@0.38.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: "dev",
  },
  package: {
    // package.json properties
    name: "factorio-abbreviate-number",
    version: Deno.args[0],
    description: "Library for abbreviating numbers in the style Factorio does.",
    license: "MIT",
    sideEffects: false,
    repository: {
      type: "git",
      url: "git+https://github.com/Macil/factorio-abbreviate-number.git",
    },
    bugs: {
      url: "https://github.com/Macil/factorio-abbreviate-number/issues",
    },
  },
  async postBuild() {
    // steps to run after building and before running the tests
    await Deno.copyFile("LICENSE.txt", "npm/LICENSE");
    await Deno.copyFile("README.md", "npm/README.md");
  },
});
