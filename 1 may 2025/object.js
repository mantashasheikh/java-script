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




// map()
let num = [1,8,5,3,7,9]
let newNum = num.map((e)=>{
    return e*2
})
console.log(newNum)




// filter()
let n = [1,8,5,3,7,9]
let newN = n.filter((e)=>{
    return e>5
})
console.log(newN)


let a = [1,8,5,3,7,9]
let newA= a.filter((e)=>{
    return e%2!=0
})
console.log(newA)



// forEach
let ar= [1,8,5,3,7,9]
ar.forEach((e)=>{
    console.log(e*2)
})



// array of object
let student = [{
    name:"sid",
    age:25,
    fees:25000
},{
    name:"anshika",
    age:22,
    fees:30000
},{
    name:"krishna",
    age:22,
    fees:43000
}]
console.log(student[1])        //get only one object
console.log(student[1].age)     //get only one element of any object

student[1].course = "fswd"    //insert
console.log(student)

delete student[1].age         //delete
console.log(student)


student[2].age = 10n         //update
console.log(student)













