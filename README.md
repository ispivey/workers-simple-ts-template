# workers-simple-ts-template

This is a template containing a minimal valid configuration required to start
writing a Worker with TypeScript. It is meant to be installed with `wrangler
generate`; don't clone or fork this repository unless you want to make a new
template.

To get started:
```
wrangler generate https://github.com/ispivey/workers-simple-ts-template
```

## How it works
`wrangler` invokes `webpack` because `wrangler.toml` specifies:
```toml
type = "webpack"
webpack_config= "webpack.config.js"
```

`webpack` uses the `ts-loader` plugin to load, type-check and transpile
TypeScript files. This is configured in `webpack.config.js`.

`ts-loader` will, by default, use the TypeScript compiler options specified in
`tsconfig.json`.

Because `tsconfig.json` is a well-known default for TypeScript, your IDE will
use the same TypeScript configuration as your build step.

The project loads the `@cloudflare/workers-types` TypeScript type definitions.

The JavaScript output file is written to `./worker`, and then `wrangler` uploads
it to the Workers API.

## Notes
* The project does not depend on `webpack` or `webpack-cli`, instead assuming
  you build with `wrangler build` or other `wrangler` commands, which use
  `wranglerjs` to invoke its bundled copy of `webpack`.
* The `webpack.config.js` is designed to build and deploy JavaScript that is
  human-readable. If you want smaller files or other optimizations, you should
  edit it accordingly.
