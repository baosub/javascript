const estado = "cargando";

switch (estado) {
    case "cargando":
        console.log("Cargando...");
        break;
    case "exito":
        console.log("¡Éxito!");
        break;
    case "error":
        console.log("Error.");
        break;
    default:
        console.log("Estado desconocido.");
}
