// function sum(a,b){
//     return a+b
// }
// console.log(sum(3,4))

// const sum1=(a,b)=>{
//  return a+b
// }

// console.log(sum1(3,4));

// const mul=(a)=>{
//     return a*10
// }

// console.log(mul(10));

// const  sum3 = (a,b) => b*a*20 ;

// console.log(sum3(10));

// const array =[2,3,4]

// const [first, second, third]=array;

// const object ={
//     name:"hasya",
//     age:24
// }
// const {name,age}=object;

// console.log(name,age);

// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const arr3=[...arr1,...arr2]
// console.log(arr3);


// const arrg=(...sum)=>{
//     let s=0;
//     for(x of sum){
//         s+=x
//     }
//     return s
// }
// console.log(arrg(1,2,3,4,5));


// const arrg1=(...s)=>{
//     return s.reduce((sum,num)=>sum+num,0)

// }
// console.log(arrg1(1,2,3,4,5,6));


const arr1=[1,2,3,4,5]

for(x in arr1 ){
    console.log(x);
    
}
const arr2={
    name:"hasya",
    age:22
}
for(x in arr2 ){
 console.log(arr2[x]);
 
}

const map1=[1,2,3,4]

const val =map1.map((a,b)=>{return a+b})
console.log(val);
const val1 =map1.filter((a)=>{return a})
console.log(val1);
