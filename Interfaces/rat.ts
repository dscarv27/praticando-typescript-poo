export default interface Rat{
    name: string;
    age: number | string;
    run(): void; //método
}

class Jerry implements Rat{
    name: string;
    age: number | string;

    constructor(n:string, a:number|string){
        this.name = n;
        this.age = a;
    }

    run(){
        console.log("corre, lá vem o Tom!")
    }
} //é obrigatório chamar o método dentro da implementação da classe

let rat1 = new Jerry("Jerry", "5 anos");
console.log(rat1.name, rat1.age)
rat1.run()