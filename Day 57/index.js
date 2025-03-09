console.log("Tutorial on loops");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let obj = {
    name: "Deepak",
    age:50,
    company: "Google"
}
for (const key in obj){
    
        const element = obj[key];
        console.log(key,element);
   
}

for (const element of "Deepak"){
    console.log(element);   
    
}
x=0;
while (x<6){
    console.log(x);
    x++;
}

do {
    
} while (condition);