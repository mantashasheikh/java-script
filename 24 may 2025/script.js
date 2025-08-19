let h1 = document.getElementById("demo");
h1.style.color = "red";
h1.style.backgroundColor = "yellow";


let p = document.getElementById("para");
p.style.color = "blue";
p.style.backgroundColor = "yellow";
p.style.border = "4px solid pink";
p.style.borderRadius = "5px"
p.style.fontsize = "20px"
p.style.fontStyle = "italic"


let para = document.getElementById("p");
para.style.cssText = "color:red;background-color:blue;border:5px solid red;border-radius:5px;font-size:40px;font-style:bold";

// let input = document.getElementById("myinput")
// input.value = "kashmir"

// function change(){
//     let input = document.getElementById("myinput");
//     input.value = "delhi";
// }


// function display(){
//     let disp = document.getElementById("myinput").value;
//     let h1 = document.getElementById("demo").value
//     h1.innerHTML = input


// }

// addEventListener() - method attaches an event handler to the specified element
let button = document.getElementById("btn")
button.addEventListener("click",function(){
    console.log("button clicked")
    h1.style.color = "blue"
})

