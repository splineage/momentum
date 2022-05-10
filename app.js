// variables
// var: duplicate declare, function-level scope(no block scope), must not be used.
// Declare all local variables with either const or let.
// Use const by default, unless a variable needs to be reassigned.
let a = 5;
let b = 5;
let name = "test";
a=4;
console.log(a + b);
console.log(a * b);
console.log(a / b);
name = "test2";
console.log("hello " + name);

// boolean
const ba = null; //nothing
let something;
console.log(ba);
console.log(something); // undefined

//arrays
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const arrays = ["mon","tue","wed","thu","fri","sat","sun"];
const nonsense = [1,2,"hello",false,null,true,undefined,"string"];
console.log(arrays);
console.log(nonsense);
// Get Item from Array
console.log(arrays[6]);
console.log(arrays[7]); // undefined
//Add one more day to the array
arrays.push("some")
console.log(arrays);

const toBuy = ["a","b","c"]
toBuy.push("k")
console.log(toBuy)

