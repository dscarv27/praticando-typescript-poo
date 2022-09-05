"use strict";
class Car {
    constructor(c, y, v) {
        this.color = c;
        this.year = y;
        this.value = v;
    }
    //getters obtem o valor dos atributos e setters os altera
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    getLog() {
        console.log("Segue o log desta informação:");
        this.getInfo();
    }
    getInfo() {
        console.log(`${this.color}, ${this.year}, ${this.getValue()}`);
    }
}
let c = new Car("preto", 2020, 20000);
// c.setValue(25000)
// console.log(c.getValue())
c.getLog();
//modificadores de acessos mais comuns: public(todos podem alterar), protected(somente as classes e suas
//subclasses podem utilizar) e private(somente a classe que instanicia e recebe o método pode utilizar)
