//Operador rest

//Destructuracion de arreglos

let [primero, ...resto] = [1, 2, 3, 4, 5];
console.log(primero); // 1
console.log(resto); // [2, 3, 4, 5]


//Destructuracion de objetos

let { a, b, ...resto1 } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // 1
console.log(b); // 2
console.log(resto1); // { c: 3, d: 4 }

//Parametros de funciones

function sumar(...numeros) {
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
console.log(sumar(1, 2, 3, 4)); // 10

