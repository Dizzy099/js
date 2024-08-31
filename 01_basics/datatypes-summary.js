// primitive

// 7 : string, number, boolean, null, undefined, Symbol, bigInt

const score = 100

const myEmail = "hello@mail.com" 

const isLoggedIn = false

const outsideTemp = null  // object- type

let isEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 58627582645688886n


// Reference type 

// 3 : Array, Objects, Function

const myArray = ["shazam","iron-man", "spidey"];

let myObject = {
    name : "Awanish",
    age : 18,

}

const myFunction = function(){
    console.log("Hello World!!");
    
}

// console.log(typeof isEmail );


// Stack : Primitive ; Heap : Non Primitive

let myname = "Awanish"
let yourName = myname

myname = "hurunda"



console.log(myname)
console.log(yourName);

user  = {

    name : "gunda",
    age : 22
}

let anotherUser = user

user.name = "mithun"

console.log(user.name);
console.log(anotherUser.name);





