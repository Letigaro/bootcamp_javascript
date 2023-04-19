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
    var result =sum(parseInt(document.getElementById("result").innerHTML),getValue());
    document.getElementById("result").innerHTML=result;
}
function operatorSubstraction(){
    var result =substraction(parseInt(document.getElementById("result").innerHTML),getValue());
    document.getElementById("result").innerHTML=result;
}
function operatorSplit(){
    divisor=getValue();
    if (divisor=0){
        alert("It is not possible to split by 0. Try again.");
    }
    else{
        var result =split(parseInt(document.getElementById("result").innerHTML),getValue());
        document.getElementById("result").innerHTML=result;
    }
}
function operatorMultiplication(){
    var result =multiplication(parseInt(document.getElementById("result").innerHTML),getValue());
    document.getElementById("result").innerHTML=result;
}
// Funcion para printar resultado final. Como hacer para que al final cuando le des a igual tenga en cuenta el ultimo value. 
// Porque yo estoy printando ya el resultado todo el rato
function equal(){
   document.getElementById("result").innerHTML;
}
// Evento para guardar el valor al escribir en el input
// document.getElementById("input-number").addEventListener("change",()=> getValue());

// Evento click en operadores
document.getElementById("sum").addEventListener("click",()=> operatorSum());
document.getElementById("substraction").addEventListener("click",()=> operatorSubstraction());
document.getElementById("split").addEventListener("click",()=> operatorSplit());
document.getElementById("multiplication").addEventListener("click",()=> operatorMultiplication());

// Evento click en igual
document.getElementById("equal").addEventListener("click",()=> equal());





