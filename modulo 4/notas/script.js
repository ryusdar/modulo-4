const listaNotas = document.getElementById("listaNotas");
let notas = JSON.parse(localStorage.getItem("notas")) || [];

function mostrarNotas() {
    listaNotas.innerHTML = "";
    notas.forEach((n) => {
        const p = document.createElement("p");
        p.textContent = n;
        listaNotas.appendChild(p);
    });
}

mostrarNotas();

document.getElementById("btnGuardar").addEventListener("click", () => {
    const nota = document.getElementById("nota").value.trim();

    if (nota) {
        notas.push(nota);
        localStorage.setItem("notas", JSON.stringify(notas));
        mostrarNotas();
        document.getElementById("nota").value = "";
    } else {
        alert("Escribí algo antes de guardar.");
    }
});

document.getElementById("btnBorrar").addEventListener("click", () => {
    localStorage.removeItem("notas");
    notas = [];
    mostrarNotas();
});
