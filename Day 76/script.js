async function getData(){
    //simulate getting data from a server
    return new Promise((resolve, rejet) =>{
        setTimeout(()=>{
            resolve(455)
        },3500);
    })

}

async function getData1(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    return data;
}

//post function

async function getData2()
{
    let x = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
        method: 'POST',
        body: JSON.stringify
        ({
            title: 'foo',
            body: 'bar',
            userId:1
        }),
        headers: 
        {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    let data = await x.json();
    return data;
}
async function main(){
console.log("Loading modules");

console.log("Do something else");

console.log("Load Data");
//let data = await getData(); 
//let data = await getData1();
let data = await getData2();// this goes to function where a promise is returned and it will be in pending state
 console.log(data);
 console.log("process data");
}

main();
//How to wait to execute the promise and then execute the next prints
//executes when promise is fulfilled after line 16
// data.then((v) => {
//     console.log(data);
    
//     console.log("process data");
// })

//Now we would see aync await way to wait for promise, mark function as async which will make it run in background

//if we need to wait for the async function to complete, we can use await keyword and then line 17 and 18 will execute
//await can only be used in async function and hence we will create one more function and call it from there

