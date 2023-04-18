// Vamos a crear una calculadora sencilla. Para ello:
// Como primer paso, crea 4 funciones, una para cada una de las 4 operaciones que vamos a impementar: suma, resta, multiplicación y división. Las funciones deberán tomar como entrada dos operando y devolver el resultado de aplicar la operación.
// Prueba las funciones simplemente jugando con ellas y mostrando el resultado a traves de la consola.
// Una vez tengas lo anterior, añade al HTML dos inputs numéricos, que serán los operandos A y B, y también 4 botones, uno por cada operación (suma, resta, multiplicación y división).
// El usuario deberá rellenar los 2 inputs con sendos operandos y clickar uno de los botones. El programa debe mostrar por pantalla el resultado de la operación.
// Opcional: Si alguno de los operandos es vacío, muestra como resultado "Error".



// Funciones operaciones
function sum (a,b){
    return parseInt(a)+parseInt(b);
}
function substraction (a,b){
    return parseInt(a)- parseInt(b);
}
function split (a,b){
    return parseInt(a)/parseInt(b);
}
function multiplication (a,b){
    return parseInt(a)*parseInt(b);
}

// Funciones obtener valores

function getValue1(){
    return document.getElementById("input-firstnumber").value;
}

function getValue2(){
    return document.getElementById("input-secondnumber").value;
}
// Funciones printar valores

function printsumresult(){
    var value1=getValue1();
    var value2= getValue2();
    if (!value1 || !value2){
        alert("It is not possible to perform the calculation because one of more values are empty. Try again.");
        document.getElementById("result").innerText="ERROR";   
    }else{
        document.getElementById("result").innerText=sum(value1,value2);
    }

}
function printsubtractionresult(){
    var value1=getValue1();
    var value2= getValue2();
    if (!value1 || !value2){
        alert("It is not possible to perform the calculation because one of more values are empty. Try again.");
        document.getElementById("result").innerText="ERROR";   

    }else{
        document.getElementById("result").innerText=substraction(value1,value2);   
    }
}
function printsplitresult(){
    var value1=getValue1();
    var value2= getValue2();
    if (!value1 || !value2){
        alert("It is not possible to perform the calculation because one of more values are empty. Try again.");
        document.getElementById("result").innerText="ERROR";   

    }else{
        document.getElementById("result").innerText=split(value1,value2);
    }
}
function printmultiplicationresult(){
    var value1=getValue1();
    var value2= getValue2();
    if (!value1 || !value2){
        alert("It is not possible to perform the calculation because one of more values are empty. Try again.");
        document.getElementById("result").innerText="ERROR";   

    }else{
        document.getElementById("result").innerText=multiplication(value1,value2);
    }
}

// Eventos para el click 

document.getElementById("sum").addEventListener("click",printsumresult);
document.getElementById("subtraction").addEventListener("click",printsubtractionresult);
document.getElementById("split").addEventListener("click",printsplitresult);
document.getElementById("multiplication").addEventListener("click",printmultiplicationresult);




