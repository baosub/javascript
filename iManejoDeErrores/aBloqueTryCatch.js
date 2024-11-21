//bloque try/catch

/*
try {
    // Bloque de código donde puede ocurrir un error
} catch (error) {
    // Código que se ejecuta si ocurre un error
}

*/

//ejemplo

//Bloque finally

/*
try {
    // Bloque de código donde puede ocurrir un error
} catch (error) {
    // Código que se ejecuta si ocurre un error
} finally {
    // Código que se ejecuta siempre, haya error o no
}
*/

try {
    let resultado = 10 / 0;
    console.log(resultado);
} catch (error) {
    console.error("Se produjo un error:", error);
} finally {
    console.log("El bloque finally se ejecuta siempre");
}

