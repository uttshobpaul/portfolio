/* ==========================================
   CERTIFICATE CENTER CAROUSEL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const track =
        document.querySelector(".certificate-track");

    const cards =
        document.querySelectorAll(
            ".certificate-track .certificate-card"
        );

    const previous =
        document.getElementById("certificatePrev");

    const next =
        document.getElementById("certificateNext");


    if (
        !track ||
        !cards.length ||
        !previous ||
        !next
    ) {
        return;
    }


    /* ==========================================
       CURRENT CERTIFICATE
    ========================================== */

    let currentIndex = 0;


    /* ==========================================
       CENTER CERTIFICATE
       
       IMPORTANT:
       We do NOT use scrollIntoView().
       scrollIntoView() can move the whole
       webpage vertically.

       This function changes ONLY scrollLeft.
    ========================================== */

    function centerCertificate(index, smooth = true) {

        const card = cards[index];

        if (!card) {
            return;
        }


        const trackWidth =
            track.clientWidth;

        const cardWidth =
            card.offsetWidth;


        const targetScrollLeft =
            card.offsetLeft
            -
            (
                (trackWidth - cardWidth) / 2
            );


        track.scrollTo({

            left: Math.max(
                0,
                targetScrollLeft
            ),

            behavior:
                smooth
                ? "smooth"
                : "auto"

        });


        updateActive(index);

    }


    /* ==========================================
       ACTIVE CERTIFICATE
    ========================================== */

    function updateActive(index) {

        cards.forEach((card, i) => {

            card.classList.toggle(
                "active",
                i === index
            );

        });

    }


    /* ==========================================
       NEXT CERTIFICATE
    ========================================== */

    next.addEventListener("click", () => {

        if (
            currentIndex <
            cards.length - 1
        ) {

            currentIndex++;

            centerCertificate(
                currentIndex
            );

        }

    });


    /* ==========================================
       PREVIOUS CERTIFICATE
    ========================================== */

    previous.addEventListener("click", () => {

        if (currentIndex > 0) {

            currentIndex--;

            centerCertificate(
                currentIndex
            );

        }

    });


    /* ==========================================
       DETECT CERTIFICATE AFTER SWIPING
    ========================================== */

    let scrollTimer;


    track.addEventListener("scroll", () => {

        clearTimeout(scrollTimer);


        scrollTimer = setTimeout(() => {

            const trackRect =
                track.getBoundingClientRect();


            const trackCenter =
                trackRect.left +
                (
                    trackRect.width / 2
                );


            let closestIndex = 0;

            let closestDistance =
                Infinity;


            cards.forEach((card, index) => {

                const cardRect =
                    card.getBoundingClientRect();


                const cardCenter =
                    cardRect.left +
                    (
                        cardRect.width / 2
                    );


                const distance =
                    Math.abs(
                        trackCenter -
                        cardCenter
                    );


                if (
                    distance <
                    closestDistance
                ) {

                    closestDistance =
                        distance;

                    closestIndex =
                        index;

                }

            });


            currentIndex =
                closestIndex;


            updateActive(
                currentIndex
            );

        }, 100);

    });


    /* ==========================================
       INITIAL POSITION
       
       IMPORTANT:
       Only horizontal scrolling happens here.
       The page will remain at HOME.
    ========================================== */

    setTimeout(() => {

        centerCertificate(
            0,
            false
        );

    }, 100);


    /* ==========================================
       RESIZE
    ========================================== */

    window.addEventListener(
        "resize",
        () => {

            centerCertificate(
                currentIndex,
                false
            );

        }
    );

});