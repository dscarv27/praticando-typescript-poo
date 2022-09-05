"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(t, n, a) {
        this.type = t;
        this.name = n;
        this.age = a;
    }
    // metodo da classe Animal. void não retorna nada.
    comunicate() {
        console.log("Olá, sou método da classe mãe");
    }
}
exports.default = Animal;
class Dog extends Animal {
    constructor(t, n, a, r) {
        super(t, n, a);
        this.race = r;
    }
    bark() {
        super.comunicate();
    }
}
class People extends Animal {
    constructor(t, n, a, c) {
        super(t, n, a);
        this.color = c;
    }
    comunicate() {
        console.log("Olá, sou da classe filha. Classe People");
    }
}
let dog1 = new Dog("dog", "bob", 2, "husky");
// console.log(dog1.type);
// console.log(dog1.name);
// console.log(dog1.age);
// console.log(dog1.race);
dog1.bark();
let people1 = new People("human", "daniel", 29, "white");
// console.log(people1.type, people1.name, people1.age, people1.color);
people1.comunicate();
