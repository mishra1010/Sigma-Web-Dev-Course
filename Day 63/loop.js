arr =[1,4,7,99];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach((value, index, arr)=>{
//     console.log(value, index, arr);
// })

// for in
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element);
//     }
// }

//for of

for (const element of arr) {
    console.log(element);
}