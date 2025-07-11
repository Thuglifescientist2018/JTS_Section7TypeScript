# Junior To Senior Developer RoadMap Andrei Negoie.
#### Useful commands/lessons so far learned
`222. TypeScript 2`

1. `tsc --init` 
2. `TypeScript Compiler Watch mode:  tsc typescript.ts --watch`
3. Choosing version of target in the tsconfig file    `"target": "es2017",` 

#### Udemy version is outdated so here is the issue with having `typescript.ts` and `typescript.js` on same location.
##### Mine Discovered thing.
Issue:
In TypeScript 5.8.3, if you compile a .ts file directly (e.g., tsc typescript.ts), the output .js file is placed in the same folder. If both .ts and .js files exist together, TypeScript may report a "Duplicate function implementation" error (TS2393) because it checks both files.

Solution:
Use a tsconfig.json with `"outDir": "./dist"` and run tsc (without file arguments). This compiles all .ts files and outputs .js files to the dist folder, preventing conflicts and errors. Always run tsc alone to respect your config.
```js
{
  "compilerOptions": {
    "outDir": "./dist"
  },
  "exclude": [
    "dist",
    "*.js"
  ]
}
```

##### if gitignore doesnt ignore
`git rm -r --cached dist`