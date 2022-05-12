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

const h2 = document.querySelector("div.hello:first-child h2");
console.log(h2);
console.dir(h2);
// event
// h2 html element mdn
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
// https://developer.mozilla.org/en-US/docs/Web/API/Element


h2.style.color = "blue" // change style, but CSS 에서 하는게 좋음.

function handleTitleClick(){
    h2.style.color = "red";
    console.log("title was clicked");
}
function handleMouseEnter(){
    console.log("mouseenter")
    h2.innerText = "Mouse is here!"
}
function handleMouseLeave(){
    console.log("mouseleave");
    h2.innerText = "Mouse is gone!"
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("no Wifi")
}
function handleWindowOnline(){
    alert("good")
}

// h2.addEventListener("click", handleTitleClick) 
h2.onclick = handleTitleClick
// h2.addEventListener("mouseenter", handleMouseEnter);
h2.onmouseenter = handleMouseEnter
h2.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
//clipboard events
window.addEventListener("copy", handleWindowCopy);
// connection events
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);