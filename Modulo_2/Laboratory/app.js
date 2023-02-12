var hotel= {
    name:"",
    location:"",
};
rating={
    puntuacion:"",
    stars:"&#9734;",
    anonymous:"",
}

checkbox={
    checked:"checked",
    nochecked:"",
}

hotel.name=prompt("Escriba el nombre del hotel, por favor");
document.getElementById("hotelname").innerHTML="Hotel" + hotel.name;
hotel.location=prompt("Escriba la ubicación del hotel, por favor");
document.getElementById("hotellocation").innerHTML=hotel.location;


rating.puntuacion=prompt("¿Qué puntuación le da al hotel?");
var puntuacionfinal=rating.stars.repeat(rating.puntuacion);
document.getElementById("stars").innerHTML= puntuacionfinal;


rating.anonymous=confirm("¿Quiere que su reseña sea anónima?");
console.log(checkbox.checked);
document.getElementById("review").attributes=checkbox.checked;









