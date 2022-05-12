// variables
// var: duplicate declare, function-level scope(no block scope), must not be used.
// Declare all local variables with either const or let.
// Use const by default, unless a variable needs to be reassigned.
let a = 5;
let b = 5;
let name = "test";
a = 4;
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
const arrays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "string"];
console.log(arrays);
console.log(nonsense);
// Get Item from Array
console.log(arrays[6]);
console.log(arrays[7]); // undefined
//Add one more day to the array
arrays.push("some")
console.log(arrays);

const toBuy = ["a", "b", "c"]
toBuy.push("k")
console.log(toBuy)

// object
const player = {
    name: "maru",
    points: 10,
    fight: true
};
console.log(player);
console.log(player.name);
console.log(player["points"]);
player.fight = false;
console.log(player.fight);
player.lastName = "kim"; // add property
console.log(player);

// function
function sayHello(name, age) {
    console.log("Hello " + name + " " + age);
}
sayHello("kim", 10);

function plus(a, b) {
    console.log(a + b);
}
function divide(a, b) {
    console.log(a / b);
}
plus(1, 5);
divide(3, 3);
const functionPlayer = {
    name: "kim",
    sayHello: function (name) {
        console.log("Hello " + name);
    },
};
console.log(functionPlayer.name);
functionPlayer.sayHello("lee");


const calculator = {
    add: function (a, b) {
        // console.log(a+b);
        // alert(a+b);
        // no return -> undefined
        return a + b;
    },
    minus: function (a, b) {
        // console.log(a-b);
        return a - b;
    },
    multiply: function (a, b) {
        // console.log(a*b);
        return a * b;
    },
    divide: function (a, b) {
        // console.log(a/b);
        return a / b;
    },
    powerof: function (a, b) {
        // console.log(a**b);
        return a ** b;
    }
}
calculator.add(1, 2);
calculator.minus(2, 1);
calculator.divide(6, 3);
calculator.multiply(4, 2);
calculator.powerof(2, 3);

// returns
const age = 50;
function caculateKorAge(ageOfForeigner) { // 타입이 없으니 리턴타입 설정이 없는듯?
    return ageOfForeigner + 2;
}
const krAge = caculateKorAge(age);
console.log(krAge);

console.log(calculator.add(2, 2));

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multiplyResult = calculator.multiply(10, minusResult);
const divideResult = calculator.divide(multiplyResult, plusResult);
const powerResult = calculator.powerof(divideResult, minusResult);

console.log(5 - 10);

// conditionals
if (plusResult > 5) {
    console.log("yes")
} else {
    console.log("no")
}
const promAge = prompt("Age ?"); // 입력 대기
console.log(promAge); // cancel 시 null
console.log(typeof promAge) // check type -> string

// max int : 2^53 -1, (더 큰 정수 -> BigInt)

const intAge = parseInt(promAge) // string to int
console.log(intAge); // cancel 시 null
console.log(typeof intAge) // check type -> string, intAge 가 숫자가 아닌경우 typeof -> NaN(Not A Number)

console.log("--------------------------")
if (isNaN(intAge)) { // isNaN : NaN 인 경우 return true 
    console.log("please input a number");
} else if (intAge < 18) {
    console.log("young")
} else if (intAge >= 18 && intAge < 50) {
    console.log("middle")
} else if(intAge === 100){
    console.log("input 100");}
else {
    console.log("age : " + intAge)
}











