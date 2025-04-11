use("CrudDB")
db.createCollection("courses")
db.courses.insertMany([
    { "name": "Java", "price": 20000, "instructor": "Deepak" },
    { "name": "Python", "price": 18000, "instructor": "Anjali" },
    { "name": "JavaScript", "price": 15000, "instructor": "Ravi" },
    { "name": "C++", "price": 22000, "instructor": "Neha" },
    { "name": "Ruby", "price": 17000, "instructor": "Amit" },
    { "name": "PHP", "price": 16000, "instructor": "Priya" },
    { "name": "C#", "price": 21000, "instructor": "Karan" },
    { "name": "Swift", "price": 25000, "instructor": "Meera" },
    { "name": "Go", "price": 23000, "instructor": "Vikram" },
    { "name": "Kotlin", "price": 19000, "instructor": "Sonia" }
])

let a = db.courses.find({price: {$gt: 20000}})
console.log(a.count())

//Update
db.courses.updateOne({price: 21000}, {$set: {price:30000}})

//DELETE
db.courses.deleteOne({price: 19000})
//deleteMany