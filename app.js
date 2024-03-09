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

function encriptar(){
    let textoaencriptar = asignartexto();
    if(typeof textoaencriptar === "string" && textoaencriptar !== ""){
        for(let i=0; i<matriz_code.length;i++){
            if(textoaencriptar.includes(matriz_code[i][0])){
                textoaencriptar=textoaencriptar.replaceAll(
                    matriz_code[i][0],
                    matriz_code[i][1]
                );
            }
        }
        textosalida(textoaencriptar);
    }
    return;
}

function desencriptar(){
    let textoadesencriptar = asignartexto();
    if(typeof textoadesencriptar === "string" && textoadesencriptar !== ""){
        for(let i=0;i<matriz_code.length;i++){
            if(textoadesencriptar.includes(matriz_code[i][1])){
                textoadesencriptar=textoadesencriptar.replaceAll(
                    matriz_code[i][1],
                    matriz_code[i][0]
                )
            }
        }
        textosalida(textoadesencriptar);
    }
    return;
}

function textosalida(texto){
    let mensajesalida = document.querySelector(".salida-texto");
    mensajesalida.innerHTML =`
    <p id="texto-salida">${texto}</p>
    <button>Copiar</button>`;
    return;
}