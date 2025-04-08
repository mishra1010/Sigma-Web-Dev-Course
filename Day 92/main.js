const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res) =>{
    //res.send('Hello World!')
    let siteName = "Adidas";
    let searchText = "Search Now";
    arr = ["Adidas", "Nike", "Puma", "Reebok"];
    //res.sendFile("templates/index.html", {root: __dirname});
    res.render("index", {siteName: siteName, searchText: searchText, arr});
});

app.get('/blog/:slug', (req, res) =>{
    //res.send('Hello World!')
    let blogName = "Adidas why and when?";
    let blogContent = "Its a great brand";
    //res.sendFile("templates/blogpost.html", {root: __dirname});
    res.render("templates/blogpost.html", {blogTitle: blogTitle, blogContent: blogContent});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})