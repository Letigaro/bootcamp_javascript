// Funciones operaciones
function sum(a,b){
    return parseInt(a)+parseInt(b);
}
function substraction(a,b){
    return parseInt(a)- parseInt(b);
}
function split(a,b){
    return parseInt(a)/parseInt(b);
}
function multiplication(a,b){
    return parseInt(a)*parseInt(b);
}

// Funcion get value para el input
function getValue(){
    return document.getElementById("input-number").value;
}


// Funcion para almacenar valor, sumar y almaceanr resultado. Cambiar vairiable por el div result para ir almacenando
function operatorSum(){
    console.log("Resultado es igual a",parseInt(document.getElementById("result").innerHTML));
    console.log("Value escrito", getValue());
    var result =sum(parseInt(document.getElementById("result").innerHTML),getValue());
    console.log("resultado", result);
    result=(document.getElementById("result").innerHTML);
}
// Funcion para printar resultado final
function equal(value){
    document.getElementById("result").innerText=value;
}
// Evento para guardar el valor al escribir en el input
document.getElementById("input-number").addEventListener("change",()=> getValue());

// Evento click en operadores
document.getElementById("sum").addEventListener("click",()=> operatorSum());

// Evento click en igual
// document.getElementById("equal").addEventListener("click",equal(num1));





