document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("navbar");
    const openBtn = document.getElementById("navBtn");
    const closeBtn = document.querySelector(".closeBtn");

    openBtn.addEventListener("click", () => {
        nav.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
