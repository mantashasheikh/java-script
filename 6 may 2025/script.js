// current date
let d = new Date()

// methods of date
const year = d.getFullYear();
console.log(year);
const month = d.getMonth();
console.log(month)
const day = d.getDay()
console.log(day)
const date = d.getDate()
console.log(date)
const hour = d.getHours()
console.log(hour)
const min = d.getMinutes()
console.log(min)
const sec = d.getSeconds()
console.log(sec)
const millisec = d.getMilliseconds()
console.log(millisec)
// console.log(d)

// question :-
 d = new Date()
let days = d.getDay()
switch(days){
    case 0:
        console.log("sunday");
    break;
    case 1:
        console.log("monday");
    break;
    case 2:
        console.log("tuesday");
    break;
    case 3:
        console.log("wednesday");
    break;
    case 4:
        console.log("thursday");
    break;
    case 5:
        console.log("friday");
    break;
    case 6:
        console.log("saturday");
    break;
    
}

