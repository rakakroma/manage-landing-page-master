import { closeNavPopUp } from "./nav-hamburger.js";

const debounce = (func, delay = 200) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// Get a reference to the swiper container element
const swiperContainer = document.querySelector(".swiper-container");

const getSlidesPerView = () => {
  const viewportWidth = window.innerWidth;
  switch (true) {
    // case viewportWidth >= 768:
    //   return 3;
    case viewportWidth >= 640:
      return 2;
    default:
      return 1;
  }
};

const removeAllSwiperClass = () => {
  document.querySelector(".swiper-container").className =
    "former-swiper-container";
  document.querySelector(".swiper-wrapper").className =
    "swiper-wrapper-element horizontal-scroll-container";
  document.querySelector(".swiper-wrapper-element").style = "";
  document.querySelectorAll(".card").forEach((cardEle) => {
    cardEle.className = "card";
    cardEle.style = "";
  });
};

const restoreAllSwiperClass = () => {
  document.querySelector(".former-swiper-container").className =
    "swiper-container";
  document.querySelector(".swiper-wrapper-element").className =
    "swiper-wrapper-element swiper-wrapper";
  document.querySelectorAll(".card").forEach((cardEle) => {
    cardEle.className = "card swiper-slide";
  });
};

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

const stopSwiper = () => {
  removeAllSwiperClass();
  swiper.disable();
};

const restartSwiper = () => {
  restoreAllSwiperClass();
  swiper.enable();
};

let swiper;

createSwiper();

if (window.innerWidth > 768) {
  stopSwiper();
}

$(window).resize(
  debounce(() => {
    if ($(".header--expanded").length) {
      closeNavPopUp();
    }
    if (window.innerWidth >= 768) {
      if (swiper.enabled) {
        stopSwiper();
      }
    } else {
      if (!swiper.enabled) {
        restartSwiper();
      }
      swiper.params.slidesPerView = getSlidesPerView();
      swiper.update();
    }
  })
);
