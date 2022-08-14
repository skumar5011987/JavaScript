// Primitive datatypes and Objects
// There are 7 primitive datatype
// 1: N-> null
// 2: N-> Number
// 3: S-> String
// 4: S-> Symbol
// 5: B-> Boolian
// 6: B-> BigInt
// 7: U->Undefined

let A = null;
let N = 1000;
let b = true;
let s="Sailesh";
let sy = Symbol("I am an symbol");
let bi = BigInt("86253871")+ BigInt('4');
let ud = undefined;
console.log(A,N,b,s,sy,bi,ud);

// Objects
// Objects are non-primitive datatype

const obj ={
    "Name":"Silesh kumar",
    "Email":'sailesh.18738@knit.ac.in',
    "age":28,
    "Role":undefined,
    "Bio":"Motivated",
}
console.log(obj);
console.log(obj["Name"]);
console.log(obj["Email"]);
console.log(obj["age"]);
console.log(obj["Role"]);
console.log(obj["Bio"]);