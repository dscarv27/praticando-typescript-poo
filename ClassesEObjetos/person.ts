export default class Person {
    constructor(n:string, a:number){
        this.name = n;
        this.age = a;
    }
    name: string;
    age: number;
}

let person1 = new Person("Daniel", 29) //instanciando classe

person1.name = "Daniel"
person1.age = 29

console.log(`Nome: ${person1.name}, Idade: ${person1.age}`)