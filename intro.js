console.log('Welcome to the Javascript World!')
// this is the introduction to javascript

// variables in javascript 
// declaration of variable in javascript
// var keyword followed by name of the variable 
// we can write the ; (semicolon) to terminate or we can leave it
var myVar = 10;
var myVar2 = 20;

console.log(myVar + myVar2 + 30);

// type of oprator in javascript : used to output the type of the variables 
console.log(typeof myVar2 , typeof "this line in js");

// let keyword is also used to declare a variable but let keyword is block scope whereas the var is global scope
let a = 10
console.log( "value of a : ",a) //10

{
    let a = 20
    console.log("value of a : ",a)  // 20
}
a = a+1  // 11 
console.log("value of a : ",a) // 11 

// var is global scope
var b = 10
console.log("value of b : ",b)   //10

{
    var b = 20
    console.log("value of b : ",b)  //20
}

b += 2   // 22 = 20 + 2 var first declared as 10 then it changes to 20 and 2 is added in 20 so the final value of var b is 22
console.log("value of b : ",b)  // 22 

// const keyword is used to define a constant variable 
// a constant variable is variable who's value cannot be changed once it declared 

const pi = 3.1412
console.log("value of pi : ", pi)

// Data types in javascript 
/* There are 7 premitive data types in javascript
    Number : (both integer and float)
    String : for string valuse
    Bigint : for storing big numbers
    Boolean : for True or False value
    Undefine : undefined values
    Null : null values
    Symbol 
    Objects

    the type of null is object because at the time of making of javascript it was declared that the typeof null is object 
    for more can check on stackoverflow
*/

let x = 10;
let y = 22.22;
let z = "welcome to js";
let p = true;
let q = undefined;
let r = null;

console.log(x, y , z, p, q, r)
console.log(typeof x,typeof y ,typeof z,typeof p,typeof q, typeof r)

/* 
Object in javascript
object is a key value pair collection same as dictionary in python or maps in c++
object_name = { key:value}
*/

let obj = {
    name : 'Harry',     // we can add quotation on key 
    'job role' : 2020
}

console.log(obj)
// can add new key values
obj.salary = 20200000;
console.log(obj)

const person = {
    FirstName : 'Rahul Kumar',
    LastName : 'JadaBade',
    id : 2011,
    FullName : function() {
        return this.FirstName + ' ' + this.LastName;
    }
}

console.log(person)
