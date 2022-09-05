"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BuyGame {
    constructor(cli, emp, game) {
        this.client = cli;
        this.employee = emp;
        this.game = game;
        this.game.setValue(this.giveDiscount(this.game.getValue()));
        this.finalPrice = this.game.getValue();
        this.employee.setComission(this.addComission(this.finalPrice));
        this.valueWithDiscount = 0;
    }
    giveDiscount(price) {
        if (this.game.getAge() < 2020) {
            this.valueWithDiscount = this.game.getValue() * 0.90;
            this.game.setValue(this.valueWithDiscount);
        }
        else {
            this.game.setValue(price);
        }
        if (this.client.getMoney() < 5000) {
            this.valueWithDiscount = this.game.getValue() * 0.90;
            return this.game.setValue(this.valueWithDiscount);
        }
        else {
            return this.game.setValue(this.game.getValue());
        }
    }
    addComission(value) {
        return this.employee.setComission(value * 0.2);
    }
    detailPurchase() {
        console.log(`Nome: ${this.client.getName()}\n${this.game.getName()},
        Ano: ${this.game.getAge()}, Valor:${this.game.getValue()}\n
        Funcionário: ${this.employee.getName()}, Comissão: R$ ${this.employee.getComission()}`);
    }
}
exports.default = BuyGame;
