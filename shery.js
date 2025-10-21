let p  = document.querySelector("p")
function click(){
    p.style.color = "red"
}
function dblclick(){
    p.style.color = "blue"
}
p.addEventListener("click" , click)
p.addEventListener("dblclick" , dblclick)
