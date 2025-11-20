const btn = document.getElementById("btnBuscar");
const input = document.getElementById("username");
const userCard = document.getElementById("userCard");
const reposContainer = document.getElementById("repos");

btn.addEventListener("click", async () => {
    const username = input.value.trim();
    if (!username) {
        alert("Por favor ingrese un nombre de usuario.");
        return;
    }

    userCard.innerHTML = "⏳ Cargando usuario...";
    reposContainer.innerHTML = "";

    try {
        // Fetch usuario
        const res = await fetch(`https://api.github.com/users/${username}`);

        if (!res.ok) {
            throw new Error("No se encontró el usuario");
        }

        const data = await res.json();

        userCard.innerHTML = `
            <img src="${data.avatar_url}" alt="Avatar">
            <h3>${data.login}</h3>
            <p><strong>Nombre:</strong> ${data.name || "No disponible"}</p>
            <p><strong>Seguidores:</strong> ${data.followers}</p>
            <p><strong>Siguiendo:</strong> ${data.following}</p>
            <p><strong>Repos públicos:</strong> ${data.public_repos}</p>
            <a href="${data.html_url}" target="_blank">Ver perfil</a>
        `;

        // --- Desafío: Mostrar REPORITORIOS ---
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!repoRes.ok) {
            throw new Error("Error al obtener repositorios");
        }

        const repos = await repoRes.json();

        reposContainer.innerHTML = "<h4>Repositorios:</h4>";

        repos.forEach(repo => {
            reposContainer.innerHTML += `
                <div class="repo">
                    <strong>${repo.name}</strong>
                    <p>${repo.description || "Sin descripción"}</p>
                    <a href="${repo.html_url}" target="_blank">🔗 Ver repo</a>
                </div>
            `;
        });

    } catch (error) {
        userCard.innerHTML = `<p style="color:red;">⚠️ ${error.message}</p>`;
        reposContainer.innerHTML = "";
    }
});
