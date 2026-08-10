const navbar = document.querySelector(".navbar");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

// Mobile Menu

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});


const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

    });

});



// Scroll Reveal

const hiddenElements=document.querySelectorAll(".hidden");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>observer.observe(el));