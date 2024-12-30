// const a1=[1,2,3,4,5]
// const a2=[3,4,5,6]

// const a3=[...a1,...a2]

// console.log(a3);



// const addition = (...input)=>{
//     return input.reduce((sum,num)=>sum+num,0)

// }

const addition = (...input)=>{
 let sum=0;
 for(i of input){
    sum+=i
 }
 return sum
}


console.log(addition(1,2,3));

