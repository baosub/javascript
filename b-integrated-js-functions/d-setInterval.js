// Ejemplo de setInterval
const intervalo = setInterval(() => {
    console.log("Esto se ejecuta cada 3 segundos.");
}, 3000);

// Para detener el intervalo después de 10 segundos
setTimeout(() => {
    clearInterval(intervalo);
    console.log("Intervalo detenido.");
}, 10000);
