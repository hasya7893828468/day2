const item=new Set([1,2,3,"name",1])
console.log(item);


const item1=new Set();

item1.add("hasya")
item1.add("22")

console.log(item1);
console.log(item.size);
console.log(item.has("hasya"));
item.delete("name");
console.log(item);
item.clear()
console.log(item);

const array=[1,1,1,2,2,2,2,2,2]

const a1=new Set(array);

console.log(a1);








