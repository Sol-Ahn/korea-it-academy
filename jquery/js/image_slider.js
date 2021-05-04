"use strict";

$(function () {
  // configuration
  var width = 720;
  var animateSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  // cache DOM
  var $slider = $("#slider");
  var $slideContainer = $slider.find(".slides");
  var $slides = $slideContainer.find(".slide");

  var interval;

  function startSlider() {
    interval = setInterval(function () {
      $slideContainer.animate(
        { "margin-left": "-=" + width },
        animateSpeed,
        function () {
          currentSlide++;
          if (currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css("margin-left", 0);
          }
        }
      );
    }, pause);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  $slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);

  startSlider();

  // setInterval
  // animate margin-left
  // If it's last slide, go to position 1 (0px)
  // listen for mouseenter and pause
  // resume on mouseleave
});
