const matriz_code= [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];
let textoaencriptar;

function encriptar(textoaencriptar){
    textoaencriptar=document.getElementById("textEntrada").value;
    textoaencriptar=textoaencriptar.toLowerCase();
    if(typeof textoaencriptar === "string" && textoaencriptar !==""){
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
}

function textosalida(texto){
    let mensajesalida = document.querySelector(".salida-texto");
    mensajesalida.innerHTML =`
    <p id="texto-salida">${texto}</p>
    <button>Copiar</button>`;
    return;
}