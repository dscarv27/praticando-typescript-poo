"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(n, m) {
        this.name = n;
        this.money = m;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getMoney() {
        return this.money;
    }
    setMoney(money) {
        return this.money = money;
    }
}
exports.default = Client;
