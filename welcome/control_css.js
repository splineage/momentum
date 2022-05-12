// connect css
const h2 = document.querySelector("div.hello:first-child h2");
function changeClassName(clickedClass){
    if(h2.className === clickedClass){
        h2.className = ""; // update className
    }else{
        h2.className = clickedClass;
    }
}
function changeClassList(clickedClass){
    if(h2.classList.contains(clickedClass)){
        // h2.className = "";
        h2.classList.remove(clickedClass);
    }else{
        // h2.className = clickedClass;
        h2.classList.add(clickedClass);
    }
}

// toggle

function handleH2click(){
    const clickedClass = "clicked"
    // h2.className = "clicked"; // style.css -> .active 
    console.log(h2.className);
    // 1. changeClassName(clickedClass); // name 을 변경하는 경우 -> 자신이 갖고 있는 classname 이 사라짐.
    // 2. changeClassList(clickedClass);
    // 3. toggle (classlist add, remove)
    h2.classList.toggle(clickedClass);
}

h2.addEventListener("click", handleH2click);