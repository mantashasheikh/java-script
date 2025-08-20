let student = [{
    name:"sid",
    age:25,
    fees:25000,
    course:"fswd",
    city:"Bhopal"
},{
    name:"anshika",
    age:22,
    fees:30000,
    course:"data science",
    city:"bombay"
},{
    name:"krishna",
    age:22,
    fees:43000,
    course:"AIML",
    city:"Delhi"
}]


let show = document.querySelector("#show")
student.map((e)=>{
    show.innerHTML += `
    <tr>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.fees}</td>
    <td>${e.course}</td>
    <td>${e.city}</td>
    </tr>`
})