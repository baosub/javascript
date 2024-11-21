//Spread operator ...

//Crear copia

let arregloOriginal = [1, 2, 3];
let copiaArreglo = [...arregloOriginal];
console.log(copiaArreglo); // [1, 2, 3]


//combinar arreglos

let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];
let combinado = [...arreglo1, ...arreglo2];
console.log(combinado); // [1, 2, 3, 4, 5, 6]

//usar en funciones

function sumar(a, b, c) {
    return a + b + c;
}
let numeros = [1, 2, 3];
console.log(sumar(...numeros)); // 6





//uso con objetos


let objetoOriginal = { a: 1, b: 2 };
let copiaObjeto = { ...objetoOriginal };
console.log(copiaObjeto); // { a: 1, b: 2 }


//combinar objetos

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinadoObjeto = { ...obj1, ...obj2 };
console.log(combinadoObjeto); // { a: 1, b: 2, c: 3, d: 4 }

//Parametros de funciones

function sumar(...numeros) {
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
console.log(sumar(1, 2, 3, 4)); // 10






