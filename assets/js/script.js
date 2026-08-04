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

menuToggle.addEventListener("click",()=>{

    if(navLinks.style.display==="flex"){

        navLinks.style.display="none";

    }else{

        navLinks.style.display="flex";

        navLinks.style.flexDirection="column";

        navLinks.style.position="absolute";

        navLinks.style.top="80px";

        navLinks.style.right="8%";

        navLinks.style.padding="20px";

        navLinks.style.background="#0C2233";

        navLinks.style.borderRadius="12px";

        navLinks.style.gap="18px";

    }

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