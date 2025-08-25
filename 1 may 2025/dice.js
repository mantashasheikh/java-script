
let vs1 = document.querySelector("#vs1")
let vs2 = document.querySelector("#vs2")
let vs3 = document.querySelector("#vs3")
let vs4 = document.querySelector("#vs4")
let vs5 = document.querySelector("#vs5")
let vs6 = document.querySelector("#vs6")
let clickme = (num)=>{
    return Math.floor(Math.random()*6)+1
    

}
let dice = clickme(num)
if(dice==1){
    vs2.style.display = "none"
    vs3.style.display = "none"
    vs4.style.display = "none"
    vs5.style.display = "none"
    vs6.style.display = "none"
    
    }
else if(dice==2){
    vs3.style.display = "none"
    vs4.style.display = "none"
    vs5.style.display = "none"
    vs6.style.display = "none"
    

}
else if(dice==3){
    vs4.style.display = "none"
    vs5.style.display = "none"
    vs6.style.display = "none"
}
else if(dice==4){
    vs5.style.display = "none"
    vs6.style.display = "none"
   
}
else if(dice==5){
    vs6.style.display = "none"
}
else{
    vs1.style.display = "block"
    vs2.style.display = "block"
    vs3.style.display = "block"
    vs4.style.display = "block"
    vs5.style.display = "block"
    vs6.style.display = "block"

}
