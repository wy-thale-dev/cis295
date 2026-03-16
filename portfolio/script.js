// Mobile Menu
// Variables
const mobileMenuBtn = document.querySelector("#mobileMenuButton");
const mobileMenu = document.querySelector("#mobileMenu");
// When button pressed, toggle closed class on button and nav.navbar
mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("closed");
    mobileMenu.classList.toggle("closed");
})
