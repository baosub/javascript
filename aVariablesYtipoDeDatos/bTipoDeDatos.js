//Primitivos
let num = 23
let str = 'hello'
let und;
let nll = null
let verdad = true

console.log(typeof num);
console.log(typeof str);
console.log(typeof und);
console.log(typeof nll); //Null es tipo objeto pero es un bug del lenguaje, deberia ser tipo null
console.log(typeof verdad);
console.log(typeof Symbol('desc'));

//No primitivos

const arreglo = [2,4,5]
const obj = {
    nombre: 'ana',
    edad: 23
}

console.log(typeof arreglo);
console.log(typeof obj);

//Conversiones de tipo

let primerNumeroConvertido = 123
console.log(typeof String(primerNumeroConvertido));

let cadenaNumero = '123'
console.log(Number(cadenaNumero));

console.log(Number("123")); //123
console.log(String(234)); //234
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Boolean('Hello')); //true
console.log(Boolean('   ')); //true
console.log(Boolean(''));  //false

//cadena a numero entero
//cadena a numero flotante
let entero = '25'
let decimal = '3.14'

console.log(parseInt(entero));
console.log(parseFloat(decimal));

//numero a string

let numCadena = 21

console.log(numCadena.toString()); //'21'










