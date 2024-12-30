const list =[
    {name:"hasya",    age:23},
    {name:"ram",    age:20},
    {name:"prakash",    age:13},
    {name:"jo",    age:18},
    {name:"krishna",    age:30}

]

// list.forEach((e)=>{
//  console.log(e.name);
 

// })

const filteArray = list.map((e)=>{
    return e.age
})

console.log(filteArray);
