
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetSection = this.getAttribute('href');
            const targetElement = document.querySelector(targetSection);

            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    const destinationCards = document.querySelectorAll('.destination-card');

    destinationCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.classList.add('destination-card-hover');
        });

        card.addEventListener('mouseleave', function() {
            this.classList.remove('destination-card-hover');
        });
    });
});
