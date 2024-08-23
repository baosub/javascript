const mostrarMensaje = (esVisible) => {
    if (esVisible) {
        console.log("El mensaje es visible.");
    } else {
        console.log("El mensaje no es visible.");
    }
};

mostrarMensaje(true); // El mensaje es visible.
mostrarMensaje(false); // El mensaje no es visible.
