

var inputTexto = document.querySelector("#input-texto");
var muneco = document.getElementById("muneco");
var mensaje = document.getElementById("mensaje");
var prompt1 = document.getElementById("prompt1");
var prompt2 = document.getElementById("prompt2");
var copiar = document.getElementById("copiar");
const valores = [["e", "enter"], ["i", "imer"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];



// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function copiarMensaje() {
    mensaje.select();
  
    navigator.clipboard.writeText(mensaje.value);
}


function btnEncriptar(){
       
    mensaje.value = limpiarRectangulo(encriptar(inputTexto.value));
}

function btnDesencriptar(){

    mensaje.value = limpiarRectangulo(desencriptar(inputTexto.value));
}

function limpiarRectangulo(texto){
    if (inputTexto.value != "") {
        muneco.style.display = "none";
        prompt1.style.display = "none";
        prompt2.style.display = "none";
        copiar.style.display = "block";
        mensaje.style.display= "block";
        inputTexto.value = "";

        return texto;
    }
    if (mensaje.value != "") {
        activarRectangulo();
    }
    
}

function activarRectangulo() {
        muneco.style.display = "block";
        prompt1.style.display = "contents";
        prompt2.style.display = "contents";
        copiar.style.display = "none";
        mensaje.style.display= "none";
        
}

function encriptar(texto){
    texto = texto.toLowerCase()
    

    for (let index = 0; index < valores.length; index++) {

        if (texto.includes(valores[index][0])) {
            texto = texto.replaceAll(valores[index][0], valores[index][1]);
        }
        
    }
    return texto;
}


function desencriptar(texto){

    for (let index = 0; index < valores.length; index++) {
        if (texto.includes(valores[index][1])) {
            texto = texto.replaceAll(valores[index][1], valores[index][0]);
        }
        
    }
    return texto;
}

