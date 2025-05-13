// sread array
// it copeis a part of an  array or a complete array to another array

const num1 = [10,20,30,40,50]
const num2 = [60,70,80,90,100]
const num3 = [...num1, ...num2]
console.log(num3)

// isArray , from

const x = Array.isArray(num1)
console.log(x)

const y = Array.from("12345")
console.log(y)

// destructuring
// breaking the variables of array in single line

const arr = [1,2,3,4,5,6,7,8,9]
const [a,b,c,d, ...rest]=arr
console.log(a,b,c,d)
console.log(rest)

// question:-

const arr1 = [1,2,3,4,5,]
console.log(arr1)
 arr1.reverse()
console.log(arr1)
arr1.push(0)
console.log(arr1)
arr1.unshift(6)
console.log(arr1)

//  question:- join two strings

const a1 = [1,2,3,4,5,6]
const a2 = [5,6,7,8,9,10]
const a3 = a1.concat(a2)
console.log(a3)

// object literals

const person = {
    name:"john",
    age:45,
    iseligible:true,
    address:{
        state:"MP",
        country:"India"
    },
    hobbies: ["dance","singing"],
    greet: function(){
        console.log("hello");
    }
}
console.log(person.name)
console.log(person['name'])
console.log(person.iseligible)
console.log(person.address.country)
console.log(person.hobbies[1])
person.greet()













