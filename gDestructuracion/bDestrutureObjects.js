//Destructuring objects

//Sintaxis basica

let persona = { nombre: "Juan", edad: 30, profesion: "Desarrollador" };
let { nombre, edad, profesion } = persona;
console.log(nombre); // Juan
console.log(edad); // 30
console.log(profesion); // Desarrollador


let { nombre: nombrePersona, edad: edadPersona } = persona;
console.log(nombrePersona); // Juan
console.log(edadPersona); // 30

//Objetos anidados

let empleado = {
    nombre2: "Ana",
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "Ciudad de México"
    }
};
let { nombre2, direccion: { calle, ciudad } } = empleado;
console.log(nombre2); // Ana
console.log(calle); // Calle Falsa 123
console.log(ciudad); // Ciudad de México

