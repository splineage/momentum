// variables
// var: duplicate declare, function-level scope(no block scope), must not be used.
// Declare all local variables with either const or let.
// Use const by default, unless a variable needs to be reassigned.
let a = 5;
let b = 5;
let name = "test"
a=4;
console.log(a + b);
console.log(a * b);
console.log(a / b);
name = "test2"
console.log("hello " + name);