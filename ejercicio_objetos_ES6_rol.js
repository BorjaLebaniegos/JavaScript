class Personaje {
    constructor(nombre, fuerza, vida, fortaleza, debilidad) {
        this.nombre=nombre;
        this.fuerza=fuerza;
        this.vida=vida;
        this.fortaleza=fortaleza;
        this.debilidad=debilidad;
    } 


get Nick(){
    return "nombre: " +  this.nombre;
}

set ataque(value){
    console.log(typeof value);
    if (typeof value == "number") {
        this.fuerza = value;
    }
}
} 

var MAGO1= new Personaje("Mago", 120, 50,"volar","electricidad");

console.log(MAGO1.nombre);
class PersonajeMagico extends Personaje{
    constructor(nombre, fuerza, vida, fortaleza, debilidad, poderEspecial, aliado, enemigo, experiencia, nivel) {
        super (nombre, fuerza, vida, fortaleza, debilidad);
        this.poderEspecial=poderEspecial;
        this.aliado=aliado;
        this.enemigo=enemigo;
        this.experiencia=experiencia;
        this.nivel=nivel;
    } 
} 

var Mago2 = new PersonajeMagico("Mago2", 180, 60, "volar", "electricidad", "kamekameha", "los_topos", "trolls", 10000, 5);
console.log("Su nombre es " + Mago2.nombre, "Su fuerza es: " + Mago2.fuerza, "Sus aliados son los " + Mago2.aliado, "Sus enemigos son los " + Mago2.enemigo);
