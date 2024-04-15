"use strict";
// loops in Javascript
// for loop 
for(let i = 1; i <= 10 ; ++i){
    console.log(2,' * ',i,' = ',2*i );
}

// for of 
//the for of loop is used to iterate in the iteratable object like arrays , list , string etc

let ls = [1,2,3,4,5,6,7,8,9,10]
for(let values of ls){
    console.log(values);
}
// for in 
// the for in loop is used to get the keys of an object 

let object = {
    name : 'Aston Martin db12',
    manufracturer : 'Aston Martin',
    year : '2023',
    model : 'DB12',
    price : '4.59 Cr'
}

for(let keys in object){
    const val = object[keys];
    console.log(keys,' : ',val);
}

// buble sort program 
let array = [1,2,3,4,5,6,7,8,9,10];
console.log("Original array : ", ...array);
for(let i = 0 ; i <= array.length-1; ++i){
    let swapped = 0;
    for(let j = i+1; j <= array.length; ++j){
        if(array[i] > array[j]){
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            swapped = 1;
        }
        if(swapped){
            break;
        }
    }
}

console.log('Sorted array : ',...array);