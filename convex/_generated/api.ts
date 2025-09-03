// Temporary shim for Convex codegen. Replace by running `npx convex dev` or `npx convex codegen`.
// This allows imports like `import { api } from "@/convex/_generated/api"` to typecheck/build.
// At runtime, ensure real generated files exist.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const api: any = {};
