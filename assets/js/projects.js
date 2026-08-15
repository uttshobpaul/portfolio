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


    /* ==========================================
       CURRENT PROJECT
    ========================================== */

    let currentIndex = 0;


    /* ==========================================
       UPDATE PROJECT POSITION
    ========================================== */

    function updateProjects() {

        cards.forEach((card, index) => {

            card.classList.toggle(
                "active",
                index === currentIndex
            );

        });


        /* ==========================================
           DESKTOP CENTER POSITION
        ========================================== */

        if (window.innerWidth > 900) {

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
                (
                    currentIndex *
                    (cardWidth + gap)
                );

            track.style.transform =
                `translateX(${offset}px)`;

        }

    }


    /* ==========================================
       NEXT PROJECT
    ========================================== */

    function nextProject() {

        if (
            currentIndex <
            cards.length - 1
        ) {

            currentIndex++;

            updateProjects();

        }

    }


    /* ==========================================
       PREVIOUS PROJECT
    ========================================== */

    function previousProject() {

        if (currentIndex > 0) {

            currentIndex--;

            updateProjects();

        }

    }


    /* ==========================================
       ARROW BUTTONS
    ========================================== */

    next.addEventListener(
        "click",
        nextProject
    );


    previous.addEventListener(
        "click",
        previousProject
    );


    /* ==========================================
       DESKTOP TRACKPAD / MOUSE WHEEL

       Horizontal trackpad movement:

       Swipe right  → previous project
       Swipe left   → next project
    ========================================== */

    track.addEventListener(
        "wheel",
        (event) => {

            /* Only desktop */

            if (window.innerWidth <= 900) {
                return;
            }


            /*
               Trackpad horizontal movement
               usually appears in deltaX.
            */

            const horizontal =
                Math.abs(event.deltaX);


            const vertical =
                Math.abs(event.deltaY);


            /*
               Ignore normal vertical scrolling.

               This prevents the project section
               from hijacking normal page scrolling.
            */

            if (horizontal <= vertical) {
                return;
            }


            event.preventDefault();


            /*
               Prevent multiple projects from
               jumping during one swipe.
            */

            if (Math.abs(event.deltaX) < 5) {
                return;
            }


            if (event.deltaX > 0) {

                nextProject();

            } else {

                previousProject();

            }

        },
        {
            passive:false
        }
    );


    /* ==========================================
       RESIZE
    ========================================== */

    window.addEventListener(
        "resize",
        updateProjects
    );


    /* ==========================================
       INITIALIZE
    ========================================== */

    updateProjects();

});