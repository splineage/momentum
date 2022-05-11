const blueColor = "blue"
const tomatoColor = "tomato"
const h2 = document.querySelector("div.hello:first-child h2");
console.log(h2);


function handleH2Click(){
    const currentColor = h2.style.color;
    let newColor;
    if(currentColor === blueColor){
        newColor = tomatoColor
    }else{
        newColor = blueColor
    }
    h2.style.color = newColor;
    console.log(h2.style.color);
    console.log("Clicked");
}
function handleMouseEnter(){
    h2.innerText = "Mouse is here"
}
function handleMouseLeave(){
    h2.innerText = "Mouse is gone"
}

h2.onclick = handleH2Click;
h2.onmouseenter = handleMouseEnter;
h2.onmouseleave = handleMouseLeave;

//control css
