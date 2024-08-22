// Ejemplo de default parameters
const saludar = (nombre = "Visitante") => `Hola, ${nombre}!`;
console.log(saludar()); // Hola, Visitante!
console.log(saludar("Carlos")); // Hola, Carlos!
