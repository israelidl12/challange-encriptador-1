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
    for(let i=0; i<matriz_code.length;i++){
        if(textoaencriptar.includes(matriz_code[i][0])){
            textoaencriptar=textoaencriptar.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    console.log(textoaencriptar);
}