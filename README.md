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
      
# NEEEEEEEEEEEEEEEEEEXXXXXXXXXXXXXXXXTTTTTTTTTTTTT

```ts
class Me {
   name:string;//free access
   age:number=22;//access only in the class
   nick:string='azat_hajy';//only daughters
   pass:number=123;//for read only
  
  constructor(name:string){
    this.name=name;
  }
  getPass():string{
return `${this.name}' '${this.age}' '${this.nick}`

  }
  
}

const azat = new Me('Azat');

console.log(azat.getPass())

```



<details><summary><b>Output</b></summary>

```ts
"use strict";
class Me {
    constructor(name) {
        this.age = 22; //access only in the class
        this.nick = 'azat_hajy'; //only daughters
        this.pass = 123; //for read only
        this.name = name;
    }
    getPass() {
        return `${this.name}' '${this.age}' '${this.nick}`;
    }
}
const azat = new Me('Azat');
console.log(azat.getPass());

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

**Playground Link:** [Provided](https://www.typescriptlang.org/play?#code/MYGwhgzhAECyCm0DeAoa6B2YC28BcEALgE4CWGA5gNwD0NAZsfImMMPFGumBfhgK7YARvGIBeAEwTaNVuyjQA9hhABPaOWiEAFolCQIXaBlLAA1gRLkKYgORgAXmEIB9bWABWq2zOVroACZg-BTahKKG6NAADgZ4AsKiYgCMEgDMMvSKxNBMYAFKKqpcXMDKRMT8wITZABRYuJZklACUqFFa2qQQAHQN8GL9VFwAvly8hAAKBrUtTdaoTIT8xBjQAAYAJEg63X048CO20Lbbu708h8enO129JuYj6yijJWMoZRhE0I7O0GLGeAAdzg8FqtgAgk5CLYWsMPuVFCB4D0QIoKLVfoQehNplBZi0UEA)
      
# NEEEEEEEEEEEEEEEEEEXXXXXXXXXXXXXXXXTTTTTTTTTTTTT

```ts
class Me {


  constructor(
   public name: string,//showing modificatiors is important
   public age: number,
   public nick: string,
   public pass: number
  ) { }


} 

```



<details><summary><b>Output</b></summary>

```ts
"use strict";
class Me {
    constructor(name, //showing modificatiors is important
    age, nick, pass) {
        this.name = name;
        this.age = age;
        this.nick = nick;
        this.pass = pass;
    }
}

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

**Playground Link:** [Provided](https://www.typescriptlang.org/play?#code/MYGwhgzhAECyCm0DeAoN1rAPYDsIBcAnAV2Hy0IAoUNoAHYgIxAEthocwBbeALmgKEWOAOYAaAPQSIACywB3YSOhcsAExYAzNmHwsKMFoa50K+MDnw0MDZm2hgRfDsS6N4hMdfpNW7HGwA1vyCSl60tn70kBD8OK7uhNYAlMjQAL5oKOnQKEA)
      

