console.log("Deepak");

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);

// boxes[2].style.backgroundColor = "red";
//document.getElementById("redbox").style.backgroundColor = "red";

//document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e=>{
   e.style.backgroundColor = "green";
   console.log(e);
})

console.log(document.getElementsByTagName("div"));

