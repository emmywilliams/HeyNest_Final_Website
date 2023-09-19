$(document).ready(function () {
  // Hero slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  // Project slider
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      768: {
        items: 2,
      },
      1140: {
        items: 2,
        center: true,
      },
    },
  });

  // Hero slider
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
  });

  // Giving a navbar a different background on scroll
  // Add an event listener to handle scrolling
  window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");

    // Check the scroll position
    if (window.scrollY > 0) {
      // Add the CSS class for the purple background
      navbar.classList.add("navbar-scroll");
    } else {
      // Remove the CSS class if at the top
      navbar.classList.remove("navbar-scroll");
    }
  });
});

function closeNavbar() {
  if (window.innerWidth <= 992) {
    let navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }
}

// initialize phone library
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  preferredCountries: ["ug"],
  separateDialCode: true,
});
