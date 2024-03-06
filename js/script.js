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

var crsr = document.querySelector("#cursor");
var dot = document.querySelector("#dot");

document.addEventListener("mousemove", function(dets){

    crsr.style.left = dets.x - 22 + "px"
    crsr.style.top = dets.y + 12 + "px"
    dot.style.top = dets.y + 20 + "px"
    dot.style.left = dets.x  + "px"

})









gsap.from(".main-container >h1", {

    opacity: 0,
    duration: 1,
    x: -100,
})

gsap.registerPlugin(ScrollTrigger) 

gsap.from(".service", {

    scrollTrigger: {

        trigger: ".service",
        start: "top 75%",
        end: "top 70%",
        scrub: 0.3,},
        opacity: 0,
        duration: 1,
        y: 150,
    })

    gsap.from(".destination", {

        scrollTrigger: {
    
            trigger: ".destination",
            start: "top 75%",
            end: "top 70%",
            scrub: 0.5,},
            duration: 1,
            opacity: 0,
            y: 220,
        })

        gsap.from(".right-side-card", {

            scrollTrigger: {
        
                trigger: ".right-side-card",
                start: "top 90%",
                end: "top 90%",  
                scrub: 0.1,},
                opacity: 0,
                y: 100,
            })