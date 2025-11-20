export function mostrarNotas(contenedor, notas) {
    contenedor.innerHTML = "";
    notas.forEach((nota) => {
        const p = document.createElement("p");
        p.textContent = nota;
        contenedor.appendChild(p);
    });
}
