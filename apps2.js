const booking1 = { count: 3, price: 127.95 };
const booking2 = { count: 5, price: 112.95 };

// Comparar si las reservas son iguales

if (booking1.count == booking2.count && booking2.price==booking2.price){
    console.log("Las reseervas son iguales");
} else {
    console.log("Las reseervas no son iguales");
}

// Mostrar la suma del número de noches de las dos reservas

console.log(booking1.count+booking2.count);

// Comparar dos reservas para mostrar la de mayor número de noches.

if (booking1.count == booking2.count){
    console.log("Ambas reservas tienen el mismo número de noches");
} else if (booking1.count > booking2.count){ 
    console.log("La primera reservas tienen un mayor número de noches:", booking1[count]);
} else if (booking1.count < booking2.count){ 
    console.log("La segunda reservas tienen un mayor número de noches:", booking2[count]);

}

// Ampliar una noche más una reserva

booking1.count ++;
console.log(booking1.count);

// Calcular la diferencia de precio total entre dos reservas (incluidos descuentos). 
// Mostrar número de reservas a las que se podrían aplicar descuento.

const total1=booking1.count*booking1.price;
const total2=booking2.count*booking2.price;
const reservasnum;

if (total1 > 500){
    const total1= (total1)*0.8;
    reservasnum++;
}
if (total2 > 500){
    const total2= (total2)*0.8;
    reservasnum++;
} 
console.log("Número de reservas con descuento:", reservasnum); 

3
const diferencia=total1-total2;
console.log("La diferencia de precio entre las reservas es:", diferencia); 

// Comparar dos reservas para mostrar la de mayor precio total (incluidos descuentos). 

if (total1==total2){
    console.log("El precio total de las reservas son iguales");
} else if (total1>total2){
    console.log("El precio total de la primera reserva es mayor"), total1;
} else if (total1<total2){
    console.log("El precio total de la segunda reserva es mayor", total2);
}

// Mostrar "Todas con descuento" si las dos reservas tienen descuentos.
// Mostrar la suma del precio total con descuentos de las dos reservas.

if (booking1.count*booking1.price && booking2.count*booking2.price > 500){
    console.log("Ambas reservas tienen un 20% de descuento. Precio primera reserva con descuento:", total1, ". Precio segunda reserva con descuento: ", total2);
    const totalsuma= total1+total2;
    console.log("El total precio de ambas reservas es: ", totalsuma);
}
