"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(n, a, v) {
        this.name = n;
        this.age = a;
        this.value = v;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        return this.value = value;
    }
}
exports.default = Game;
