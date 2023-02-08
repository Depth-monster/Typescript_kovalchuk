# Typescript_kovalchuk

```ts
//Generics - обобщения


//const getter = (data: any):any => data;



function getter<T>(data: T): T {
  return data;
}
console.log((getter<number>(10).toString().length))




type dd<T extends string | number | null> = T;
const azat: dd<string | number | null>[] = [];



azat.push(4, 's', null, 6, 6, 6, 6)
console.log(azat)

////////////////////////////////////////////////
function foo<T>(data: T): T {
  return data
}
const out = foo<string>('Siiiiiiiiiii')
console.log(out)
//namer: T;
//sum1: (x: T, y: T) => T;

/////////////////////////////////////////////
class cl<T>{

  constructor(public namer: T, public sum1: (x: T, y: T) => T) { }

}

let mine = new cl<number>(2, function (x, y) { return x + y });
mine.namer = 3111111111111111;
mine.sum1 = function (x, y) { return x + y }



const res = mine.sum1(10, 23)
console.log(mine.namer)
console.log(res)

```



<details><summary><b>Output</b></summary>

```ts
"use strict";
//Generics - обобщения
//const getter = (data: any):any => data;
function getter(data) {
    return data;
}
console.log((getter(10).toString().length));
const azat = [];
azat.push(4, 's', null, 6, 6, 6, 6);
console.log(azat);
////////////////////////////////////////////////
function foo(data) {
    return data;
}
const out = foo('Siiiiiiiiiii');
console.log(out);
//namer: T;
//sum1: (x: T, y: T) => T;
/////////////////////////////////////////////
class cl {
    constructor(namer, sum1) {
        this.namer = namer;
        this.sum1 = sum1;
    }
}
let mine = new cl(2, function (x, y) { return x + y; });
mine.namer = 3111111111111111;
mine.sum1 = function (x, y) { return x + y; };
const res = mine.sum1(10, 23);
console.log(mine.namer);
console.log(res);

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

**Playground Link:** [Provided](https://www.typescriptlang.org/play?ts=4.9.5#code/PTDiFMDtwJwSwMYGcAEBaFg+EEIwgPCSIIKwggvCCAcIIPIgAUFSAgPaRIAuKA5uI47CgLwoAUAEwCGjIQC4UQyAE8AlGKnSeAPhTDRAbipUAZgFdICRnHqt2nGAB4AKssEjxKa-KcoA3hRQoY7PTEhqDloAvhR0DLQANuAAdJG0LHx8bBywlpB6ALYARrB2AIwADLIxjLQAyozwkIkl0TWMABaystpUjNIADuBqAjYo4AAenJACqEzVLCgAPigZOVyzGZGRqrzWWuFMkgBeIhICfRNwNTNzWbkwZ8urANoAujwoD1raQnuMMZ16SI18ACwAGhQAHIkCDgTdgQA2GFwlDQ1pbKKxeKJd4iVoUEA43F4-EEwlE3EUfSGYymHS0Wg2OzqRzOCTWdyeby+fyBUQUUJbZi0PTMXhUmnHGp2EHlOBS6UyuAgpH0JAouIJPj8xitECQISZWBMrQgJBZfISPiDJnA6RM2QqJyvYkOx2OsKRIRIVAISK0jys3kwPRGWgwPjfbKRRBzHV6pzA0PhhAoI2ZE38c0xlBWpw27iqZzuFChblUaLMTInHq8aAAdxQnvSFzyfAATMCyUYTAEzZabW42Yw-AFBigANQZguyLRl6AxbW6q68ADM+WXK9Xa8n5ZiSfyTzbFM7g27+Z8-Y5Q9HSkLVF5bNQvCnsW3fCKwKbC4VEWiKsSD5nUZgH5Kl+aJ8D4SCtEAA)
      

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
      

# NEEEEEEEEEEEEEEEEEEXXXXXXXXXXXXXXXXTTTTTTTTTTTTT

```ts
class Last {

  constructor(
    public name: string,
    private age: number,
  ) {
this.name=name;
this.age=age;
  }
  change(l:number){
    return this.age=l
  }
  set changeAge(k:number){
    this.age=k;
  }

}

const azat = new Last('Azat',22)
console.log(azat)
azat.change(12)
console.log(azat)
```



<details><summary><b>Output</b></summary>

```ts
"use strict";
class Last {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    change(l) {
        return this.age = l;
    }
    set changeAge(k) {
        this.age = k;
    }
}
const azat = new Last('Azat', 22);
console.log(azat);
azat.change(12);
console.log(azat);

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

**Playground Link:** [Provided](https://www.typescriptlang.org/play?#code/MYGwhgzhAEAykBdoG8BQrrWAewHYQQCcBXYBbQgCg02gAdiAjEAS2GlzAFsBTALmgFCLXAHMANDUx1hANzAIe0MKP4diXRj0KTMAShSoEACxYQAdJ14BeKzwDcR0xZU9rrx5gC+NYMbBiPJQgfLgaWoR6aLTQhDwIxIS40CZm5q7WIDQ+mBDxWP6BAIKqlADWoeHaUVIpzumq1mWe0D6obTj4SGAAXgrQ1hw8AO5wiJQA5EV9CBPiAEzzeqidENggPOYg2KKUvQrL+wjmfgGlAIxLK3hrG1s7ezN6QA)

# NEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEXXXXXXXXXXXXXXXXXXXXXXTTTTTTTTTTTTTTTTTTTTTTTT

```ts
class List {

  static trunk = 1;

  constructor(public name: string, private age: number) {
    this.name=name;
    this.age=age;
  }
 
  setAge(k:number){
    this.age=k;
  }
   getPass() {
    return `${List.name} ' ' ${List.trunk} ' ' ${this.age}`
  }
}

const azat = new List('Azat', 21)

console.log(azat.getPass())

```



<details><summary><b>Output</b></summary>

```ts
"use strict";
class List {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    setAge(k) {
        this.age = k;
    }
    getPass() {
        return `${List.name} ' ' ${List.trunk} ' ' ${this.age}`;
    }
}
List.trunk = 1;
const azat = new List('Azat', 21);
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

**Playground Link:** [Provided](https://www.typescriptlang.org/play?#code/MYGwhgzhAEAyCWEAu0DeAod1rLE+w0SATgK4B2A1tALzQCMA3JtsAPbnJnBJvEAUAB1IAjEAWjkwAWwCmALhwl45AOYAaaIOLwAbnlnQwqhZNLSRs4gEo0WbEQAWiAHRS5Nd7OYOnr47I0AT7QAL5Y9hCySACCJvyU8uTmljYYvkjOEC4BNJQh4Q4mSAAKkBD8tukOxNGkxOTQAAYAJKgIyG4ysqHQAOT90G0dSC4kFJS9AwNtmf4moU324eHo7JwoYABeeLSSsgDucIhI-H0xO0h9mgBM9NaY6xBsILIuIGyq-Nt4LsVlUEqDyAA)
      
# Interfaces
# Interfaces
# Interfaces
```ts
//структурное прототипирование
//утиная типизация


//над объектная сущность, помогает описать форму объекта
interface User {
  readonly name: string,//can't be changed
  age?: number
}

const azat: User = {
  name: 'azat',
}
console.log(azat.name,azat.age)
azat.age=22;
console.log(azat.name,' ',azat.age)
azat.name='a' //can't be changed


```



<details><summary><b>Output</b></summary>

```ts
"use strict";
//структурное прототипирование
//утиная типизация
const azat = {
    name: 'azat',
};
console.log(azat.name, azat.age);
azat.age = 22;
console.log(azat.name, ' ', azat.age);
azat.name = 'a'; //can't be changed

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

**Playground Link:** [Provided](https://www.typescriptlang.org/play?ts=4.9.5#code/PTSCIIhEEARBGEQQuEHalC8IIPhBCsIAAkPwgkXj4BwgWBugTCCAMIEgWgFAjTgFLmDyIBo8YOwg5gYiAEs1BIZoBYQDCkCMIICkQNPGZtQ0QJIgqCIBkQADTYUgHhAUgZhByacOOKhy4NRkAiICkg7o46bPDkaASwB2AFwCmAJwAzAEMAY18MAFUAZwCMAG8aDAx-X2CAEwB7TwAbAE8MT2CAW18ALgxo738vAHMNEFDgzwBybwwAIwjQgAtm2t90pIxggYB+Cs8AV2Ku-xoAX0FQ7KqRgC9g7wqYuIBeBOGi0oqW4M3vFo1FmhXPaMyc3wA6HMzagApzrefj3w1vt5nqNfABKGiA4EDPYAJhhAG5bqtHi83p9IX8NC0MFdISDwRiSr49mdsY1mm1Ot0+p4BkMaEA)
      
