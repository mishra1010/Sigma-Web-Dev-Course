//IIFE

async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45);
        },1000)
    })
}

(async function main(){ // IIFE
    
    console.log("a1:" + a1);
    // let a = await sleep();
    // console.log(a);
    // let b = await sleep();
    // console.log(b);

    // let [x, y, ...rest] = [1, 5,7,2,8,4]; // ... destructuring
    // console.log(x,y, rest);

    //object destructuring
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    let {a, b} = obj; // means take out a,b from this object
    console.log(a,b);

    let arr = [2,4,6];
    console.log(sum(arr[0], arr[1], arr[2]));
//or spread operator
    console.log(sum(...arr));

    var a1 = 6; // on top this variable is declared during hoisting but not value and hence we get undefined
})()

//spread operator

function sum(a,b,c){
    return a+b+c;
}