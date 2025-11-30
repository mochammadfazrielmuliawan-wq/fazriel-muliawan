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
