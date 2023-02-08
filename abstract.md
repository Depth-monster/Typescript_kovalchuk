
```ts

/////abstract classes. They used only for creatinh daughter classes

abstract class List {

  constructor(public name: string, public age: number) {

  }

  greet(): void {
    console.log(this.name)
  }

  abstract getPass(): string
}

class Azat extends List {
  name: string = 'Azat'

  constructor(name: string, age: number) {
    super(name, age)
  }

  getPass(): string {
    return `${this.age}${this.name}`
  }
}
const azat= new Azat('aa',23);
azat.greet()
```



<details><summary><b>Output</b></summary>

```ts
"use strict";
/////abstract classes. They used only for creatinh daughter classes
class List {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(this.name);
    }
}
class Azat extends List {
    constructor(name, age) {
        super(name, age);
        this.name = 'Azat';
    }
    getPass() {
        return `${this.age}${this.name}`;
    }
}
const azat = new Azat('aa', 23);
azat.greet();

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

**Playground Link:** [Provided](https://www.typescriptlang.org/play?#code/FAejYQwIwZwFwE4QMZwATIDYRjApjAHRoAqAFngJ5oCu+AJmgPYB2m1AZkwhgnhHACWLMmnoQaAczJw8PLDnwxgwaPCSoM2XGgAyg+GgDeKtBlbqaqbgAoADjSiZByNCwgBbPAC4064ZIANGgOTi5oEJI+bjQeUHIAlMamaAC+KZJ8eHA2Cb4AbkyCjCZmZsgWTJh4hJhMkjZwZAaE7l4JwGbpnRGwiCjoUXAACoq5vv4sksDdCjoAggBeAmh4AB6yLPQwegbopW6e0ZOSaAC8aADkSwKXKRUsltYINm3HiAHBkdEssfEISQOZhgNDscleRy+UQ6XQy2VGuHGfg+U2SZTQfDgNAQLDQAAMACRGJotb6pIkkohvVJ4nrpdIPQwQZZwC4sPAAdzQNxylwgEEugQATABmBIAblULMImTw2VyQA)
      
