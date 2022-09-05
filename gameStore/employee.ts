export default class Employee{
    name: string;
    comission: number = 0;

    constructor(n: string, c: number){
        this.name = n;
    }

    public getName(){
        return this.name
    }

    public setName(name: string){
        return this.name = name;
    }

    public getComission(){
        return this.comission
    }

    public setComission(comission: number){
        return this.comission = comission;
    }
}