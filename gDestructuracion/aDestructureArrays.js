//Destructuracion de arreglos

//te permite agregar elementos del arreglo a variables

let frutas = ["Manzana", "Banana", "Cereza"];
let [primera, segunda, tercera] = frutas;
console.log(primera); // Manzana
console.log(segunda); // Banana
console.log(tercera); // Cereza

//omitir elementos

let frutas1 = ["Manzana", "Banana", "Cereza"];

let [primera1, , tercera1] = frutas1;
console.log(primera1); // Manzana
console.log(tercera1); // Cereza

//operador ...resto

let [primera2, ...resto] = frutas1;
console.log(primera2); // Manzana
console.log(resto); // ["Banana", "Cereza"]


