/*
Nombre del Archivo: cuerpo.js.
Creador(res): Noel de Jesus Castellanos Ruiz y 	Levi Noe Ibarra Moreno.
Fecha de Creación: 06/03/25.
*/

/* Cambio de Caluladora */
function Cambiar_Cientifica_a_Estandar() {;
    let TEXTO = document.getElementById("insertar_texto");
    let CIENTIFICA = document.getElementById("Cientifica");

    if(CIENTIFICA && TEXTO) {
        TEXTO.innerHTML = "Caluladora Estándar";
        CIENTIFICA.style.display = "none";
    } else {
        console.error("No existe ninguna etiCIENTIFICAqueta llamada \"", {CALULADORA}, "\".");
    }
}

function Cambiar_Estandar_a_Cientifica() {
    let TEXTO = document.getElementById("insertar_texto");
    let CIENTIFICA = document.getElementById("Cientifica");

    if(CIENTIFICA) {
        TEXTO.innerHTML = "Caluladora Científica";
        CIENTIFICA.style.display = "flex";
    } else {
        console.error("No existe ninguna etiqueta llamada \"", {CALULADORA}, "\".");
    }
}

/* Borrar */
function borrarOperacion() {
    document.getElementById("operacion").innerText = "";
}

/* Borrar Operación */
function borrarResultado() {
    document.getElementById("resultado").innerText = "";
}

/* Borrar Todo */
function borrarTodo() {
    borrarOperacion();
    borrarResultado();
}

/* Mostrar Número(s) */
function MosNum(Num) {
    document.getElementById("operacion").innerText += Num;
}

/* Mostrar Simbolos */
function Simbolo_Suma() {
    let operacion = document.getElementById("operacion").innerText;
    if (operacion && !/[+\-x\/\^√%]$/.test(operacion)) {
        document.getElementById("operacion").innerText += " +  ";
    }
}

function Simbolo_Resta() {
    let operacion = document.getElementById("operacion").innerText;
    if (operacion && !/[+\-x\/\^√%]$/.test(operacion)) {
        document.getElementById("operacion").innerText += " -  ";
    }
}

function Simbolo_Multiplicacion() {
    let operacion = document.getElementById("operacion").innerText;
    if (operacion && !/[+\-x\/\^√%]$/.test(operacion)) {
        document.getElementById("operacion").innerText += " x  ";
    }
}

function Simbolo_Divicion() {
    let operacion = document.getElementById("operacion").innerText;
    if (operacion && !/[+\-x\/\^√%]$/.test(operacion)) {
        document.getElementById("operacion").innerText += " /  ";
    }
}


function Simbolo_Pi() {
    document.getElementById("operacion").innerText += Math.PI;
}

function Simbolo_Potencia() {
    let operacion = document.getElementById("operacion").innerText;
    if (operacion && !/[+\-x\/\^√%]$/.test(operacion)) {
        document.getElementById("operacion").innerText += "^2";
    }
}

function Simbolo_Raiz() {
    let operacion = document.getElementById("operacion").innerText;
    /*if (operacion && !/[+\-x\/\^√%]$/.test(operacion)) {
        document.getElementById("operacion").innerText += "√";
    }*/
    // Si no hay número antes, agregar directamente "√"
    if (operacion === "" || /[+\-x\/\^%]$/.test(operacion)) {
        document.getElementById("operacion").innerText += " √";
    } else {
        // Si hay número antes, aplicar raíz cuadrada directamente
        document.getElementById("operacion").innerText += "√";
    }
}

function Simbolo_Modulo() {
    let operacion = document.getElementById("operacion").innerText;
    if (operacion && !/[+\-x\/\^√%]$/.test(operacion)) {
        document.getElementById("operacion").innerText += " % ";
    }
}

/* Calcular Resultado */
function calcularResultado() {
    let operacion = document.getElementById("operacion").innerText;

    // Reemplazar operadores personalizados por operadores de JavaScript
    operacion = operacion.replace(/x/g, "*"); // Multiplicación
    operacion = operacion.replace(/\^/g, "**"); // Potencia
    operacion = operacion.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)"); // Raíz cuadrada

    try {
        let resultado = eval(operacion); // Evalúa la expresión matemática
        document.getElementById("resultado").innerText = resultado;
    } catch (error) {
        document.getElementById("resultado").innerText = "Error";
    }
}

function cambiarSigno() {
    let operacion = document.getElementById("operacion");
    if (operacion.innerText !== "") {
        let num = parseFloat(operacion.innerText);
        operacion.innerText = num * -1;
    }
}

function Limite() {
    let operacion = document.getElementById("operacion");
    let valor = parseFloat(operacion.innerText);

    if (!isNaN(valor)) {
        if (valor > 35) {
            operacion.style.fontSize = "14px"; // Disminuir tamaño si supera el rango
        } else {
            operacion.style.fontSize = "24px"; // Tamaño normal
        }
    }

    if (operacion.innerText.length >= 50) {
        operacion.innerText = operacion.innerText.substring(0, max);
    }
}

function deciamal() {
    let operacion = document.getElementById("operacion");
    if (!operacion.innerText.includes(".")) {
        operacion.innerText += ".";
    }
}


// Observador de cambios en el div (para ejecutar automáticamente las funciones)
const observer = new MutationObserver(() => {
    Limite();
});

// Configuración del observador
observer.observe(operacion, { childList: true, subtree: true });

// Ejemplo de cómo actualizar el div dinámicamente
function actualizarDiv(valor) {
    operacionDiv.innerText = valor;
}