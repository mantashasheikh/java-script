// loop

// for loop
for (let i=1; i<=10; i++){
    console.log(i);
}

for (let i=1; i<=10; i++){
    if(i%2==0)(
        console.log(i,"even")
    )
    else{
        console.log(i,"odd")
    }
    
}

// while loop
let i = 1
while (i<=100){
    console.log(i)
    i++
}


// do while loop
let y=1
do{
    console.log(y)
    y++
}while(y<11)


// for in loop = the java script for in statement loops through th properties of an object
// identify a value
const person = {
    name:"john",
    age:32,
    city:"Bhopal",
};
for(let x in person){
    console.log(person[x])
} 

// identify a key
const per = {
    name:"john",
    age:32,
    city:"Bhopal",
};
for(let x in per){
    console.log(x)
} 



// for in loop with array = x denotes the index of an array
// const number = [10,20,30,50]
// for (let x in number){
//     console.log(number[x])
// }


// for of = x denotes the element of an array
const array1 = [100,200,350,450]
for (let x of array1){
    console.log(x)
}


let str = "javascript"
for (let x of str){
    console.log(x)
}

// for each loop = the forEach() method call a function (a callback function )once or each element of an array

// function1
// function2
// function1(function2)
// function2 is a callback function
// function1 is a higher orde function

const num = [34,45,234,13]
let text = ""
num.forEach(myfunction)

function myfunction(x){
    text += x + "";
}
console.log(text)


const number= [2,3,4,5]
let sq = []
number.forEach(myfunction3)

function myfunction3(x){
    sq += x * x

}
console.log(sq)


// Map = the Map() method is used for creating a new array from the existing one, applying  
// a fuynction to each one ofthe element of the array

const num1 = [1,2,3,4,5]
const newArray = num1.map(myfunction2)
function myfunction2(x){
    return x*x
}
console.log(newArray)


