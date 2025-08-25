// let clickme = ()=>{let para = document.querySelector("#para")
// let n = 0
// setInterval(()=>{
//     para.innerHTML = n++
// },2000)}



let n = 0
let start = ()=>{let para = document.querySelector("#para")
let co = setInterval(()=>{
    para.innerHTML = n++
    
    
},2000)}


let stop = ()=>{
let para = document.querySelector("#para")
let co = setInterval(()=>{
    clearInterval(co)
},2000)}







