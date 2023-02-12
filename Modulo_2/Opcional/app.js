var hotel= {
   Mercer:{
    name:"Mercer",
    location:"Sevilla",
    imagen:"https://www.kayak.es/rimg/himg/53/b9/dc/ice-142408-72025925_3XL-995047.jpg",
    },
    Silken:{
        name:"Silken",
        location:"Sevilla",
        imagen:"https://www.viajeselcorteingles.es/imagenes/hoteles/espana/sevilla/mr3j79uk/12_x.jpg",
        }
}
rating={
    puntuacion:"",
    stars:"&#9734;",
    stars2:"&#9733; ",
    anonymous:"",
}
var namehotel;
// Nombre de hotel y ubicacion
namehotel=prompt("¿Sobre que hotel quiere hacer la reseña: Mercer o Silken?");

document.getElementById("hotelname").innerHTML="Hotel " + hotel[namehotel].name + "<br>";
document.getElementById("hotellocation").innerHTML= "Ubicado en " + hotel[namehotel].location;
document.getElementById("hotels-image").src = hotel[namehotel].imagen;

// Reseña de hotel

rating.puntuacion=prompt("¿Qué puntuación le da al hotel del 1 al 5?");
var puntuacionfinal=rating.stars2.repeat(rating.puntuacion)+rating.stars.repeat(5-rating.puntuacion);
document.getElementById("stars").innerHTML= puntuacionfinal;

// Reseña del hotel
 
rating.anonymous=confirm("¿Quiere que su reseña sea anónima?");
document.getElementById("review").checked = rating.anonymous;









