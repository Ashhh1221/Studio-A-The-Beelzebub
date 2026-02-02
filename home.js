const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');
const closeBtn = document.getElementById('close-search');

searchBtn.addEventListener('click', () => {
    searchBox.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    searchBox.style.display = 'none';
});


const initSlider = () => {
  const ImageList = document.querySelector(".silder-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".silder-wrapper .slide-button");
  const silderScrollbar = document.querySelector(".container .silder-scrollbar");
  const scrollbarThumb = silderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = ImageList.scrollWidth - ImageList.clientWidth;

  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = ImageList.clientWidth * direction;
      ImageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });

  const handleSlideButtons = () => {
    slideButtons[0].style.display = ImageList.scrollLeft <= 0  ? "none" : "block";
    slideButtons[1].style.display = ImageList.scrollLeft >= maxScrollLeft ? "none" : "block";
  }

  const updateScrollThumbPosition = () => {
    const scrollPosition = ImageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (silderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  ImageList.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
  });
}

window.addEventListener("load", initSlider);