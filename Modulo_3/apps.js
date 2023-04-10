const booking ={
    count:5,
    price: 127.95,
}

const total = booking.count * booking.price;
const discount = total > 500 ? total * 0.2 : 0;

if (total > 500 && discount > 0){
    const discounted= total * discount;
    console.log("Total con descuento del 20%:", discounted + "€");
} else {
    console.log("Total sin descuento:", total + "€"); 
}

