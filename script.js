// ⭐ Membuat ratusan bintang otomatis
const bg = document.body; 
const starCount = 200;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let delay = Math.random() * 4;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${delay}s`;

    bg.appendChild(star);
}

// 🚀 Animasi muncul
window.addEventListener("load", () => {
    document.querySelector(".home-content").classList.add("show");
    document.querySelector(".home-img img").classList.add("show");
});

// 🔥 Fitur buka sertifikat
function openCert(src) {
    document.getElementById("popupImg").src = src;
    document.getElementById("certPopup").style.display = "flex";
}

// ❌ Tutup viewer
function closeCert() {
    document.getElementById("certPopup").style.display = "none";
}

// Open Certificate Popup
document.querySelectorAll(".cert-item img").forEach((img) => {
    img.addEventListener("click", () => {
        document.getElementById("certPopup").style.display = "flex";
        document.getElementById("popupImg").src = img.src;
    });
});

// Close Popup
document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("certPopup").style.display = "none";
});

document.querySelectorAll(".cert-item").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let rotateY = (x / rect.width - 0.5) * 25;
        let rotateX = (0.5 - y / rect.height) * 25;

        card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    });
});
