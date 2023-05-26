$(document).ready(function () {
  $(".nav-hamburger").on("click", function () {
    $(this).addClass("nav-hamburger--expanded");
    $(".header").addClass("header--expanded");
    $(".popup-background").addClass("popup-background--active");
  });

  $(document).on("click", function (event) {
    const $element = $(".header--expanded");
    if (!$element.is(event.target) && $element.has(event.target).length === 0) {
      $element.removeClass("header--expanded");
      $(".popup-background").removeClass("popup-background--active");
      $(".nav-hamburger").removeClass("nav-hamburger--expanded");
    }
  });
});
