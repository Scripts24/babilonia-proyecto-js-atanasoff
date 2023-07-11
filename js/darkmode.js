const switchButton = document.querySelector(".switch");
const body = document.body;

// Verificar si el modo oscuro está activo en el almacenamiento local
const isDarkModeActive = localStorage.getItem("darkMode") === "true";

// Aplicar el modo oscuro si está activo en el almacenamiento local
if (isDarkModeActive) {
    switchButton.classList.add("active");
    body.classList.add("active");
}

switchButton.addEventListener("click", (e) => {
    switchButton.classList.toggle("active");
    body.classList.toggle("active");

    // Guardar el estado del modo oscuro en el almacenamiento local
    const isDarkModeActive = body.classList.contains("active");
    localStorage.setItem("darkMode", isDarkModeActive.toString());
});
