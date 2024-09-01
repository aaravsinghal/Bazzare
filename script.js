// JavaScript for the carousel
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showSlide(index) {
    const totalImages = images.length;
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Optional: Auto-slide functionality
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000); // Change slide every 5 seconds
