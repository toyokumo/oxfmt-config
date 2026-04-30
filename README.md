# oxfmt-config

[![npm version](https://badge.fury.io/js/%40toyokumo%2Foxfmt-config.svg)](https://badge.fury.io/js/%40toyokumo%2Foxfmt-config)

The oxfmt rule set for Toyokumo.

## Usage

```bash
pnpm add -D @toyokumo/oxfmt-config oxfmt
```

```typescript
import { config } from "@toyokumo/oxfmt-config";

export default defineConfig({
  ...config,
  ignorePatterns: ["generated", "dist"],
});
```
