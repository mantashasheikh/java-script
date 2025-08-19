let mydata = {
    name:"mantasha",
    age :21,
    city :"bhopal"

}
console.log(mydata.age)    //value access
console.log(mydata)


mydata.fees = 25000         //inser key value
console.log(mydata)


delete mydata.age         //delete any key
console.log(mydata)


mydata.city = "Indore"        //update object
console.log(mydata)




// destructuring of object
let {name,age,city}=mydata
console.log(name,age,city)




// spread operator

let s1 = {name:"umrah",age:20}
let s2 = {course:"fswd"}
let s = {...s1 , ...s2}
console.log(s)