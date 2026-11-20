function createDecoration() {

    const items = ["♡", "✦", "✧", "🌿", "★", "📖"];

    const element = document.createElement("div");

    element.className = "floating";

    element.innerHTML =
        items[Math.floor(Math.random() * items.length)];

    element.style.left = Math.random() * 100 + "vw";

    element.style.fontSize =
        (15 + Math.random() * 20) + "px";

    element.style.color =
        Math.random() > 0.5 ? "#d5b45e" : "#5bc18a";

    element.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 10000);
}

setInterval(createDecoration, 450);
