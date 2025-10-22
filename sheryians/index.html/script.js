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
let para2 =  document.createElement("p")
para2.textContent = "this is new para . "
para2.style.backgroundColor = "teal"
div.appendChild(p)
