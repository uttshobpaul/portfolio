const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-links");

// Active Navigation
window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Smooth Scroll
navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

        // Close mobile menu after clicking
        navMenu.classList.remove("show");

    });

});

// Mobile Menu
menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("show");

});