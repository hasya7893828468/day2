class Car{
    constructor(year,name){
        this.name=name;
        this.year=year;
    }
    start(){
        return "Car Start"
    }
}

const c1= new Car(2022,"tata")
console.log(c1);
console.log(c1.start());

