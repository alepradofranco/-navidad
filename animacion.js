function CrearAnimacion() {
    const copo = document.createElement("div");
    copo.classList.add("snowflake");

    copo.textContent = "❄";

    // Posición inicial
    copo.style.left = Math.random() * window.innerWidth + "px";

    // Tamaño
    copo.style.fontSize = Math.random() * 15 + 10 + "px";

    // Duración
    copo.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.body.appendChild(copo);

    // Remover
    setTimeout(() => copo.remove(), 6000);
}

setInterval(CrearAnimacion, 200);
