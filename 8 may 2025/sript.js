// type conversion

var a = 10;
let y = a.toString();
console.log(y, typeof y);

var b = "hello";
y= Number(b);
console.log(y, typeof y);

y = 5 + "5";
console.log(y)

y = 49.07;
y = parseFloat(y);
console.log(y);

y = 67;
y = parseInt(y);
console.group(y);

// user input

let name = prompt("what is your name?")
let age = parseInt(prompt("enter your age:"))
console.log(name + age)

let length = prompt("enter a length rectangle:")
let width = prompt("enter a width of rectangle:")
let area = ("area of rectangle:"+length*width)
console.log(area)