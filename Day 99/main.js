const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/employee');

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1));
    return arr[rno];
}

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('index', { foo: 'Foo' });
})

app.get('/generate', async (req, res) => {
    //clear collection
    await Employee.deleteMany({});
    //generate random data
    let randomNames = ["Rohan", "Deepak", "Saurabh", "Amit", "Rahul", "Ravi", "Ajay", "Vijay", "Anil", "Sunil"];
    let randomLang = ["python", "java", "javascript", "c++", "c#", "php", "ruby", "go", "swift", "kotlin"];
    let randomCities = ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow"];
    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
                name: getRandom(randomNames), //"Deepak",
                salary: Math.floor(Math.random() * 22000), //45000000,
                language: getRandom(randomLang), //"Python",
                city: getRandom(randomCities), //"New Delhi",
                isManager: (Math.random()>0.5)?true:false //true
        })
        console.log(e);
        //await e.save(); -- not needed as it gives erorr, we can put this await in create
    }

    res.render('index', { foo: 'Foo' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//install ejs and check how to use ejs with express