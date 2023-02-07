//Objects
{/*
let user={
  name:'Azat',
  age:21
}
*/}


let user:{name:string,age:number,nick?:string} = {
  name:'Azat',
  age:22,
}
console.log(user.age)
user.age=11
console.log(user.age)
user.nick='Azat_hajy'
console.log(user.nick)

//////////////////////////////

//some other functionality:
type Person = { name: string, age: number, nick?: string, getPass?: () => string }

let user: Person = {
  name: 'Pizdyuk',
  age: 18,
  nick: '007'
}

let admin: Person = {
  name: 'Azat',
  age: 22,

  getPass(): string {
    return `${this.name}+' '${this.age}`
  }
  

}
console.log(admin.getPass());
///"Azat+' '22" 

//////////////////////////////



