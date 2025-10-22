let el = document.getElementById("title")
el.style.color = "red"

let para = document.getElementsByClassName("para")
for (let p of para){
    p.style.color = "blue"
}


let para1 = document.getElementsByClassName("para1")
para1[0].style.color = "red"
para1[1].style.color = "pink"
para1[2].style.color = "green"


let head = document.querySelector(".head")
head.style.backgroundColor = "yellow"


let siblings = document.querySelectorAll(".sib")
siblings.forEach((sib) => {
    sib.style.color = "blue"
    sib.style.backgroundColor = "yellow"

})




let div = document.getElementById("container")
div.style.border = "2px solid black"
let para2 =  document.createElement("p")
para2.textContent = "this is new para . "

para2.style.backgroundColor = "teal"
let para3 = document.createElement("p")
para3.textContent = "this is para 3"
para3.style.backgroundColor = "teal"

div.appendChild(para2)
div.prepend(para3)
