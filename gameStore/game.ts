export default class Game{
    name: string;
    age: number;
    value: number;

    constructor(n: string, a: number, v: number){
        this.name = n;
        this.age = a;
        this.value = v;
    }
    
    public getName(){
        return this.name
    }

    public setName(name: string){
        this.name = name;
    }

    public getAge(){
        return this.age
    }

    public setAge(age: number){
        this.age = age;
    }

    public getValue(){
        return this.value
    }

    public setValue(value: number): number{
        return this.value = value;
    }  
}