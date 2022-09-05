export default class Client{
    name: string;
    money: number;

    constructor(n: string, m: number){
        this.name = n;
        this.money = m;
    }

    public getName(){
        return this.name
    }

    public setName(name: string){
        this.name = name;
    }

    public getMoney(){
        return this.money
    }

    public setMoney(money: number): number{
        return this.money = money;
    }
}