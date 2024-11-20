//Objetos
//Coleccion de propiedades donde cada propiedad tiene un nombre(clave) y un valor

let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
};


//Desestructuracion de objeto

let { nombre, edad } = persona;
console.log(nombre, edad); // Juan 30


console.log(persona);//imprime el objeto
console.log(persona.nombre); // Juan
console.log(persona["edad"]); // 30

//Metodos comunes para objetos

console.log(Object.keys(persona)); // ["nombre", "edad", "profesion"]
console.log(Object.values(persona)); // ["Juan", 30, "Desarrollador"]
console.log(Object.entries(persona)); // [["nombre", "Juan"], ["edad", 30], ["profesion", "Desarrollador"]]

//Propiedades y metodos avanzados

//Definición de Métodos
//Los objetos pueden contener métodos, que son funciones almacenadas como propiedades.

let persona1 = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
};
persona1.saludar(); // Hola, me llamo Juan


//Objetos Anidados
//Los objetos pueden contener otros objetos.

let empresa = {
    nombre: "TechCorp",
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Ciudad de México"
    },
    empleados: [
        { nombre: "Ana", puesto: "Desarrolladora" },
        { nombre: "Luis", puesto: "Diseñador" }
    ]
};
console.log(empresa.direccion.calle); // Calle Falsa 123











