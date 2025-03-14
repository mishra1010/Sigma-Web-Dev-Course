let arr = [1,32, 3, 55];
console.log(arr);
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]**2);
// }
//square using map function

let newArr = arr.map((e)=>{
    return e**2;
})
console.log(newArr);

//filter -> gives only elements which are bigger than 10 from the array

let filterArr = arr.filter((e)=>{
    return e>10;
})
console.log(filterArr);

//reduce -> reduce an array to single value

let reduceArr = arr.reduce((a, e)=>{
    return a+e;
}, 0)
console.log(reduceArr);

Array.from('Deep')
console.log(Array.from('Deep'));