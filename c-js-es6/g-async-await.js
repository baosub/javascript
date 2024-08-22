// Ejemplo de async/await
const obtenerDatos = async () => {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const datos = await respuesta.json();
    console.log(datos);
};

obtenerDatos();
