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


// -----------------
//Objects- contain methods, properties, 
// Js is an object based language, no need for new keyword
// to create with object literal notation below is the syntax:

const product = {
    id:1,
    name:'Product 1',
    price: 100,
    quantity: 20,
    discount: 0.1,
    discountedPrice: function(){
        return this.price - (this.price * this.discount);
    } 
}

console.log(product);
console.log(product.name);// dot opertaor to acces values / properties from object

console.log(product["price"]); // can acces through array too by providing key

// how to call a function
console.log(product.discountedPrice());

// How to update
product.price= 200;
console.log(product.price);
console.log(product.discountedPrice());

// Insertion from outside of the obj
product.description = 'The product actually is Ntebook';
console.log(product.description);

// deletion 
delete product.quantity;
console.log(product);


// Use of this keyword-- pointer to the current object/instance

const newProduct = {
    id:1,
    fname:'ABC',
    lname: 'XYZ',
    fullName: function(){
        return newProduct.fname+' '+ newProduct.lname;
    } 
}
console.log(newProduct.fullName());

const Product2 = {
    id:1,
    fname:'ABC',
    lname: 'XYZ',
    fullName: function(){
        return this;
    } 
}
console.log(Product2.fullName());

console.log(Product2.fullName().fname);

// Nesting is also possible in objects, objects inside obj - use chaining
// Arrays can be there in objs- there can be nesting too

let addresses = [{

}]
// obj inside array also there

// Practice Ex - 3.5
// create an obj name people that contains an empty arry that is called friends

const people = {
    friends: []
};
const friend1 = {
    firstName: "Ram",
    lastName: "Kumar",
    id: 1
};

const friend2 = {
    firstName: "Shlok",
    lastName: "Singh",
    id: 2
};

const friend3 = {
    firstName: "Ashwin",
    lastName: "Sinha",
    id: 3
};

people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

console.log(people.friends[0]);


// Conditional statements are the same as in JAVA- if, else else if, switch case 
// loops- while, for, do while, for in , for out also same as java

const myItem= [2,8,8,90];

for(let i=0; i<myItem.length; i++){
    console.log(myItem[i]);
}


for(let item of myItem){
    console.log(item);
}

// to iterate on obj

const myItem2= {
    name : "Kivi",
    price : 100,
    category : "fruit",
    tags : ["healthy", "fruit"]
};

for (let item in myItem2) {
   console.log(myItem2);
   console.log(myItem2[item])
}

// learn how to convert array to object or object to array



// FUNCTIONS
// BAsic approach
function functionTest() {
    console.log("function working !");
}
functionTest(); // calling

function myFunction(name) {
    console.log(name);
}
myFunction("Suryansh");

function myFunction2(name) {
    return name;
}
let data = myFunction2("Suryansh");
console.log(data);

// NaN-- not a number
function square(x=0) {
    return x*x;
}
let sq = square("Surya");
console.log(sq);

function square2(x=0) {
    return x*x;
}
let sq2 = square(5);
console.log(sq2);

// lambda experssion or arrow fn
() => {}// right now no name or anonymous function

(x)=>{
    return x*x;
}


let square3 = (x)=>{
    return x*x;
}
let res = square3(4);
console.log(res);

// we can remove () if single argument, can also remove {} and return too

const square4 = x=>x*x

const res2 = square4(3);
console.log(res2);



// CALLBACK FUNCTION -- mostly we use arrow fn
// this is a fn that is passed as an argument in another fn also the fn that is passed is called as calback fn and where the functio is recieved is called higher order fn

function nameFn(cv){
    cv("surya");
    //return cv;// no use
}
nameFn((data)=>{
    console.log(data);
})


// use of callback in for each loop
let ages5 = [84,55,44,23,21,70,44];

console.log("for each");
ages5.forEach((item3)=>{
    console.log(item3);
})

console.log("find");
ages5.find((item4)=>{
    console.log(item4);
})

console.log("find with return and equality check ");
let foundVal = ages5.find((item5)=>{
    return item5 === 44; // only returns the first ocuurence after that breaks
})
console.log(foundVal); 

// to create local variable in a fn use let and const

// IMMEDAITELY INVOKED FN called directly

(function(name) {
    console.log("invoked fn");
})()


// recursive function -- fn can call fn itself too
