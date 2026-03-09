// Read More Variables
const readMoreBtn = document.querySelector("#readMoreButton");
const readMoreTxt = document.querySelector("#readMoreText");
let readMore = true;

// When button pressed, if read more: reveal extra text, else: hide extra text
readMoreBtn.addEventListener("click", () => {
    if (readMore === true) {
        readMoreTxt.innerHTML = "At Mount Cyllene, we believe that fitness is a pursuit of the divine. Inspired by the rugged peaks of Arcadia and the legendary birthplace of Hermes, our mission is to bring the majesty of the Greek Pantheon to your daily workout. We have traded stuffy, windowless gyms for the open sky, blending high-energy aerobics with the timeless discipline of the ancients. Whether you are building the endurance of a messenger god or the raw power of a titan, our outdoor programs are designed to challenge your spirit and transform your body under the wide-open canopy of nature. <br>Our curated selection of fitness products and specialized training modules are built for those who seek more than just a routine—they seek an odyssey. From high-performance gear tested against the elements to aerobic sessions that mimic the legendary trials of the gods, Mount Cyllene provides the tools for your personal transformation. We invite you to join a community of modern-day heroes who understand that true strength isn't just found in a mirror; it is forged under the sun, fueled by the fresh air, and driven by a legacy of greatness.";
        readMoreBtn.innerHTML = "Hide Extra";
        readMore = !readMore;
    } else {
        readMoreTxt.innerHTML = "At Mount Cyllene, we believe that fitness is a pursuit of the divine. Inspired by the rugged peaks of Arcadia and the legendary birthplace of Hermes, our mission is to bring the majesty of the Greek Pantheon to your daily workout. We have traded stuffy, windowless gyms for the open sky, blending high-energy aerobics with the timeless discipline of the ancients. Whether you are building the endurance of a messenger god or the raw power of a titan, our outdoor programs are designed to challenge your spirit and transform your body under the wide-open canopy of nature.";
        readMoreBtn.innerHTML = "Read More";
        readMore = !readMore;
    }
    console.log(readMore);
})

// 20% Project | I added an automatic copyright year to both of my websites so that it will always be up to date. It only took one line of JavaScript, and an id tag on a span element where the year should go.
// Get Current Year and place it in the footer copyright
document.getElementById("year").innerHTML = new Date().getFullYear();


// Modal Contact Menu
// Variables
const contactMenuBtn = document.querySelector("#modalContactButton");
const contactMenuBtnX = document.querySelector("#modalContactButtonX");
const contactMenu = document.querySelector("#modalContactMenu");

// 20% Project | I made it so the background doesn't scroll while the modal menu is open. I had a class called no-scroll by toggled for the body when the contact buttons are pressed.
// Variables
const indexBody = document.querySelector("#indexBody");

// When hero button or X button clicked, toggle the .open style for the contact menu
contactMenuBtn.addEventListener("click", () => {
    contactMenu.classList.toggle("open");
    indexBody.classList.toggle("no-scroll");
})
contactMenuBtnX.addEventListener("click", () => {
    contactMenu.classList.toggle("open");
    indexBody.classList.toggle("no-scroll");
})


