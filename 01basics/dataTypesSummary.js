//  Primitive datatypes - call by value
// 7 types :- String, Boolean, Symbol, Number, BigInt, null, Undefined

//non-primitive - reference type

//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. 
// You can assign different types of values to a variable during its lifetime

// Arrays, Objects, functions

const number = 123;
console.log("Number Type:", typeof number);

const string = "MAnasa";
console.log("String Type:", typeof string);

const bigInt = 9007199254740992n;
console.log("BigInt Type:", typeof bigInt);

const someNull = null;
console.log("Null Type:", typeof someNull);

let someUndefined;
console.log("Undefined type:", typeof someUndefined);

let isBoolen = true;
console.log("Boolean type:", typeof isBoolen);

let someId = Symbol('123');
let someOtherId = Symbol('123');
console.log(someId);
console.log(someOtherId);
console.log(someId === someOtherId);

let array = ["apple", "banana", "grapes"];
console.log(typeof array);

let object = {
    name: "Manasa",
    age: 24
}
console.log("object type", typeof object);

const someFunc = function (){
    console.log("some function");
}
console.log(typeof someFunc);

/************************************************ */

// Primitive data types stored in -> stack memeory
//non primitives in heap

//stack
let userName = "Manasa Hebbar";

let newUSer = userName;// this gets copy of userName. newUser wont be pointing to userName.

newUSer = "Ranjan K"; // this will not change value of userName. because newUser was having copy of userName not the original value.
console.log(userName);
console.log(newUSer);

//heap
let userDetails = {
    userName: "Manasa",
    email: "manasa@gmail.com"
}

let newUserDetails = userDetails; // bcz this its non primitive datatype this will get reference of original value. now if i change one other one will also change.

userDetails.email = "manasa.s@philips.com"; //this will change both userDetails and newUserDetails

console.log(newUserDetails);
console.log(userDetails);


