const express = require('express');
const blog = require('./routes/blog');
const shop = require('./routes/shop');


const app = express();
const port = 3000;
app.use(express.static('public'));
app.use('/blog', blog);
app.use('/shop', shop);


app.get('/', (req, res) => {
    console.log('GET request received')
    res.send('Hello World!!!! Get')
}).post('/', (req, res) => {
    console.log('POST request received')
    res.send('Hello World!! Post')
})

app.put('/', (req, res) => {
    console.log('PUT request received')
    res.send('Hello World!! Put')
})

app.get("/index", (req,res) =>{
    console.log("GET request to /index received")
    res.sendFile(__dirname + '/templates/index.html')
})

app.get("/api", (req,res) =>{
    console.log("GET request to /api received")
    res.json({a:1, b:2, name:["John", "Doe"]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})