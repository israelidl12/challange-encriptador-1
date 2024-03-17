# Challange: Encriptador y desencriptador de texto
Este proyecto es un simple encriptador y desencriptador de texto que utiliza un algoritmo de sustitución para encriptar y desencriptar mensajes.

Las "llaves" de encriptación que utilizaremos son las siguientes:
- La letra "e" es convertida para "enter"
- La letra "i" es convertida para "imes"
- La letra "a" es convertida para "ai"
- La letra "o" es convertida para "ober"
- La letra "u" es convertida para "ufat"

## Requisitos
- Debe funcionar solo con letras minúsculas.
- No deben ser utilizados letras con acentos ni caracteres especiales.
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
- La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre estas dos opciones.
- El resultado debe ser mostrado en la pantalla.

### Ejemplo de encriptación
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

### Extra: Botón de copiar
Debe haber un botón que copie el texto encriptado/desencriptado para el área de

## Partes del proyecto
El proyecto contendra las siguientes partes:
- HTML: define las partes que tendrá la página.
- CSS: define el formato y estilo del contenido HTML.
- JS: define la funcionalidad de la página.

### HTML
En este archivo se desarrollaron las diferentes secciones de la página.
Estas incluyen:
* Encabezado
* Sección de entrada de texto
* Sección de salida de texto

###### Encabezado
Contiene el logo de la página.
###### Sección de entrada de texto
En esta sección se encuentra el área para que el usuario puede ingresar el texto, además de contener los botones para que encriptar y desencriptar.
###### Sección de salida de texto
En esta sección se mostrará un mensaje inicial para que el usuario ingrese el texto en la sección de entrada. Cuando el usuario ingrese el texto y pulse el botón de encriptar o desencriptar, la sección de salida muestra el mensaje encriptado o desencriptado.

#### Archivo index.html
```html
    <header>
        <h1 class="logo"><img src="Imagenes/Logo.png"></h1>
    </header>
    <main>
        <section class="entrada-texto">
            <textarea cols="30" rows="10" placeholder="Ingrese el texto aquí" id="textEntrada"></textarea>
            <p><img src="Imagenes/Group.png" class="admiracion">Solo letras minusculas</p>
            <button onclick="btnencriptar();" class="boton" id="encriptar">Encriptar</button>
            <button onclick="btndesencriptar();" class="boton">Desencriptar</button>
        </section>
        <section class="salida-texto">
        </section>
    </main>
```

### CSS
En el archivo CSS se le aplicaron los estilos y formatos al index.html, además de darle responsividad.

#### Archivo reset.css
El archivo reset.css se utiliza para establecer un conjunto común de estilos predeterminados para los elementos HTML en una página web. Su propósito principal es normalizar el estilo predeterminado de los elementos entre diferentes navegadores y plataformas, lo que ayuda a garantizar una apariencia más consistente y predecible de la página en diferentes entornos.

Algunos de los cambios que un archivo reset.css puede realizar incluyen la eliminación de márgenes y rellenos predeterminados, establecimiento de bordes y fondos a cero, y la normalización de tamaños de fuente y estilos de texto. Esto ayuda a los desarrolladores a partir de una base común y construir estilos específicos de la aplicación o diseño sin tener que preocuparse por inconsistencias entre navegadores.

#### Archivo estilo.css
El archivo estilo.css contiene los estilos para la sección de entrada, para los botones y para la sección de salida
```css
body{
    font-family: "Montserrat", sans-serif;
    height: 100vh;
    background: #F3F5FC;
}
header{
    width: 14%;
    height: 100vh;
    display: inline-block;
    margin: 0;
    vertical-align: top;
    box-sizing: border-box;
}
.logo{
    margin: 15px;
    padding: 15px;
}
.logo img{
    width: 40px;
}
main{
    width: 84%;
    height: 100%;
    display: inline-block;
    margin: 0;
    box-sizing: border-box;
}
.entrada-texto{
    width: 59%;
    height: 90%;
    display: inline-block;
    padding: 10px 30px 10px 20px;
    margin: 10px 10px;
    box-sizing: border-box;
    vertical-align: top;
}
.entrada-texto textarea{
    display: block;
    font-size: 20px;
    color: rgb(23, 35, 99);
    width: 100%;
    height: 80%;
    border: none;
    box-sizing: border-box;
    background: none;
}
.entrada-texto:active{
    border: none;
}
.entrada-texto textarea::placeholder{
    color: #0A3871;
}
.entrada-texto p{
    font-size: 15px;
    margin: 10px 0 0;
    color: #495057;
}
.admiracion{
    margin: 1px 5px 0 0;
}
.boton{
    width: 47.5%;
    margin: 10px 0 10px 0;
    padding: 24px;
    border-radius: 24px;
    background: #D8DFE8;
    border: 1px solid #0A3871;
    transition: 0.4s all;
    
}
.boton:hover{
    padding: 25px;
}
#encriptar{
    float: left;
    background: #0A3871;
    color: #D8DFE8;
}
#encriptar:hover{
    background: #D8DFE8;
    color: #0A3871;
}
.boton:last-child{
    float: right;
    background: #D8DFE8;
    color: #0A3871;
}
.boton:last-child:hover{
    background: #0A3871;
    color: #D8DFE8;
}
.salida-texto{
    width: 34%;
    height: 92%;
    display: inline-block;
    padding: 40px 20px;
    margin: 30px 10px;
    box-sizing: border-box;
    vertical-align: middle;
    background: #FFFFFF;
    border-radius: 32px;
    position: relative;
    float: right;
    box-shadow: 0 16px 20px 0.0002px #F0FFE9;

}
#texto-salida{
    font-size: 13px;
    color: #0A3871;
    text-align: left;
}
#btncopiar{
    width: 90%;
    margin: 10px 0 10px 0;
    padding: 24px;
    border-radius: 24px;
    background: #D8DFE8;
    color: #0A3871;
    border: 1px solid #0A3871;
    transition: 0.4s all;
    position: absolute;
    top: 85%;
}
#btncopiar:hover{
    padding: 25px;
    color: #D8DFE8;
    background: #0A3871;
}
#btncopiar.no-hover:hover{
    padding: 24px;
    background: #D8DFE8;
    color: #0A3871;
}
.mensaje-salida{
    width: 80%;
    height: 10%;
    margin: 10px 15px 10px 20px;
    position: absolute;
    top: 20%;
    bottom: calc(65% + 5px);
    
}
.mensaje-salida img{
    width: 93%;
    height: 400%;
    box-sizing: border-box;
    padding: 0;
    margin: 20px 10px;
}
.mensaje-salida p{
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    margin: 20px 0;
}
.mensaje-salida p{
    font-weight: bold;
    
}
.mensaje-salida p:last-child{
    font-weight:normal;
    font-size: 14px;
}
```

##### Responsividad de la página web
Se desarrollaron las siguientes medidas para la responsividad de la página:
- Cuando el navegador está en tamaño completo (1440 px).
- Cuando el navegador está ligeramente reducido (1100 px).
- Cuando el navegador se encuentra reducido a la mitad o se está ingresando desde una tablet (770 px).
- Cuando el navegador  se encuentra reducido en un cuarto de la pantalla o se accediendo desde un celular (375 px).

Estás son las medidas establecidas de acuerdo al diseño que se realizó.

```css
@media screen and (max-width: 1100px){
    .mensaje-salida img{
        margin: 10px 0;
    }
    .mensaje-salida p{
        width: 80%;
        margin: 20px 10px;
    }
}
@media screen and (max-width: 770px){
    header{
        display: block;
        height: auto;
        display: block;
    }
    main{
        width: 100%;
        height: auto;
        display: block;
    }
    .entrada-texto{
        display: block;
        height: auto;
        width: 100%;
        padding: 30px;
    }
    .salida-texto{
        margin-top: 30px;
        display: block;
        height: auto;
        width: 100%;
        
        
    }
    .mensaje-salida{

        top: 0;
        left: 10%;
        right: 10%;
        bottom: 0;
        height: auto;
    }
    .mensaje-salida p{
        width: auto;
        position: static;
        margin: 10px;
        
    }
    .mensaje-salida img{
        display: none;
    }
}
@media screen and (max-width: 360px){
    .boton{
        width: 100%;
        display: block;
    }
}
```

### JavaScript
Este sección contiene la funcionalidad de la página, que incluye las siguientes secciones:

- matriz_code: Almacena las correspondencias entre letras originales y sus equivalentes encriptados.
- asignartexto(): Obtiene y normaliza el texto de entrada en minúsculas.
- btnencriptar(): Encripta el texto de entrada y lo muestra como texto encriptado.
- btndesencriptar(): Desencripta el texto de entrada y lo muestra como texto desencriptado.
- btncopiar(): Copia el texto de salida al portapapeles y muestra un mensaje de confirmación.
- encriptar(mensaje): Encripta un mensaje utilizando las correspondencias definidas en matriz_code.
- desencriptar(mensaje): Desencripta un mensaje utilizando las correspondencias definidas en matriz_code.
- textosalida(texto): Muestra el texto de salida en la interfaz de usuario.
- condicionesIniciales(): Restablece el estado inicial de la interfaz cuando no hay texto para procesar.

Estas funciones trabajan juntas para proporcionar funcionalidad de encriptación, desencriptación y copiado de texto en la aplicación, asegurando una experiencia coherente y guiando al usuario en su interacción con la misma.

#### Archivo app.js
```javascript
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
    <p id="texto-salida">${texto}</p>
    <button onclick="btncopiar();" id="btncopiar">Copiar</button>`;
    return;
}

// Función para mostrar el mensaje inicial cuando no se ha ingresado ningún texto
function condicionesIniciales(){
    let mensajeinicial = document.querySelector(".salida-texto");
    mensajeinicial.innerHTML = `
    <div class="mensaje-salida">
        <img src="Imagenes/Muñeco.png">
        <p>Ningún mensaje fue encontrado</p>
        <p>Ingresa el texto que desees encriptar o desencriptar</p>
    </div>`
}

// Llamar a la función condicionesIniciales al cargar la página para mostrar el mensaje inicial
condicionesIniciales();
```

## Github
La comunidad está invitada a participar en el proyecto y añadir cualquier cambio o clonarlo si es de su agrado.

Con el siguiente link puedes clonar el repositorio:
```bash
git clone https://github.com/israelidl12/Challange-encriptador.git
```