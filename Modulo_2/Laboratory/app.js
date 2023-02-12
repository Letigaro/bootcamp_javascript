var hotel= {
    name:"",
    location:"",
};
rating={
    puntuacion:"",
    stars:"&#9734;",
    stars2:"&#9733; ",
    anonymous:"",
}


// Nombre de hotel y ubicacion
hotel.name=prompt("Escriba el nombre del hotel, por favor");
document.getElementById("hotelname").innerHTML="Hotel " + hotel.name + "<br>";
hotel.location=prompt("Escriba la ubicación del hotel, por favor");
document.getElementById("hotellocation").innerHTML= "Ubicado en " + hotel.location;

// Reseña de hotel

rating.puntuacion=prompt("¿Qué puntuación le da al hotel del 1 al 5?");
var puntuacionfinal=rating.stars2.repeat(rating.puntuacion)+rating.stars.repeat(5-rating.puntuacion);
document.getElementById("stars").innerHTML= puntuacionfinal;

// Reseña del hotel
 
rating.anonymous=confirm("¿Quiere que su reseña sea anónima?");
document.getElementById("review").checked = rating.anonymous;









