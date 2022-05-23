const input_div = document.querySelector(".input_div")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")

const users = [
    { name:"Abdulaziz",surname:'Abdulayev', hobbies:"Regby",age:10},
    {name:"Ibrokhim",hobbies:"Coding",age:20},
    {name:"Sarvar",hobbies:"Football",age:30},
    {name:"Bobur",hobbies:"Swimming",age:40},
    {name:"Azamjon",hobbies:"Jumping",age:50},
    {name:"Muhammadali",hobbies:"Watching TV",age:60},
    {name:"Bulolxon",hobbies:"Playing Music",age:70},
    {name:"Rosiljon",hobbies:"Play game",age:80},
    {name:"Sardor",hobbies:"Writing",age:90},
    {name:"Omonulla",hobbies:"Running",age:100}
]



btn.addEventListener("click",()=>{
    users.forEach(n => {
        if(n.age === parseInt(input.value)){
            const h1 = document.createElement("h1")
            const h2 = document.createElement("h2")
            const h3 = document.createElement("h3")
            h1.innerHTML = "Name: " +n.name
            h2.innerHTML = "Hobby: "+ n.hobbies
            h3.innerHTML = "Age: " +n.age
            input_div.appendChild(h1)
            input_div.appendChild(h2)
            input_div.appendChild(h3)
        }
    })
    if(input.value === ""){
        alert("Enter The Number")
    }
    input.value = "";
})