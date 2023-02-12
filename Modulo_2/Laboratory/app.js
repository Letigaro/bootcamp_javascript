var hotel= {
    name:"Mercer",
    location:"Sevilla",
    imagen:"https://www.kayak.es/rimg/himg/53/b9/dc/ice-142408-72025925_3XL-995047.jpg",
}
rating={
    puntuacion:"",
    stars:"&#9734;",
    stars2:"&#9733; ",
    anonymous:"",
}
// Nombre de hotel y ubicacion
document.getElementById("hotelname").innerHTML="Hotel " + hotel.name + "<br>";
document.getElementById("hotellocation").innerHTML= "Ubicado en " + hotel.location;
document.getElementById("hotels-image").src = hotel.imagen;

// Reseña de hotel

rating.puntuacion=prompt("¿Qué puntuación le da al hotel del 1 al 5?");
var puntuacionfinal=rating.stars2.repeat(rating.puntuacion)+rating.stars.repeat(5-rating.puntuacion);
document.getElementById("stars").innerHTML= puntuacionfinal;

// Reseña del hotel
 
rating.anonymous=confirm("¿Quiere que su reseña sea anónima?");
document.getElementById("review").checked = rating.anonymous;









