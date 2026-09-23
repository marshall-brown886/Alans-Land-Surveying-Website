// ==========================================
// 1. CLICKABLE INFO SLIDESHOW (Manual Click)
// ==========================================
const infoSlides = document.querySelectorAll('.info-slide');
const infoPrevBtn = document.querySelector('.info-section .prev-btn');
const infoNextBtn = document.querySelector('.info-section .next-btn');
let infoCurrentIndex = 0;

function showInfoSlide(index) {
    // Check if the slideshow elements exist on this page to prevent console errors
    if (!infoSlides.length || !infoPrevBtn || !infoNextBtn) return;

    // Remove active from current slide
    infoSlides[infoCurrentIndex].classList.remove('active');

    // Wrap around logic
    if (index >= infoSlides.length) {
        infoCurrentIndex = 0;
    } else if (index < 0) {
        infoCurrentIndex = infoSlides.length - 1;
    } else {
        infoCurrentIndex = index;
    }

    // Add active to the targeted slide
    infoSlides[infoCurrentIndex].classList.add('active');
}

// Only attach event listeners if the buttons actually exist on the page
if (infoNextBtn && infoPrevBtn) {
    infoNextBtn.addEventListener('click', () => showInfoSlide(infoCurrentIndex + 1));
    infoPrevBtn.addEventListener('click', () => showInfoSlide(infoCurrentIndex - 1));
}


// ==========================================
// 2. MAIN BACKGROUND SLIDESHOW (Auto-Rotate)
// ==========================================
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
    // Check if the slideshow elements exist on this page to prevent console errors
    if (!slides.length) return;

    slides[currentSlide].classList.remove("active");
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

// Only start the automatic timer if slides exist
if (slides.length > 0) {
    setInterval(changeSlide, 4000);
}
