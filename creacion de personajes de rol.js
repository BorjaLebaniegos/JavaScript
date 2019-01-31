class personaje {
    constructor(nombre, fuerza, vida, fortaleza, debilidad) {
        this.nombre=nombre;
        this.fuerza=fuerza;
        this.vida=vida;
        this.fortaleza=fortaleza;
        this.debilidad=debilidad;
    } 


get nombre(){
    return "nombre: " +  this.nombre;
}

set fuerza(value){
    console.log(typeof value);
    if (typeof value == "number") {
        this.fuerza = value;
    }
}
} 

var MAGO1= new Personaje("Mago", 120,"volar","electricidad");

console.log(MAGO1.nombre);
class personajeMagico extends personaje{
    constructor(nombre, fuerza, vida, fortaleza, debilidad, poderEspecial, aliado, enemigo, experiencia, nivel) {
        super (nombre, fuerza, vida, fortaleza, debilidad);
        this.poderEspecial=poderEspecial;
        this.aliado=aliado;
        this.enemigo=enemigo;
        this.experiencia=experiencia;
        this.nivel=nivel;
    } 
} 

var Mago2 = new personajeMagico("Mago2", 120, "volar", "electricidad", "kamekameha", "los_topos", "trolls", 10000, 5);
console.log(Mago2.nombre);
