
```ts
class Me {
  public name:string;//free access
  private age:number;//access only in the class
  protected nick:string;//only daughters
  readonly pass:number;//for read only
  
  constructor(name:string,age:number,nick:string,pass:number){
    this.name=name;
    this.age=age;
    this.nick=nick;
    this.pass=pass;
  }
}

const Azat = new Me('Azat',22,'agent 47',12345);
console.log(Azat.name)
console.log(Azat.number)
console.log(Azat.string)
console.log(Azat.pass)
Azat.name='Change name';
console.log(Azat.name)
Azat.pass=22;

```



<details><summary><b>Output</b></summary>

```ts
"use strict";
class Me {
    constructor(name, age, nick, pass) {
        this.name = name;
        this.age = age;
        this.nick = nick;
        this.pass = pass;
    }
}
const Azat = new Me('Azat', 22, 'agent 47', 12345);
console.log(Azat.name);
console.log(Azat.number);
console.log(Azat.string);
console.log(Azat.pass);
Azat.name = 'Change name';
console.log(Azat.name);
Azat.pass = 22;

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

**Playground Link:** [Provided](https://www.typescriptlang.org/play?#code/MYGwhgzhAECyCm0DeAoa0AOBXARiAlsNAHZgC28AXBAC4BO+xA5gNwD0bAZnfImMMHhQ0mBgDcwNPkyrEsZHPDrs2-QVGgB7YiACe0RtBoALRKEgQRGOpqnApAExKEA1tXqNWHbXugOwWEzGUnSW6DxgDj76GBaUcgpKKpyadNARTtEiIsDatHRY9qkAFKQU7gzMADRgMvHyinRVxK4VnlWxUPWJdACUqOjoJvgQAHRl8AC8EywiQ8Yjo7VTy7ODRgtjLcAu065rg8NjnRCTJwcAvihXKLnEtNAAggBektCTJPAA7nDwxQDkL0k-yqACZQVV-stiDRoAAWADsIIAjKCAMxwgCsvVmdwgmhA8FGIE0TGKQJo43I8F6tzyBKJJLJFPGDSUtLxDOJpPJr0p+U8HPphO5zL5oxOtJZE0m-wAwsYwMxEBN-rjhYyedLqVLxSdJuDZkA)
      
