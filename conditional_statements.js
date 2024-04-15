// conditional statements in javascript

let age = 20;
let gender = 'male';

if(age > 18)
{
    console.log('You can have Drinks')
}
else
{
    console.log('You cannot have Drinks')
}

// Operators in javascript 
/* Arithmetic operators
    + = addition
    - = subtraction
    * = multiplication
    ** = exponentiation
    / = division 
    % = modulus(return remainder of division)
    ++ = increment 
    -- = decrement 
*/
let a = 2;
console.log(2+3)
console.log(2-3)
console.log(2*3)
console.log(2/3)
console.log(2**3)
console.log(2%3)
console.log(a++)
console.log(a--)

/* assignment operator
    = (assignment)
*/
    console.log(a = 10)
    console.log(a += 10)
    console.log(a -= 10)
    console.log(a *= 10)
    console.log(a /= 10)
    console.log(a %= 10)
    console.log(a **= 10)

/* comparison operators
    == equal to (it only checks the value if values are equal without checking the data type of the variables)
    eg a = 10   number
        b = '10'  string
        a == b (true)
    === equal value and equal type (it checks value as well as data type of the variable)
        a = 10
        b = '10'
        a === b (false)
    != not equal to 
    !=== not equal value or not equal type
    > greater than 
    < less than 
    >= greater than or equal to 
    <= less than or equal to 
    ? ternary operator
*/

let c = 10;
let d = '10';

console.log(c == d)  // true because the values are same it doesnot care about the data types

console.log(c === d)  // false because it checks both value and the data types

console.log( c != d)  // false because number : 10 and string : 10 are same value and it doesnot care about the data types

console.log(c !== d)  // true because the data types are different


//Operators on string 
let text1 = "A";
let text2 = "B";

console.log(text1 < text2)

let text3 = text1 + " " + text2;
console.log(text3)
text2 += " is greater than A";

// type casting number to string
let x = 5 + 5;         // number
let y = "5" + 5;      // string 
let z = 5 + "hello";  // string

console.log(typeof x , x);
console.log(typeof y , y);
console.log(typeof z , z);

/* logical operators
    && logical and 
    || logical or
    ! logical not
*/


// if else ladder

if(2 > 3){
    console.log("2 is greater than 3");
}
else if(2 < 3){
    console.log("2 is less than 3");
}
else {
    console.log("both are same");
}

// ternary operator
console.log(2>3 ? ('2 is greater than 3') : ('3 is greater than 2'));
