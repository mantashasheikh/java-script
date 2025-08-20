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


let show = document.querySelector("#show")
student.map((e)=>{
    show.innerHTML += `
    <tr>
    <td>${e.name}</td>
    <td>${e.age}</td>
    <td>${e.fees}</td>
    </tr>`
})