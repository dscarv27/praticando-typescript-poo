export default class Animal {
    type: string;
    name: string;
    age: number;

    constructor(t: string, n: string, a: number){
        this.type = t;
        this.name = n;
        this.age = a;
    }
    // metodo da classe Animal. void não retorna nada.
    protected comunicate(): void{
        console.log("Olá, sou método da classe mãe")
    }
}

class Dog extends Animal {
    race: string;

    constructor(t: string, n: string, a: number, r: string){
        super(t, n, a)
        this.race = r;
    }
    public bark(){
        super.comunicate()
    }
}

class People extends Animal{
    color: string;

    constructor(t: string, n: string, a: number, c: string){
        super(t, n, a)
        this.color = c;
    }
    public comunicate(): void {
        console.log("Olá, sou da classe filha. Classe People")
    }
}

let dog1 = new Dog("dog", "bob", 2, "husky")
// console.log(dog1.type);
// console.log(dog1.name);
// console.log(dog1.age);
// console.log(dog1.race);
dog1.bark()

let people1 = new People("human", "daniel", 29, "white")
// console.log(people1.type, people1.name, people1.age, people1.color);
people1.comunicate()