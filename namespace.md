
```ts
namespace utils{
  const SECRET:string='1234'
  const PI:number=3.1415;

export const getPass=(name:string,age:number):string => `${name}${age}`;

//const isEmpty = <T>(data: T): boolean => !data;

}

const myPass = utils.getPass('Azat',22)
console.log(myPass)
```



<details><summary><b>Output</b></summary>

```ts
"use strict";
var utils;
(function (utils) {
    const SECRET = '1234';
    const PI = 3.1415;
    utils.getPass = (name, age) => `${name}${age}`;
    //const isEmpty = <T>(data: T): boolean => !data;
})(utils || (utils = {}));
const myPass = utils.getPass('Azat', 22);
console.log(myPass);

```


</details>


<details><summary><b>Compiler Options</b></summary>

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "strictBindCallApply": true,
    "noImplicitThis": true,
    "noImplicitReturns": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "declaration": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "target": "ES2017",
    "jsx": "react",
    "module": "ESNext",
    "moduleResolution": "node"
  }
}
```


</details>

**Playground Link:** [Provided](https://www.typescriptlang.org/play?ts=4.8.4#code/HYQwtgpgzgDiDGEAEBXALgSwDZQN4Cgkl4B7YKNJAZQFEBhAJRoBUAuCgJw2AHMBeAOQBGAEwBmACwDCxMhSQAFAJKtgKMACMIHPmIB0QiUICsAbnz4IADxgkOlUuUo8IaBSChQ+AClCR2aFy8ADQgLqrqWhwAlAFBPEh8AHxIAAYAJLh+EAC+mWG5qeb4APQljvIYUDRgMGgAnolIADzMSd4AJiBoIKxIzLFIGiQkWBAgwIkpAIRdPcU5FhWUYPXunk3o2FB6Lm4eUN4CAIIAXt0CwSIi0fgVoxB6WCQ83qvrUNFAA)
      
