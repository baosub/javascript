//promesas

let miPromesa = new Promise((resolve, reject) => {
    let exito = true;
  
    if (exito) {
      resolve("La operación fue exitosa!");
    } else {
      reject("La operación falló.");
    }
  });
  
  miPromesa.then((mensaje) => {
    console.log(mensaje); // "La operación fue exitosa!"
  }).catch((mensaje) => {
    console.log(mensaje); // "La operación falló."
  });
  