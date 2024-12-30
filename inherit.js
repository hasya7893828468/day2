class Automob{
    constructor(weels,country){
        this.weels=weels;
        this.country=country;
    }
    auto(){
        return " this is Automobile"
    }
}
class Car extends Automob{
    constructor(weels,country,name,year){
        super(weels,country)
        this.name=name;
        this.year=year;
    }
    car1(){
        return " this is car1"
    }
}

const c1 = new Car(4,"india","tata",2024)

console.log(c1);
console.log(c1.auto());
console.log(c1.car1());



