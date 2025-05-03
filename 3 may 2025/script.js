// string methods

let str =" javascript is my- favourite language . -javascript is- eay language "
// gives the number of character in the string
console.log(str.length)
// charAt()-gives the character at that index
console.log(str.charAt(5))
// indexOf() -returns the uindex number of character
console.log(str.indexOf("p"))

console.log(str.toUpperCase);
console.log(str.toLowerCase);

// includes()- check the text is present in the string or not
console.log(str.includes("great"))

// replace()- replace first element 
console.log(str.replace("javascript", "react"))

// replaceAll()- replace all elements
console.log(str.replaceAll("javascript","react"))

// trim()- removes the white space from start and end
console.log(str.trim())

// split()- convert into array
console.log(str.split(" "))
console.log(str.split("-"))

// slice()- removes a part of string (starting index, ending index). it does not change the original string
console.log(str.slice(0,5))

// if given one value extract the remaining string
console.log(str.slice(5))
console.log(str.slice(-3, -1))
console.log(str.slice(-7))

// substring()- it works like a slice. it does not take a negative indexing
console.log(str.substring(0,10))

// how to join the string
let a = "hello"
let b = "world"
let c = `${a} ${b}`
console.log(c)

c = a + b
console.log(c)

c = a.concat(b)
console.log(c)

// question 1:

let str1 = "developer"
let x = str1.charAt(0)
let cap = x.toUpperCase()
let y = str1.slice(1)
let z = cap.concat(y)
console.log(z)













