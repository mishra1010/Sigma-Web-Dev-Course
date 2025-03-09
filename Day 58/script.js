function nice(name) {
    console.log("Hey " + name);
}

console.log("Hey Deepak");
console.log("Hey Rohan");
console.log("Hey Harry");
console.log("Hey Deepak");

nice("Deepak");

function add(a, b) {
    console.log(a + b);
}

function add1(a, b) {
    return a + b;
}


add(3,5);
result = add1(3,9);
console.log(result);

const func1 = (x) =>{
    console.log("I am an arrow function", x);
}

func1(4);