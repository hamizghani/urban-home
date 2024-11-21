const slides = document.querySelector(".carousel-slides");
const totalSlides = document.querySelectorAll(".slide").length;
let currentIndex = 0;

function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveToNextSlide, 3000);
