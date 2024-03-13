const matriz_code= [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];
function asignartexto(){
   let textoEntrada=document.getElementById("textEntrada").value;
    textoEntrada=textoEntrada.toLowerCase();
    return textoEntrada;
}
function btnencriptar(){
    let textoaencriptar = asignartexto();
    if (typeof textoaencriptar === "string" && textoaencriptar !==""){
        textoaencriptar=encriptar(textoaencriptar);
        textosalida(textoaencriptar);
    }
    else{
        condicionesIniciales();
    }
    return;
}
function btndesencriptar(){
    let textoadesencriptar =asignartexto();
    if (typeof textoadesencriptar === "string" && textoadesencriptar !== ""){
        textoadesencriptar =desencriptar(textoadesencriptar);
        textosalida(textoadesencriptar);
    }
    else{
        condicionesIniciales();
    }
    return;
}
function btncopiar(){
    let textocopiado =document.getElementById("texto-salida");
    let button=document.getElementById("btncopiar");
    navigator.clipboard.writeText(textocopiado.textContent);
    button.setAttribute('disabled','true');
    button.textContent="Copiado";
    button.classList.add("no-hover");
    return;
}

function encriptar(mensaje){
        for(let i=0; i<matriz_code.length;i++){
            if(mensaje.includes(matriz_code[i][0])){
                mensaje=mensaje.replaceAll(
                    matriz_code[i][0],
                    matriz_code[i][1]
                );
            }
        }
        return mensaje;
    }

function desencriptar(mensaje){
    const regex = new RegExp(matriz_code.map(([_, encriptado]) => encriptado).join('|'), 'g');
    mensaje = mensaje.replace(regex, 
        match => {
        for (const [original, encriptado] of matriz_code) {
            if (match === encriptado) {
                return original;
            }
        }
        return match;
    });
    return mensaje;
    }

function textosalida(texto){
    let mensajesalida = document.querySelector(".salida-texto");
    mensajesalida.innerHTML =`
    <p id="texto-salida">${texto}</p>
    <button onclick="btncopiar();" id="btncopiar">Copiar</button>`;
    return;
}

function condicionesIniciales(){
    let mensajeinicial = document.querySelector(".salida-texto");
    mensajeinicial.innerHTML = `
    <div class="mensaje-salida">
        <img src="Imagenes/Muñeco.png">
        <p>Ningún mensaje fue encontrado</p>
        <p>Ingresa el texto que desees encriptar o desencriptar</p>
    </div>`
}
condicionesIniciales();