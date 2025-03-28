console.log("Hello There ! Suryansh This Side !");

var name = "Suryansh";
let age = "19";
const course = "B.Tech";

/** difference between these variables are:-
 * version wise diference var was instroduced only after ver 6
 * 
 * hoisting -- js interpreter screens the whole code before running and rearranges the codeas required. and only the deinition is rearranged not data E.g- we can call a function before defining it. var can be hoisted and rest can't
 * 
 * scoping - var is always global except inside a fn. let and const can be used to make a local and global vars as required 
 */

console.log(name, age, course);


// 4 datatypes are there - 
// undefineed, number, String, boolean

var test;
console.log(test);

const isLoggeed = true;
console.log(isLoggeed);

/* various operations like arithmetic, logical, comparison etc can be performed simalar to other languages */

// comparison operator

var age1Cpy = "34";
let age1 = 34;
console.log(age1Cpy == age1);
console.log(age1Cpy === age1); // strict comparison

// logical operatoe=r seeks boolean values on both sides

var boolName = "true";
var boolAge = "false";
console.log(boolName && boolAge);
console.log(boolName || boolAge);

console.log(typeof isLoggeed);


// String
const name1 = "Vedant";
console.log(name1);


const num2 = 4;
const ProductName = "'Ash' win ${num2}'";
console.log(ProductName);


//  escaping characters
const prNum2 = 'this is the second prduct\'s data';
console.log(prNum2);

// size of string
console.log(ProductName.length);

// split to covert to char array
console.log(ProductName.split(" "));

//concatenation
console.log(prNum2.concat(ProductName));

// substring
console.log(prNum2.substring(12,15));

// lowercase method
console.log(prNum2.toLowerCase());

// logical operations

    // comparison
const age2 = 18;
const age3 = '18';
console.log(age2 == age3);
console.log(age2 === age3); // Strict checking



// Arrays
const ages = [];
console.log(ages);

const message = ["hello", "there"];

const ages3 = [55,22,78]; 
console.log(message, ages3);
console.log(ages3[2]); // index based 

// push, pop works from the end of the array and 
// PUSH ALSO RETURNS THE LENGTH OF THE ARRAY

console.log(ages3.push());
ages3.push(88);
console.log(ages3);

console.log(ages3.pop());

// Shift and unshift works similary but from the strting of the array

// update
ages3[2] = 29;
console.log(ages3);

ages3.sort();
console.log(ages3);

// default sorting method of sort method in js is string based
// if we have to sort number we need to comperator function

const ages4 = [88,25,66,19];
const srt = ages4.sort(function(a,b){return a-b}); // based on bubble sort ; to sort in ascending order if the a-b comes positive swap and if negative no swap, zero also no swap

console.log(srt);

const srt2 = ages4.sort(function(a,b) {return b-a}); // for decending order
console.log(srt2);

// Multidimensonal arrays are also there in JS -- arrays in arrays

