//const { createServer } = require('node:http');
// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   //res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>'); 
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//import deepak from "./mymodule.js";
//import {a, b} from "./mymodule.js";
//console.log(a + b);

//console.log(deepak);

//const { a } = require("./mymodule.js");
const t = require("./mymodule2.js");
console.log(t, __dirname, __filename);

//console.log(a);