//Tipos de funciones

//Declarativas

function saludar() {
    console.log("¡Hola!");
  }
  saludar(); // Llama a la función y muestra "¡Hola!"
  

//Expresadas

//Se definen como una expresion y pueden ser asignadas a una variable

const despedirse = function() {
    console.log("¡Adiós!");
  };
  despedirse(); // Muestra "¡Adiós!"
  

//funciones flecha

const multiplicar = (a, b) => {
    return a * b;
  };
  console.log(multiplicar(3, 4)); // Muestra 12

//anonimas

setTimeout(function() {
    console.log("Esto se ejecuta después de 2 segundos");
  }, 2000);
  

//Funciones Flecha de una sola linea

const sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // Muestra 8


//funciones anidadas

function exterior() {
    let contador = 0;
    function interior() {
      contador++;
      console.log(contador);
    }
    return interior;
  }
  const contadorFn = exterior();
  contadorFn(); // Muestra 1
  contadorFn(); // Muestra 2
  