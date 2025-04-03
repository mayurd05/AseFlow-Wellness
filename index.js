document.addEventListener("DOMContentLoaded", function () {
    // Navbar Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("hidden"); // Toggle visibility
    });

    // Carousel Navigation
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let currentIndex = 0;

    function updateCarousel() {
        const items = document.querySelectorAll(".carousel-item");
        const totalItems = items.length;
        items.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    }

    nextBtn.addEventListener("click", () => {
        const items = document.querySelectorAll(".carousel-item");
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
});
