"use strict";
class Cat {
    constructor(n, c) {
        this.name = n;
        this.color = c;
    }
    meow() {
        console.log("miau!");
    }
} //na classe abstrata, implementa-se o método dentro dela
class Tom extends Cat {
    constructor(n, c, a) {
        super(n, c);
        this.age = a;
    }
} //não precisa chamar o método dentro da extensão da classe
let cat1 = new Tom("Tom", "gray", 3);
console.log(cat1.name, cat1.color, cat1.age);
cat1.meow();
