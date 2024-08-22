// Ejemplo de Promises
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("¡Promesa cumplida!"), 2000);
});

promesa.then(mensaje => console.log(mensaje)); // ¡Promesa cumplida! (después de 2 segundos)
