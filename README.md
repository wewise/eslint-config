# @wewise/eslint-config

Shared ESLint configurations used across wewise projects.

This package exposes a few named configuration files for different environments:

- `base.config.mjs` – base rules
- `react.config.mjs` – React-focused rules
- `react-internal.config.mjs` – internal React rules (private conventions)
- `next.config.mjs` – Next.js specific rules

Usage

Install:

```bash
npm install --save-dev @wewise/eslint-config
```

Then extend the config from your project `.eslintrc.cjs` or `.eslintrc.json`.

Example (ESLint JSON):

```json
{
  "extends": "@wewise/eslint-config"
}
```

Or explicitly load the React config:

```json
{
  "extends": "@wewise/eslint-config/react.config.mjs"
}
```

Publishing

To publish to npm (public):

```bash
cd eslint-config
npm publish --access public
```

To publish to GitHub Packages, configure `.npmrc` in CI or locally:

```
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@wewise:registry=https://npm.pkg.github.com
```

Local validation

```bash
cd eslint-config
npm pack
```

This creates a tarball you can install in another project to validate consumption.
