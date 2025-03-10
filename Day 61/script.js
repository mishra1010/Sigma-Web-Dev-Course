/*
 Make a faulty calculator

This faulty calculator does the following -
1. It takes 2 numbers as input from user
2. It persorms wrong operatios as follows -
+ -> -
* -> +
- -> /
/ -> **

It performs wrong operations 10% of the times */

let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

let obj = {
    '+': '-',
    '*': '+',
    '-': '/',
    '/': '**'
}

if (random > 0.1) {
    //perform correct calculation
    //alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    console.log("result is" + (`${a} ${c} ${b}`));

}
else{
    //perform wrong calculation
    c = obj[c];
    //alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
    console.log("result is" + (`${a} ${c} ${b}`));
}