// input value
// const loginForm = document.querySelector("#login-form");
const loginForm = document.getElementById("login-form");
// console.log(loginForm);
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function checkUsername(inputValue){
    if(inputValue === ""){
        alert("Please write your name.")
        // console.log("Please write your name.");
    }else if(inputValue.length > 15){
        alert("Your name is too long");
    }
    else{
        console.log("hello " + inputValue);
    }
}

// check username -> null, too long
function handleLoginButton(){
    const username = loginInput.value;
    console.log(username);
    // checkUsername(username);
    // console.dir(loginInput);
    // console.log(loginInput.value);
    // loginInput.value = ""
    // console.log("clicked");
}

// loginButton.addEventListener("click", handleLoginButton);

function onLoginSubmit(event){
    event.preventDefault(); // Default 기능 동작 정지.
    console.log(event);
    const username = loginInput.value;
    console.log(username);

}

// html form -> auto submit
loginForm.addEventListener("submit", onLoginSubmit); // catch submit event
// 모든 event function 의 첫번째 argument 는 information 로 전달됨.

// link preventDefault
const link = document.querySelector("a");
function handleLinkClick(event){
    console.log(event);
    // alert("clicked"); // blocked everything
    event.preventDefault();
    console.log("clicked");
}
link.addEventListener("click", handleLinkClick);