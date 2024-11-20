//Arreglos
//Los arreglos son colecciones ordenadas de datos y pueden contener cualquier tipo de datos, incluidos otros arreglos y objetos.


let numeros = [1, 2, 3, 4, 5];
console.log(numeros);


//Acceso a elementos por indice

console.log(numeros[0]); // 1
console.log(numeros[4]); // 5

//Metodos comunes para arreglos 

numeros.push(6);
console.log(numeros); // [1, 2, 3, 4, 5, 6] anade uno o mas elementos al final del array

numeros.pop();
console.log(numeros); // [1, 2, 3, 4, 5] elimina el ultimo elemento del array

numeros.shift();
console.log(numeros); // [2, 3, 4, 5] elimina el primer elemento del array

numeros.unshift(0);
console.log(numeros); // [0, 2, 3, 4, 5] agrega uno o mas elementos al inicio del array

//map
// Crea un nuevo arreglo con los resultados de llamar a una función proporcionada en cada elemento del arreglo.

let dobles = numeros.map(num => num * 2);
console.log(dobles); // [0, 4, 6, 8, 10]

//filter
//Crea un nuevo arreglo con todos los elementos que cumplan con la condición implementada por la función dada.
let numeros1 = [1, 2, 3, 4, 5];
let mayoresQueDos = numeros1.filter(num => num > 2);
console.log(mayoresQueDos); // [3, 4, 5]

//reduce
// aplica una función a un acumulador y a cada valor del arreglo (de izquierda a derecha) para reducirlo a un único valor.
let numeros2 = [1, 2, 3, 4, 5];
let suma = numeros2.reduce((acumulador, valorActual) => acumulador + valorActual, 0); console.log(suma); // 15


//forEach
// Ejecuta una función en cada elemento del arreglo.
numeros1.forEach(num => console.log(num * 2));

//find
//Devuelve el primer elemento que cumpla con la condición proporcionada.

let encontrado = numeros1.find(num => num > 3);
console.log(encontrado); // 4

//Includes
//Verifica si el arreglo contiene un valor especifico

console.log(numeros1.includes(3)); // true

//concat, combina dos o mas arreglos

let otrosNumeros = [6, 7, 8];
let combinados = numeros1.concat(otrosNumeros);
console.log(combinados); // [1, 2, 3, 4, 5, 6, 7, 8]

//slice, devuelve una copia de una parte del arreglo, dentro de un nuevo arreglo

//incluye el indice inicial, el final no lo incluye
//[incluye, no incluye)
//index [0,1,2,3,4]
//array [1,2,3,4,5]
let parte = numeros1.slice(1, 4);
console.log(parte); // [2, 3, 4]

//splice, anade o elimina elementos de un arreglo

numeros1.splice(2, 1, 10); // Elimina 1 elemento en el índice 2 y añade 10
console.log(numeros1); // [1, 2, 10, 4, 5]


//Desestructuracion de arreglos

let [uno, dos, tres] = numeros1;
console.log(uno, dos, tres); // 1 2 10




