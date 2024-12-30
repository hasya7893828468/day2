function a (x,y=200){
    return x+y

}
console.log(a(300));

function def(x,y){
   x=x === undefined ? 100: x; //ternary operator
    return x+y
}
console.log(def(undefined,2));
