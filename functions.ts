const createPassword = (name: string, age: number | string) => `${name}${age}`;
console.log('Function call: ', createPassword('Azat ', 22))



//default arguments:
const createPassword2 = (name: string = 'James Bond', age: number | string = ' 007') => `${name}${age}`;
console.log('Default arguments: ', createPassword2())

console.log('Only one argument, still default inputs', createPassword2('nothing'))

//optional with '?'
const createPassword3 = (name?: string, age?: number | string) => `${name !== undefined ? name : ''}${age !== undefined ? age : ''}`;
console.log('optional with `?`',createPassword3())


//
