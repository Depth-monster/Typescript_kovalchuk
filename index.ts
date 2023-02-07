// ts.ts
const list:number[] = [1,4,5]

const list1:Array<number> = [100,200,300,400]// Generic type

//console.log(list,list1)
///////////////////////

//Tuple type
let x:[number,string]
x=[10,'d']
console.log(x)
////////////

//Any type
{
const y:[any,any]=[2,true]
const x:Array<any>=[232,'dd',true];

}

let notsure:any;
notsure=true;
notsure=1;
notsure='notsure'
console.log(notsure," ")

///////////////////////////
//Enum type
enum pizda{
  in,
  out,
  right,
  indeep,
  innotdeep
}
console.log('\n in deep',pizda.indeep,'\n out ', pizda.out)


////////////////////////////
//Never type
const msg = 'hello'
const error = (msg:string) :never => {
  throw new Error(msg)
}

///////////////////////
//Object type

const create = (k: object | null) :number => {return 0}
//const create = (k: object | null) :void => {}

const p=create({obj:1})
console.log(p," pppppppppp")
//create('d')
create(null)


//////////////////////
let id:number | string
id=1;
//id=null;
//id=undefined;
id='ad'

/////////////////
//Type

type Azat=number | string;
let room :Azat;
room=404;

