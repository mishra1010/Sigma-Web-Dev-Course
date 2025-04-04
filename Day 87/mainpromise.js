import fs from "fs/promises";

let a = await fs.readFile("hello1.txt");
//let b = await fs.writeFile("hello1.txt", "\n\n\nthis is amazing promise");
let b = await fs.appendFile("hello1.txt", "\n\n\nthis is amazing promise");
console.log(b);
console.log(a.toString());