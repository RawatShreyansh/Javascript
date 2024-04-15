'use strict';
// Arrays are same as list in python 

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.length) // length of the array

console.log(arr[2]) // accessing the elements of the array.

// Methods in array

// toString method 
console.log(arr.toString()); // convert the array into string with comas

// .join()
console.log(arr.join(" ")); // join the array , can replace coma with anythings we want by specifing in the double qoutes in the .join()

// concatinate
let b = [11,12,13,14,15];

console.log(arr.concat(b)); // concatinate the two arrays. The concatinate returns the new array it doesnot change the original array

// pop() 
console.log(arr.pop()); // remove the last element from the array.

// push()
console.log(arr.push('Sixteen')); // add element in the last of the array.
console.log(arr);

// shift
console.log(arr.shift()); // remove the first element of the array.

// unshift 
console.log(arr.unshift('One')); 
console.log(arr); // unshift add element in the first position.

// delete 
delete arr[1];
console.log(arr); // deletes the element  from the specific position. but the length of the array remains the same . it only deletes the value from the array but do not change the size of the array . the memory doesnot change the position remains in the array. the element in that position are undefined.
console.log(arr[1]); // undefined

// sort 
let c = [20,12,3,4,5,1,0]
c.sort();
console.log(c);

//map 
// suppose we have to square all the elements of the array
let a = [1,2,3,4,5,6,7,8,9,10];
let squaredArr = a.map((elements) => {
    return elements**2;
})

console.log(...squaredArr);

let d = []
a.forEach((elements) => {
    d.push(elements**2);
})

console.log(d);

