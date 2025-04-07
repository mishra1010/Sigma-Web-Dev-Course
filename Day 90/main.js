const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
app.use(express.static('public')); //builtin middleware

//custom middleware1 - logger for our application
app.use((req, res, next) => {
    fs.appendFileSync("logs.txt",`${Date.now()} - ${req.method} - ${req.url} \n`)
    console.log('Middleware1 function called')
    console.log(req.headers) // Log the request headers
    req.deepak = "I am Deepak"; // Add a custom property to the request object
    console.log(`${Date.now()} - ${req.method} - ${req.url}`) // Log the current date, request method and URL
   // res.send("Hacked by Middleware1") // Send a response to the client, next steps won't be executed after
    //  response is sent and we will get errors for next steps
    next() // Call the next middleware function in the stack
})

//custom middleware2
app.use((req, res, next) => {
    console.log('Middleware2 function called')
    next() // Call the next middleware function in the stack
})

app.get('/', (req,res) => {
    res.send('Hello World')
});

app.get('/about', (req,res) => {
    res.send('Hello about' + req.deepak);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})