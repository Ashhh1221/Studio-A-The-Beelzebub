const cards = document.querySelectorAll('.about-card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        let top = card.getBoundingClientRect().top;
        let triggerPoint = window.innerHeight - 100;

        if (top < triggerPoint) {
            card.classList.add('show');
        }
    });
});
