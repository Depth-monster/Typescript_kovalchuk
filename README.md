# Typescript_kovalchuk
![image](https://user-images.githubusercontent.com/122405130/217327507-97b654a1-9eff-48e7-a7b1-24e99c8373f9.png)


```ts
class Me {
  name:string;
  age:number;
  nick:string;

  constructor(name:string,age:number,nick:string){
    this.name=name;
    this.age=age;
    this.nick=nick
  }
}

const Azat = new Me('Azat',22,'pezda');
console.log(Azat)
```



<details><summary><b>Output</b></summary>

```ts
"use strict";
class Me {
    constructor(name, age, nick) {
        this.name = name;
        this.age = age;
        this.nick = nick;
    }
}
const Azat = new Me('Azat', 22, 'agent_47');
console.log(Azat);

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

**Playground Link:** [Provided](https://www.typescriptlang.org/play?#code/MYGwhgzhAECyCm0DeAoa0B2YC28BcEALgE4CWGA5gNxrRgX4YCu2ARvMTehqcANYES5ailrAA9hiLEmwQuOIAKLLkFlKAGnqMW7Yhp781wgJSp06QgAtSEAHQr4AXkdcL123e1PtbyzftDPhdePloAXxRIlAkpQmgAQQAvMHinTHgAdzh4RQByZNS8jQAmEo08gAd4JIATMDyTGliIcRB4OxBxCkVCwhMgA)
      
