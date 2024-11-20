// condicionales if, else if, else, switch



// if


//Se declara variable
let x = 10;

//se utiliza la variable en una condicion
if (x > 5) {
    console.log("x es mayor que 5");
}

//else if 
//evalua diferentes expresiones en orden secuencial

let a = 10;
if (a > 15) {
    console.log("a es mayor que 15");
} else if (a > 10) {
    console.log("a es mayor que 10");
} else if (a > 5) {
    console.log("a es mayor que 5");
} else {
    console.log("a no es mayor que 5");
}


//switch

let dia = 2;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Día desconocido");
}


