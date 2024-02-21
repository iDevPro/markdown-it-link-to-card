// import path from "path";
import path from "path";
import { fileURLToPath } from 'url';

import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MODULE_FORMATES = ["cjs", "esm"];
const name = "@luckrya/markdown-it-link-to-card";
const version = "1.0.0"

const PKG_SUB_SCOPE_NAME = name.match(/(@\w+\/)(\w+)/)
  ? name.match(/(@\w+\/)(\w+)/)[2]
  : "";

const banner = `/*!
  * ${name} v${version}
  * (c) 2022 - ${new Date().getFullYear()} luckrya
  * Released under the MIT License.
  */
  `;

/**
 * @desc Rollup 配置
 * @type {(commandLineArgs: {_: string[];[k: string]: string | number | boolean }) => import('rollup').RollupOptions}
 */
export default (commandLineArgs) => ({
  input: path.resolve(__dirname, "src/index.ts"),

  plugins: [
    nodeResolve({ extensions: [".ts", ".js", ".json"] }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      extensions: [".ts", ".js"],
      include: ["src/**/*"],
      exclude: ["node_modules"],
    }),
  ],

  output: MODULE_FORMATES.map((format) => ({
    file: path.resolve(
      __dirname,
      `dist/${PKG_SUB_SCOPE_NAME}.${format}.min.js`
    ),
    name: PKG_SUB_SCOPE_NAME.toLocaleUpperCase(),
    plugins: [
      // terser({
      //   module: true,
      //   format: {
      //     comments: "some",
      //   },
      // }),
    ],
    format,
    banner,
    inlineDynamicImports: true,
  })),
});