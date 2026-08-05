const skillBars = document.querySelectorAll(".progress-bar");

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){

            const bar = entry.target;

            bar.style.width = bar.dataset.width + "%";

            skillsObserver.unobserve(bar);

        }

    });
});

skillBars.forEach(bar => skillsObserver.observe(bar));