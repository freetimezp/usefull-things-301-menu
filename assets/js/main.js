document.addEventListener("DOMContentLoaded", () => {
    function openNav() {
        document.getElementById("navbar").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("navbar").style.width = "0%";
    }

    document.querySelector("#navBtn").addEventListener("click", openNav);
    document.querySelector(".closeBtn").addEventListener("click", closeNav);
});
