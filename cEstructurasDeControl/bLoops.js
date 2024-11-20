//Bucles for, while do-while

//for

for (let i = 0; i < 5; i++) {
    console.log('loop for', i);
}

//while

let b = 0;
while (b < 5) {
    console.log( 'loop while',b);
    b++;
}

//do-while

let c = 5;
do {
    console.log(c);
    c++;
} while (c < 5);


//Sentencia break

for (let d = 0; d < 10; d++) {
    if (d === 4) {
        break;
    }
    console.log('usando sentencia break: ', d);
}

//tambien se usa break en la estructura de control switch

let dia = 3;
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


//Sentencia continue

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}







