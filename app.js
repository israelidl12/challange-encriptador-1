// Matriz que contiene las correspondencias entre caracteres originales y sus versiones encriptadas
const matriz_code= [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

// Función para obtener el texto de entrada y convertirlo a minúsculas
function asignartexto(){
   let textoEntrada=document.getElementById("textEntrada").value;
   textoEntrada=textoEntrada.toLowerCase();
   return textoEntrada;
}

// Función activada al hacer clic en el botón "Encriptar"
function btnencriptar(){
    // Obtener el texto de entrada del elemento de entrada y convertirlo a minúsculas
    let textoaencriptar = asignartexto();

    // Verificar si el texto obtenido es una cadena válida y no está vacío
    if (typeof textoaencriptar === "string" && textoaencriptar !==""){
        // Si el texto es válido, llamar a la función encriptar() para encriptarlo
        textoaencriptar=encriptar(textoaencriptar);

        // Mostrar el texto encriptado llamando a la función textosalida()
        textosalida(textoaencriptar);
    }
    else{
        // Si el texto no es válido, mostrar el mensaje inicial llamando a condicionesIniciales()
        condicionesIniciales();
    }
    return;
}

// Función activada al hacer clic en el botón "Desencriptar"
function btndesencriptar(){
    // Obtener el texto de entrada del elemento de entrada y convertirlo a minúsculas
    let textoadesencriptar =asignartexto();
    
    // Verificar si el texto obtenido es una cadena válida y no está vacío
    if (typeof textoadesencriptar === "string" && textoadesencriptar !== ""){
        // Si el texto es válido, llamar a la función desencriptar() para desencriptarlo
        textoadesencriptar =desencriptar(textoadesencriptar);

        // Mostrar el texto desencriptado llamando a la función textosalida()
        textosalida(textoadesencriptar);
    }
    else{
        // Si el texto no es válido, mostrar el mensaje inicial llamando a condicionesIniciales()
        condicionesIniciales();
    }
    return;
}

// Función activada al hacer clic en el botón "Copiar"
function btncopiar(){
    // Obtener el elemento de texto de salida
    let textocopiado =document.getElementById("texto-salida");

    // Obtener el botón de copiar
    let button=document.getElementById("btncopiar");
    // Copiar el texto de salida al portapapeles utilizando la API navigator.clipboard.writeText()
    navigator.clipboard.writeText(textocopiado.textContent);

    // Desactivar el botón y cambiar su texto para indicar que el texto ha sido copiado
    button.setAttribute('disabled','true');
    button.textContent="Copiado";
    button.classList.add("no-hover");
    return;
}

// Función para encriptar un mensaje
function encriptar(mensaje){
    // Iterar sobre cada par de la matriz de codificación
    for(let i=0; i<matriz_code.length;i++){
        // Verificar si el mensaje contiene la letra original actual
        if(mensaje.includes(matriz_code[i][0])){
            // Si sí, reemplazar todas las ocurrencias de la letra original por su versión encriptada
            mensaje=mensaje.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
                );
            }
        }
        // Devolver el mensaje encriptado
        return mensaje;
    }

// Función para desencriptar un mensaje
function desencriptar(mensaje){
    // Crear una expresión regular que coincida con cualquier cadena encriptada en el mensaje
    const regex = new RegExp(matriz_code.map(([_, encriptado]) => encriptado).join('|'), 'g');

    // Reemplazar todas las ocurrencias de cadenas encriptadas por sus equivalentes originales
    mensaje = mensaje.replace(regex, 
        match => {
        // Iterar sobre cada par de la matriz de codificación    
        for (const [original, encriptado] of matriz_code) {
            // Si la cadena encriptada actual coincide con la coincidencia 'match', devolver la cadena original
            if (match === encriptado) {
                return original;
            }
        }
        // Si no se encontró una coincidencia, devolver la cadena original
        return match;
    });
    // Devolver el mensaje desencriptado
    return mensaje;
    }

// Función para mostrar el texto de salida en el documento HTML
function textosalida(texto){
    let mensajesalida = document.querySelector(".salida-texto");
    mensajesalida.innerHTML =`
    <div class="mensaje-salida">
        <p id="texto-salida">${texto}</p>
        <button onclick="btncopiar();" id="btncopiar">Copiar</button>
    </div>`;
    return;
}

// Función para mostrar el mensaje inicial cuando no se ha ingresado ningún texto
function condicionesIniciales(){
    let mensajeinicial = document.querySelector(".salida-texto");
    mensajeinicial.innerHTML = `
    <div class="mensaje-inicial">
        <img src="Imagenes/Muñeco.png">
        <p>Ningún mensaje fue encontrado</p>
        <p>Ingresa el texto que desees encriptar o desencriptar</p>
    </div>`
}

// Llamar a la función condicionesIniciales al cargar la página para mostrar el mensaje inicial
condicionesIniciales();