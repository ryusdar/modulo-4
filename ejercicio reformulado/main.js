import { guardarNotas, cargarNotas, borrarNotas } from "./storajes.js";
import { mostrarNotas } from "./notas.js";

const listaNotas = document.getElementById("listaNotas");
const textarea = document.getElementById("nota");
const btnGuardar = document.getElementById("btnGuardar");
const btnBorrar = document.getElementById("btnBorrar");

let notas = cargarNotas();
mostrarNotas(listaNotas, notas);

// Guardar nota
btnGuardar.addEventListener("click", () => {
    const texto = textarea.value.trim();
    if (!texto) {
        alert("Escribí algo antes de guardar.");
        return;
    }

    notas.push(texto);
    guardarNotas(notas);
    mostrarNotas(listaNotas, notas);
    textarea.value = "";
});

// Borrar todo
btnBorrar.addEventListener("click", () => {
    borrarNotas();
    notas = [];
    mostrarNotas(listaNotas, notas);
});
