document.addEventListener("DOMContentLoaded", function() {

    let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll Down
        navbar.style.top = '-80px'; // Adjust height as needed
    } else {
        // Scroll Up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});




    
    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    prev.addEventListener("click", function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    next.addEventListener("click", function() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    showSlide(currentSlide); // Initialize slider
});