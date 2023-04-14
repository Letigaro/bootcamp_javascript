var name1="Javier";
console.log("Hola! Me llamo", name1);

var name2 ="Carlos";
console.log("Hola! Me llamo", name2);

// Estamos repitiendo código para ello creamos una función


function sayName(name){
    console.log("Hola! Me llamo", name);
}

sayName("Javier");
sayName("Carlos");
sayName("Bibiana");
sayName("Encarni");
sayName("Jose Maria");

// funcion clásica


function sumNumber(){
    var result=3+2;
    console.log("The result is", result);
}

sumNumber();

// funcion anonima. sin nombre, no se puede llamar, por ello hay que asignarla a una variable;

var sayHello= function(){
    console.log("Hellooooo");
};

sayHello();
// cual es mejor? lo veremos mas adelante

// Arrow function. se trata de una funcion anonima

var sayHi= ()=> {
    console.log("Hiiii");
};

sayHi();

// Parámetros de entrada de una función

// EVENTOS

var handleButtonClick = () => alert("Button Clicked!");

document.getElementById("my-button").addEventListener("click", handleButtonClick);