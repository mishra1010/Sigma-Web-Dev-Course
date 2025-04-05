const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public')) // to serve static files

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.get('/about', (req,res) => {
    res.send('About Us')
})

app.get('/contact', (req,res) => {
    res.send('Hello Contact!')
})

app.get('/contact', (req,res) => {
    res.send('Hello Blogs!')
})

// app.get('/blog/intro-to-js', (req,res) => {
//     res.send('Hello intro-to-js!')
// })
// app.get('/blog/intro-to-python', (req,res) => {
//     res.send('Hello intro-to-python!')
// })
// app.get('/blog/intro-to-js', (req,res) => {
//     res.send('Hello intro-to-js!')
// })
app.get('/blog/:slug', (req,res) => {
    console.log(req.params) // { slug: 'intro-to-js' }
    console.log(req.query) // mode=dark
    res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})