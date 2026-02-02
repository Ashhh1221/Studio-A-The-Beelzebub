const items = document.querySelectorAll(".timeline-item");

function showOnScroll() {
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();
