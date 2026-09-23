const infoSections = document.querySelectorAll(".info-section");

infoSections.forEach((section) => {

    const infoSlides = section.querySelectorAll(".info-slide");
    const infoPrevBtn = section.querySelector(".prev-btn");
    const infoNextBtn = section.querySelector(".next-btn");

    let infoCurrentIndex = 0;

    if (!infoSlides.length || !infoPrevBtn || !infoNextBtn) {
        return;
    }

    function showInfoSlide(index) {

        infoSlides[infoCurrentIndex].classList.remove("active");

        if (index >= infoSlides.length) {
            infoCurrentIndex = 0;
        } else if (index < 0) {
            infoCurrentIndex = infoSlides.length - 1;
        } else {
            infoCurrentIndex = index;
        }

        infoSlides[infoCurrentIndex].classList.add("active");
    }

    infoNextBtn.addEventListener("click", () => {
        showInfoSlide(infoCurrentIndex + 1);
    });

    infoPrevBtn.addEventListener("click", () => {
        showInfoSlide(infoCurrentIndex - 1);
    });

});


let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {

    if (!slides.length) {
        return;
    }

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

if (slides.length > 0) {
    setInterval(changeSlide, 4000);
}
