// let obj = {
//     a: 1,
//     b: "Deepak"
// }

// console.log(obj);

class Animal {
    constructor(){
        console.log("Animal Constructor is initiated");
    }

    eats(){
        console.log("Animal eats");
    }
    jumps(){
        console.log("Animal jumps");
    }
}
class Lion extends Animal{
    constructor(name){
        super();
        this.name = name;
        console.log("Lion Constructor is initiated");       
    }
}

let a = new Animal();

let l = new Lion("shera");
console.log(l);