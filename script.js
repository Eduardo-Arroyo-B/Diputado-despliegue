document.addEventListener('DOMContentLoaded', function() {
    const section5 = document.querySelector('.carousel');

    if (section5) {
        let currentIndex = 0; // Índice actual de la imagen

        function moveSlide(direction) {
            const slides = document.querySelectorAll('.carousel-slide');
            currentIndex += direction;

            // Resetea el índice si está fuera de los límites
            if (currentIndex < 0) {
                currentIndex = slides.length - 1;
            } else if (currentIndex >= slides.length) {
                currentIndex = 0;
            }

            // Mueve el carrusel
            const carouselContainer = document.querySelector('.carousel-container');
            carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Agregar event listeners a los botones
        document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
        document.querySelector('.next').addEventListener('click', () => moveSlide(1));
    }
});
