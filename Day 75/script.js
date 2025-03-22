console.log("Hello World from Deepak");
console.log("Hello World from Hari");
//shows Async nature of js, even we put 0 seconds, it gets executed in the end.
setTimeout(() =>{
    console.log("Hello World from Deepak after 2 seconds")
}, 2000);

console.log("The end");

const callback = (arg) =>{
    console.log("arg");
}
const loadScript = (src,callback) => {
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload = callback("Deepak, Hello");
    document.head.append(sc);
}

//loadScript(script, callback);