// script.js

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    const glow = card.querySelector(".glow");

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;

        // Smooth low gradient effect

        const rotate = (x / rect.width) * 360;

        card.style.background = `
        linear-gradient(
            ${rotate}deg,
            rgba(56,189,248,0.08),
            rgba(139,92,246,0.08),
            rgba(236,72,153,0.08)
        )`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,0.05)";

    });

});