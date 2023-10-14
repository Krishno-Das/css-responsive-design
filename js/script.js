let lang = document.getElementById("langli");
let languages = document.querySelector(".lagn-drop-down");

lang.addEventListener("click", () => {

    languages.classList.toggle("active");
})


let navMenu = document.querySelector(".nav-menu");

let burgerMenu = document.querySelector(".burger-menu");

let xMark = document.querySelector(".fa-xmark");

let bars = document.querySelector(".fa-bars")


burgerMenu.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    xMark.classList.toggle("active");
    
    bars.classList.toggle("active");
})