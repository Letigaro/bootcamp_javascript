//  Ejercicio 1: calcular el total de la compra de un producto (su precio multiplicado por la cantidad) y aplicar el IVA del 21% excepto para los siguientes tipos de producto: "alimentacion": 10% y "libro": 4%

const product = { 
    count: 4,
    price: 12.55,
    type: "libro",
}
var precioSiniva;
var precioConiva;
var precioConivaRedondeo;

var iva= 1.21;

switch (product.type){
    case "alimentacion": iva=1.10; break;
    case "libro": iva=1.04; break;
}

if (product.count < 0){
    product.count=0
}

precioSiniva= product.count * product.price;
precioSiNivaRedondeo=precioSiniva.toFixed(2);
console.log("El precio total de los articulos sin IVA es ", precioSiNivaRedondeo , "€" );

precioConiva= precioSiniva * iva;
precioConivaRedondeo=precioConiva.toFixed(2);
console.log("El precio total de los articulos con IVA es ", precioConivaRedondeo , "€" );


//  Extra 1: sueldo neto en nómina 

const empleado = {
    bruto: 50000,
    hijos: 0,
    pagas: 12,
  };
var retencion;

if (empleado.bruto<12000){
    retencion=0;
} else if (empleado.bruto<=24000 && empleado.bruto>=12000 ){
    retencion=0.08;
} else if (empleado.bruto<=34000 && empleado.bruto>=24000 ){
    retencion=0.16;
} else if (empleado.bruto>34000 ){
    retencion=0.30;
}
if (empleado.hijos!=0){
    retencion= retencion-0.02;
}

console.log("La retención aplicada según la normativa es del ", retencion, "%");

var netoAnualNomina;
netoAnualNomina=empleado.bruto*(1-retencion);
console.log("El sueldo neto anual es de ", netoAnualNomina, "€");

var netoMensualNomina;
var netoMensualNominaRedondeo;

netoMensualNomina= netoAnualNomina / empleado.pagas; 
netoMensualNominaRedondeo=netoMensualNomina.toFixed(2);
console.log("El sueldo neto mensual con", empleado.pagas, "pagas es de ", netoMensualNominaRedondeo, "€");



