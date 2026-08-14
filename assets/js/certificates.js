/* ==========================================
   CERTIFICATE DESKTOP CAROUSEL
========================================== */

const certificateGrid =
    document.querySelector(".certificate-grid");

const certificatePrev =
    document.getElementById("certificatePrev");

const certificateNext =
    document.getElementById("certificateNext");


if (
    certificateGrid &&
    certificatePrev &&
    certificateNext
) {

    certificateNext.addEventListener("click", () => {

        certificateGrid.scrollBy({

            left: certificateGrid.clientWidth * 0.8,

            behavior: "smooth"

        });

    });


    certificatePrev.addEventListener("click", () => {

        certificateGrid.scrollBy({

            left: -(certificateGrid.clientWidth * 0.8),

            behavior: "smooth"

        });

    });

}