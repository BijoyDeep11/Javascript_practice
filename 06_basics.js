// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 5678696969n

// Refernce type (Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "nagraaj", "doga"]
let myObj = {
  name: "hitesh",
  age: 22,
}

const myFunction =function (){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
