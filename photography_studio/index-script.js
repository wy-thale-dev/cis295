// Light Mode Variables
const lightBtn = document.querySelector("#lightModeButton");
const background = document.querySelector("#lightModeBackground");
const text = document.querySelector("#lightModeText");
let lightMode = true;

// When button clicked, if dark: enter light mode, else: enter dark mode
lightBtn.addEventListener("click", () => {
    if (lightMode === true) {
        background.style.backgroundColor = "#eee"
        background.style.color = "#000";
        lightBtn.innerHTML = "Dark Mode Main Content";
        lightMode = false;
    } else {
        background.style.backgroundColor = "#000"
        background.style.color = "#eee";
        lightBtn.innerHTML = "Light Mode Main Content"
        lightMode = true;
    }
})

// 20% Project | I added an automatic copyright year to both of my websites so that it will always be up to date. It only took one line of JavaScript, and an id tag on a span element where the year should go.
// Get Current Year and place it in the footer copyright
document.getElementById("year").innerHTML = new Date().getFullYear();