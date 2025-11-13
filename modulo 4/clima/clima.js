const apiKey = "de8e86cc66c1a2e6155ccb42b8cebf72"; 

document.getElementById("buscar").addEventListener("click", async () => {
    const ciudad = document.getElementById("ciudad").value.trim();
    const resultado = document.getElementById("resultado");
    const iconoTitulo = document.getElementById("iconoClima");

    if (!ciudad) {
        resultado.innerHTML = "⚠️ Ingrese una ciudad";
        iconoTitulo.style.display = "none";
        return;
    }

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`
        );

        const data = await res.json();

        if (data.cod !== 200) {
            resultado.innerHTML = "❌ Ciudad no encontrada";
            iconoTitulo.style.display = "none";
            return;
        }

        // ✅ Ícono del clima
        const icono = data.weather[0].icon;
        const iconoUrl = `https://openweathermap.org/img/wn/${icono}@2x.png`;

        // Mostramos el icono en el título
        iconoTitulo.src = iconoUrl;
        iconoTitulo.style.display = "inline";

        // Mostramos la información debajo
        resultado.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>☁️ ${data.weather[0].description}</p>
            <p>🌡️ Temp: ${data.main.temp}°C</p>
            <p>🌬️ Viento: ${data.wind.speed} km/h</p>
        `;
    } catch (error) {
        resultado.innerHTML = "⚠️ Error al conectar con la API";
        iconoTitulo.style.display = "none";
    }
});