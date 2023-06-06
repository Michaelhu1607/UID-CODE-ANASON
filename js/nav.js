document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const dropdown = document.querySelector(".dropdown");

    hamburger.addEventListener("click", function () {
        dropdown.classList.toggle("open");
    });
});