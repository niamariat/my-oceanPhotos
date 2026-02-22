const projects = [
    { title: "Photo 1", desc: "", img: "photo1.png" },
    { title: "Photo 2", desc: "", img: "photo2.png" },
    { title: "Photo 3", desc: "", img: "photo3.png" },
    { title: "Photo 4", desc: "", img: "photo4.png" },
    { title: "Photo 5", desc: "", img: "photo5.png" },
    { title: "Photo 6", desc: "", img: "photo6.png" },
    { title: "Photo 7", desc: "", img: "photo7.png" },
    { title: "Photo 8", desc: "", img: "photo8.png" },
    { title: "Photo 9", desc: "", img: "photo9.png" }
];

const gallery = document.getElementById("gallery");

projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.animationDelay = `${index * 0.15}s`;

    card.innerHTML = `
        <img src="${project.img}" alt="${project.title}">
        <div class="card-content">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        </div>
    `;

    gallery.appendChild(card);
});

// Sparkle cursor trail
document.addEventListener("mousemove", function(e) {
    for (let i = 0; i < 2; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = (e.clientX + (Math.random() * 10 - 5)) + "px";
        sparkle.style.top = (e.clientY + (Math.random() * 10 - 5)) + "px";
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
    }
});