document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarRight = document.querySelector(".navbar-right");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const indicators = document.querySelectorAll(".indicator");
  
    let currentIndex = 0;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
  
    menuToggle.addEventListener("click", function () {
      navbarRight.classList.toggle("active");
    });
  
    function updateCarousel(index) {
      items.forEach((item, i) => {
        item.style.transform = `translateX(-${index * 100}%)`;
        item.style.opacity = i === index ? 1 : 0;
      });
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
      });
    }
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel(currentIndex);
    });
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel(currentIndex);
    });
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel(currentIndex);
      });
    });
  });