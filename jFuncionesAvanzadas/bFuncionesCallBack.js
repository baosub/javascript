//Funciones callback

function hacerTarea(callback) {
    console.log("Haciendo tarea...");
    setTimeout(callback, 1000);
  }
  
  function tareaCompleta() {
    console.log("Tarea completada!");
  }
  
  hacerTarea(tareaCompleta);
  