const openNavPopUp = () => {
  $(".nav-hamburger").addClass("nav-hamburger--expanded");
  $(".header").addClass("header--expanded");
  $(".popup-background").addClass("popup-background--active");
};

export const closeNavPopUp = () => {
  $(".nav-hamburger").removeClass("nav-hamburger--expanded");
  $(".header").removeClass("header--expanded");
  $(".popup-background").removeClass("popup-background--active");
};

$(document).ready(function () {
  $(".nav-hamburger").on("click", function () {
    openNavPopUp();
  });

  $(document).on("click", function (event) {
    const $element = $(".header--expanded");
    if (!$element.is(event.target) && $element.has(event.target).length === 0) {
      closeNavPopUp();
    }
  });
});
