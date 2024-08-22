// Función de orden superior
const aplicarOperacion = (operacion, a, b) => {
    console.log(`El resultado de la operación es ${operacion(a, b)}`);
};

// Función que se pasa como argumento
const multiplicar = (a, b) => a * b;

// Llamada a la función de orden superior
aplicarOperacion(multiplicar, 4, 5);
