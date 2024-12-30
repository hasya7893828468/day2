const array = [1,2,3,4]

const sum = array.reduce((sum,num)=>sum+num,0)
console.log(sum);

const max=array.reduce((max,ele)=>{
    return ele > max ? ele : max;

},array[0])
console.log(max);
