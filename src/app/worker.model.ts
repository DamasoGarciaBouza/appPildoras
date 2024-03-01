export class Worker{

    constructor(nombre:string,cargo:string,salario:number){
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
    }

    nombre:string = "";
    cargo:string = "";
    salario:number = 0;
}