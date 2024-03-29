const clock = document.querySelector('h2#clock')

// interval (ms)
// 5초마다 input function 실행.
// setInterval(sayHello, 5000);
setTime()
setInterval(setTime, 1000);

// timeout (ms)
// 5초 후 input function 실행.
// setTimeout(sayHello, 5000);

function sayHello(){
    console.log("hello");
}

function getClock(){
    const date = new Date();
    // String & toString : 형변환할때는 차이가 없음.
    // toString 의 경우 진수 변환 가능.
    const hour = date.getHours().toString().padStart(2,'0'); // ', " 차이없음. ` 내부 변수선언 가능.
    const minute = date.getMinutes().toString().padStart(2,'0');
    const second = date.getSeconds().toString().padStart(2,'0');
    const time = `${hour}:${minute}:${second}`;
    return time;
}
function setTime(){
    clock.innerText = getClock();
}