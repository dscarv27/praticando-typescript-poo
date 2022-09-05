"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
exports.default = Person;
let person1 = new Person("Daniel", 29); //instanciando classe
person1.name = "Daniel";
person1.age = 29;
console.log(`Nome: ${person1.name}, Idade: ${person1.age}`);
