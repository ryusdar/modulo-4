
export function guardarNotas(notas) {
    localStorage.setItem("notas", JSON.stringify(notas));
}

// Obtiene notas de localStorage
export function cargarNotas() {
    return JSON.parse(localStorage.getItem("notas")) || [];
}


export function borrarNotas() {
    localStorage.removeItem("notas");
}
