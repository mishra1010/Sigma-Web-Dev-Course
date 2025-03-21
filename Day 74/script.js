let button = document.getElementById("btn");

// List of all mouse events - https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
button.addEventListener("click", ()=>{
//alert("I was clicked")
document.querySelector(".box").innerHTML = "<b>Yayy, you were clicked</b> Enjoy your click!";
}) 

button.addEventListener("contextmenu", ()=>{
    alert("I was right clicked")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key);
})