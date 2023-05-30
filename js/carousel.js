import { closeNavPopUp } from "./nav-hamburger.js";

// Get a reference to the swiper container element
const swiperContainer = document.querySelector(".swiper-container");

const getSlidesPerView = () => {
  const viewportWidth = window.innerWidth;
  switch (true) {
    case viewportWidth >= 768:
      return 3;
    case viewportWidth >= 550:
      return 2;
    default:
      return 1;
  }
};

let swiper;

const createSwiper = () => {
  swiper = new Swiper(swiperContainer, {
    slidesPerView: getSlidesPerView(),
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

createSwiper();

function debounce(func, delay = 200) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

window.addEventListener(
  "resize",
  debounce(() => {
    if ($(".header--expanded").length) {
      closeNavPopUp();
    }

    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update();
  })
);
