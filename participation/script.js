
// Variables for Button and P
const button = document.querySelector("#par07Button");
const paragraph = document.querySelector("#par07Paragraph");

// On Click, change color of button text, text content of button, and paragraph text
button.addEventListener("click", () => {
    button.style.color = "#ff7f50";
    button.innerHTML = "You Clicked Me!";
    paragraph.innerHTML = "Press the button above to run the JavaScript, changing the color of the button and altering its text content. <br>Refresh the page to reset this demo."
})
