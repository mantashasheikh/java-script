// array


// how to create an array
//1 array literals
const number = [1,2,3,4,5,6]
console.log(number[0])
let a = number[1]
console.log(a)

//2 constructor

const colors = new Array()
colors[0]="red"
colors[1]="yellow"
colors[2]="green"
colors[3]="orange"
console.log(colors)

//3  mixed array
const mixed = [10, 20, "john", true, {age:23, city:"bhopal"}]
console.log(mixed[0])
console.log(mixed[2])
console.log(mixed[4].age)

let x 
// returns the legth of an array
x = number.length()

// returns the index number of an element
x = number.indexOf(5);

// check the element is present in the array or not
x = number.includes(7)
console.log(x)

// adds an element to the end of an array
number.push(7)
console.log(number)

// remove the last element of an array
number.pop()
console.log(number)

// adds an element to the start of an array
number.unshift(10)
console.log(number)

// removes an element from the start
number.shift()
console.log(number)

// reverse
number.reverse()
console.log(number)

// covert array to string
x = number.toString()
console.log(x)
x = number.join()
console.log(x)

// slice return a new array with selected elements
// it does not change the original array
x = number.slice(0,4)
console.log(x)

// splice - takes the starting index, no of elements to remove
// it change the original array
x = number.splice(1,2)

// starting index, no of elements to remove, elements to add
x = number.splice(0,3,100, 200, 300)

console.log(x)
console.log(number)

// chaining
const arr = [10,20,30,40,50,60,70]
x = arr.slice(1,4).reverse().toString().charAt(0)
console.log(x)

// 
const fruits = ["apple", "mango", "banana"]
const veg = ["potato","tomato","peas"]
let full = [fruits,veg]
x = full[1][0]
console.log(full)
console.log(x)
full = fruits.concat()






