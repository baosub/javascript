//asyn/Await

async function miFuncion() {
    try {
      let resultado = await miPromesa;
      console.log(resultado); // "La operación fue exitosa!"
    } catch (error) {
      console.log(error); // "La operación falló."
    }
  }
  
  miFuncion();
  