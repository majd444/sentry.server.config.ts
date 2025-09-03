// Temporary shim for Convex codegen. Replace by running `npx convex dev` or `npx convex codegen`.

export type Id<TableName extends string> = string & { __table?: TableName }
