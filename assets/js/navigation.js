const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.querySelector(".nav-links");


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

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


// ==========================================
// SMOOTH SCROLL + CLOSE MOBILE MENU
// ==========================================

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        navMenu.classList.remove("mobile-open");

    });

});


// ==========================================
// MOBILE MENU
// ==========================================

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("mobile-open");

});