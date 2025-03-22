console.log('This is Promise');

// let prom1 = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Yes, i am done");
//         resolve("Deepak");
//     },1000);
// })

// prom1.then((a) => {
//     console.log(a);
// })

//Now lets use reject and not execute resolve

// let prom1 = new Promise ((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was supporting you");
//     }
//     else{
//         setTimeout(() => {
//             console.log("Yes, i am done");
//             resolve("Deepak");
//         },1000);
//     }
// })

// prom1.then((a) => {
//     console.log(a);
// }).catch ((err) => { //catch the error properly in case of reject
//     console.log(err)
// })

//Now we will see 2 promises

let prom1 = new Promise ((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you");
    }
    else{
        setTimeout(() => {
            console.log("Yes, i am done");
            resolve("Deepak");
        },1000);
    }
})

let prom2 = new Promise ((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was supporting you 2");
    }
    else{
        setTimeout(() => {
            console.log("Yes, i am done 2");
            resolve("Deepak");
        },1000);
    }
})

let p3 = Promise.all([prom1, prom2]);
p3.then((a) => {
    console.log(a);
})