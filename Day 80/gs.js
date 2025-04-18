class User{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        if (value.length < 4){
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("Deepak");
console.log(user.name);

user = new User("System"); // Name is too short
console.log(user); // undefined
