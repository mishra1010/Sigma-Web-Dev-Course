let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");

//let sum = a+b; //here it appends and hence need to convert to integer
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Please enter a valid number");
}
let sum = parseInt(a) + parseInt(b);
try{
    console.log("The sum of the two numbers is: " + sum*x); //handle the error here
} catch (error){
    console.log("An error occured: " + error);
}
finally {
    console.log("cleaning up files");
}
