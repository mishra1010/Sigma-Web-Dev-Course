const fs = require("fs");

//console.log(fs);

//synchronous mode
console.log("starting");
//fs.writeFileSync("hello.txt", "Hello from Node.js!"); //sync mode
//async mode
fs.writeFile("hello1.txt", "Hello from Node.js!", () => {
console.log("Done!");
fs.readFile("hello1.txt",(err,data)=>{
    console.log(err, data.toString())
}) // we can writeto file again and read again and if we do it so many times then it will lead to callback hell
})

fs.appendFile("hello1.txt", "Appending some text", (err,data) => {
console.log(data);
})
console.log("File written successfully!");


