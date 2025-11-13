let segundos = 0;
let intervalo;
const cronometro = document.getElementById("cronometro");

function actualizarCronometro() {
    const hrs = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const mins = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const secs = String(segundos % 60).padStart(2, "0");

    cronometro.textContent = `${hrs}:${mins}:${secs}`;

    // Cada 5 segundos exactos, activar animación
    if (segundos > 0 && segundos % 5 === 0) {
        cronometro.classList.add("animacion");

        // Quita la animación después de 1 segundo
        setTimeout(() => {
            cronometro.classList.remove("animacion");
        }, 1000);
    }
}

document.getElementById("iniciar").addEventListener("click", () => {
    if (!intervalo) {
        intervalo = setInterval(() => {
            segundos++;
            actualizarCronometro();
        }, 1000);
    }
});

document.getElementById("pausar").addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
});

document.getElementById("reiniciar").addEventListener("click", () => {
    segundos = 0;
    actualizarCronometro();
    clearInterval(intervalo);
    intervalo = null;
});