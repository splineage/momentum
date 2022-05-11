// javascript on the browser
// document -> html
console.log(document) // html code
document.title = "Hi" // change title 

// html in javascript
// get & change document
console.log(document.getElementById("title")) // html h1 tag
const title = document.getElementById("title");
console.dir(title); // elements 
title.textContent = "Test" // change textcontent
title.innerText = "Got you!"
console.log(title.id);
console.log(title.className);
console.log(title.textContent);
console.log(title.innerText);
console.log(title.innerText)

// class name
const hello = document.getElementsByClassName("hello");
console.log(hello);

const hi = document.getElementsByClassName("hi")
console.log(hi);
console.log(hi[0]);

// search for elements
const tagName = document.querySelector(".hi h2") // returns the first elements
console.log(tagName);
tagName.textContent = "change";
const tagNameAll = document.querySelectorAll(".hi h2") // 
console.log(tagNameAll)
const tagNameTwo = document.querySelector(".hi h2:first-child");
console.log(tagNameTwo);
// querySelector using id
const tagNameThree = document.querySelector("#title"); 
// same
// const tagNameThree = document.getElementById("hello"); 

console.log(tagNameThree);