
let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let time = new Date() 
let date = time.getDate()
document.querySelector("#date").innerHTML = date

let month = months[time.getMonth()]
document.querySelector("#month").innerHTML = month

let year = time.getFullYear()
document.querySelector("#year").innerHTML = year

let day = week[time.getDay()]
document.querySelector("#day").innerHTML = day







    
    