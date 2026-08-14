/* ==========================================
   PROJECT CENTER CAROUSEL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const track =
        document.querySelector(".projects-track");

    const cards =
        document.querySelectorAll(".project-card");

    const previous =
        document.getElementById("projectPrev");

    const next =
        document.getElementById("projectNext");


    if (
        !track ||
        !cards.length ||
        !previous ||
        !next
    ) {

        return;

    }


    let currentIndex = 1;


    /* ==========================================
       UPDATE ACTIVE PROJECT
    ========================================== */

    function updateProjects(){

        cards.forEach((card, index) => {

            card.classList.remove("active");

            if(index === currentIndex){

                card.classList.add("active");

            }

        });


        /* Desktop positioning */

        if(window.innerWidth > 900){

            const cardWidth =
                cards[0].offsetWidth;

            const gap = 25;

            const carouselWidth =
                track.parentElement.offsetWidth;


            const offset =
                (carouselWidth / 2)
                -
                (cardWidth / 2)
                -
                (currentIndex * (cardWidth + gap));


            track.style.transform =
                `translateX(${offset}px)`;

        }

    }


    /* ==========================================
       NEXT PROJECT
    ========================================== */

    next.addEventListener("click", () => {

        if(currentIndex < cards.length - 1){

            currentIndex++;

            updateProjects();

        }

    });


    /* ==========================================
       PREVIOUS PROJECT
    ========================================== */

    previous.addEventListener("click", () => {

        if(currentIndex > 0){

            currentIndex--;

            updateProjects();

        }

    });


    /* ==========================================
       RESPONSIVE UPDATE
    ========================================== */

    window.addEventListener("resize", () => {

        updateProjects();

    });


    /* ==========================================
       INITIAL PROJECT
    ========================================== */

    updateProjects();

});