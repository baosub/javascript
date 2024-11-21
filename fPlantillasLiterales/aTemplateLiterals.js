//template literals.

//sitaxis basica
let texto = `Hola, mundo`;
console.log(texto); // Hola, mundo

//ventajas

//puedes interpolar expresiones y variables

let nombre = "Juan";
let saludo = `Hola, ${nombre}!`;
console.log(saludo); // Hola, Juan!

let a = 5;
let b = 10;
console.log(`La suma de ${a} y ${b} es ${a + b}`); // La suma de 5 y 10 es 15


//Cadenas multilinea

let poema = `Rosas son rojas,
violetas son azules,
el azúcar es dulce,
y tú también.`;
console.log(poema);

// Incluir caracteres especiales facilmente
//puedes incluir salto de liena, comillas.

let frase = `Dijo: "No te preocupes por las comillas"`;
console.log(frase); // Dijo: "No te preocupes por las comillas"

//Funciones de marcado

function etiqueta(cadenas, ...valores) {
    console.log(cadenas); // ["Hola, ", "! Tienes ", " años."]
    console.log(valores); // ["Juan", 30]
    return `${cadenas[0]}${valores[0]}${cadenas[1]}${valores[1]}${cadenas[2]}`;
}

let nombre1 = "Juan";
let edad = 30;
let resultado = etiqueta`Hola, ${nombre1}! Tienes ${edad} años.`;
console.log(resultado); // Hola, Juan! Tienes 30 años.


//usos avanzados.

let multiplicar = (a, b) => a * b;
let resultado1 = `El resultado de 5 * 10 es ${multiplicar(5, 10)}`;
console.log(resultado1); // El resultado de 5 * 10 es 50

//Interpolacion compleja

let nombre2 = "Luis";
let activo = true;
let mensaje = `Hola, ${nombre2}. ${activo ? 'Estás activo.' : 'No estás activo.'}`;
console.log(mensaje); // Hola, Luis. Estás activo.
