// Math methods :-

let x = Math.PI;
console.log(x)

// giving the positive value
x = Math.abs(-78)
console.log(x)

// returns -1 if number is negative , returns 1 if number is positive
x= Math.sign(6);
console.log(x)

// return the square root
x = Math.sqrt(49);
console.log(x)

// return the round off value
x = Math.round(4.123);
console.log(x)

x = Math.round(4.567);
console.log(x)

// floor- method rounds the lower value
x = Math.floor(4.567)
console.log(x)

// ceil- method round the upper value
x = Math.ceil(4.1)
console.log(x)

// trunc -retirns the integer value
x = Math.trunc(2345.56788)
console.log(x)

// min- returns the minimum value
x = Math.min(45 , 32 , 0 , 234 , -234 , -456, -123)
console.log(x)

// max - returns the maximum value
x = Math.max(45 , 32 , 0 , 234 , -234 , -456, -123)
console.log(x)

// returns x to the power of y (x,y)
x = Math.pow(2,3);
console.log(x)

// returns random value between 0 and 1
x = Math.random();
console.log(x)

// returns number from 0-100
x = Math.trunc(Math.random()*11);
console.log(x)

x = Math.floor(Math.random()*10)+1;
console.log(x)


// Question - 

let a = Math.trunc(Math.random()*11);
console.log("a=",a)
let b = Math.trunc(Math.random()*6);
console.log("b=",b)
let sum = a + b;
console.log("sum=",sum);
let difference = a-b;
console.log("difference=",difference);
let mul = a*b;
console.log("mul = ", mul);
let div = a/b;
console.log("div = ", div);
let mod = a%b;
console.log("mod=",mod);



// Date methods

let d = new Date();
console.log(d);

// By default javascript will use the browser's time zone and display a date as a full text string

// there are 4 ways ti create a new date object
// new Date()
// new Date(year, month, day, hours, minutes, second, milliseconds)
// new Date(milliseconds)
// new Date(date string)

// month 0 - 11
d = new Date(2020, 4, 3, 23, 34,45, 896);
console.log(d);

d = new Date(2020, 4, 3, 23, 34,45 );
console.log(d);

d = new Date(2020, 4, 3, 23, 34);
console.log(d);

d = new Date(2020, 4, 3, 23 );
console.log(d);

d = new Date(2020, 4, 3 );
console.log(d);

d = new Date(2020, 4);
console.log(d);


// milliseconds
d = new Date(2020);
console.log(d);







