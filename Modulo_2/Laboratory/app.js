var hotel= {
    name:"",
    location:"",
};
hotel.name=prompt("Type the hotel name, please");
document.getElementById("hotelname").innerHTML="Hotel" + hotel.name;
hotel.location=prompt("Type the hotel location, please");
document.getElementById("hotellocation").innerHTML=hotel.location;

var rating=confirm("quieres que su reseña sea anonima?");
console.log(rating);
document.getElementById("review").innerHTML=rating;
document.getSelection("review").innerHTML=rating;







