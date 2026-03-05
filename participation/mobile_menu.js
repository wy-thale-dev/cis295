// Variables for dropdown navigation menu and button
const btn = document.querySelector("#menuButton");
const nav = document.querySelector("#navMenu");

// When button clicked, toggle the menu between open and closed style
btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    btn.classList.toggle("open");
})