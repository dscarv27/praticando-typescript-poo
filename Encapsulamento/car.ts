class Car {
    //private impede a modificação de um atributo
    private color: string; 
    private year: number;
    private value: number;

    constructor(c: string, y: number, v: number){
        this.color = c;
        this.year = y;
        this.value = v;
    }
    //getters obtem o valor dos atributos e setters os altera
    public getValue(){
        return this.value
    }
    public setValue(value: number){
        this.value = value;
    }
    public getLog(){ //possibilita utilizar um método dentro da classe
        console.log("Segue o log desta informação:")
        this.getInfo();
    }
    public getInfo(){
        console.log(`${this.color}, ${this.year}, ${this.getValue()}`)
    }
}

let c = new Car("preto", 2020, 20000)
// c.setValue(25000)
// console.log(c.getValue())
c.getLog()

//modificadores de acessos mais comuns: public(todos podem alterar), protected(somente as classes e suas
//subclasses podem utilizar) e private(somente a classe que instanicia e recebe o método pode utilizar)