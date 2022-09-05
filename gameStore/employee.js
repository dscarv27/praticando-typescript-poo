"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(n, c) {
        this.comission = 0;
        this.name = n;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        return this.name = name;
    }
    getComission() {
        return this.comission;
    }
    setComission(comission) {
        return this.comission = comission;
    }
}
exports.default = Employee;
