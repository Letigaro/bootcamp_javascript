const carrito = [
    {
        id: 74934, 
        name: "blusa",
        price: 13.23,
        count: 10,
        premium: true,
    },
    {
        id: 23675, 
        name: "bolso",
        price: 20.54,
        count: 5,
        premium: true,
    },
    {
        id: 958934, 
        name: "jeans",
        price: 8.34,
        count: 15, 
        premium: true,
    },
    {
        id: 59339, 
        name: "pendientes",
        price: 1.00,
        count: 15,
        premium: false,
    }
];


// Listar todos los productos


function printarItems(producto){
    console.log("ID" + ":" + producto.id);
    console.log("NAME" + ":" + producto.name);
    console.log("PRICE" + ":" + producto.price);
    console.log("COUNT" + ":" + producto.count);
    console.log("PREMIUM" + ":" + producto.premium);
    console.log("----------------------------------");
}

function printarArray (namearray){
    for (x=0; x<namearray.length; x++){
        y=x+1;
        console.log("Item:" + y);
        printarItems (namearray[x]);
     }; 
}

console.log("Items del carrito de la compra:");
console.log("----------------------------------");
printarArray(carrito);

// Eliminar los prodcutos con id 74934 del carrito de la compra

 function buscarItemID(producto,number){
    var indice;
     for (x=0; x<producto.length; x++){
         if (producto[x].id== number){
            indice=x;
         }
     }
     return indice;
}
carrito.splice(buscarItemID(carrito,74934),1);
console.log("----------------------------------");
console.log("----------------------------------");

console.log("Item post borrado:");
printarArray(carrito);


// Calcular al total del carrito de la compra (el coste de cada linea es precio*cantidad)

console.log("----------------------------------");
console.log("----------------------------------");

function calcularprecioItems (producto){
    let total =0; 
    for (i=0; i<producto.length; i++){
        total = total + ((producto[i].count) * (producto[i].price));
    }
    return total;
}

console.log ("Precio de la cantidad total de items:", calcularprecioItems (carrito)); 

// Aplicar un descuento del 5% si la compra es superior a 100
let NewPrecio;
 if (calcularprecioItems(carrito) > 100){
    NewPrecio= (calcularprecioItems(carrito))*0.95;
    console.log("Precio con descuento por pedido superior a 100€:", NewPrecio); 
 }
// Si todos los productos son premium enviar un mensaje con "pedido sin gasto de envio"

let z=0;
for (x=0; x<carrito.length; x++){
    if (carrito[x].premium == true){
        z++;
    }
}
if (z == carrito.length){
    console.log("Todos los productos de su carrito son premium, por lo tanto, pedido sin gastos de envío!");
}
else{
    console.log("Pedido con gastos de envío!");
}

// Filtrar por los productos que sean premium
 function printarPremiumItems(namearray){
    let h=0;
    for (x=0; x<namearray.length; x++){
        if (namearray[x].premium== true){
            h++;
            console.log("Item:" + h);
            printarItems (namearray[x]);
        }
     }; 
 }
 console.log("----------------------------------");
 console.log("Items premium de su pedido:")
 console.log("----------------------------------");
 printarPremiumItems(carrito);

// Mostrar el carrito en un listado de html básico. 
// DUDA ¿Cómo crear estos divs de manera automática según el length del array?

function printarporpantallaItems(array, number){
    document.getElementById("item-number"+number).innerHTML= "ITEM " + number + "<br>";
    document.getElementById("item-id"+number).innerHTML= "ID:" + array[number].id + "<br>";
    document.getElementById("item-name"+number).innerHTML= "Name:" + array[number].name + "<br>";
    document.getElementById("item-price"+number).innerHTML= "Price:" + array[number].price + "€" + "<br>";
    document.getElementById("item-count"+number).innerHTML= "Count:" + array[number].count + "<br>";
    if (array[number].premium == true){
        document.getElementById("item-premium"+number).innerHTML= "Premium:" + "&#10003;"+ "<br>";
    }
    else{
        document.getElementById("item-premium"+number).innerHTML= "Premium:" + "&#10007;"+ "<br>";
    }
}

for (x=0; x<carrito.length; x++){
    printarporpantallaItems(carrito,x);
}





