// Mobile Menu
// Variables
const mobileMenuBtn = document.querySelector("#mobileMenuButton");
const mobileMenu = document.querySelector("#mobileMenu");
// When button pressed, toggle closed class on button and nav.navbar
mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("closed");
    mobileMenu.classList.toggle("closed");
})

// Scroll to top button
// Variables
const scrollTopBtn = document.querySelector("#scrollTopButton");
const scrollRevealPoint = document.querySelector("header");
// Function to check scroll position
function checkVisibility() {
    // Variables
    const position = scrollRevealPoint.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    // When user scrolls, if header visible: display none, else: display block
    if (position.top < windowHeight && position.bottom >= 0) {
        scrollTopBtn.style.display = "none";
    } else {
        scrollTopBtn.style.display = "block";
    }
}
// Run function on scroll 
window.addEventListener('scroll', checkVisibility)
// When scrollTopBtn clicked, scroll to top of page
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0);
})