$(document).ready(function(){

  // open mobile menu drawer
  $('.mobile-menu-btn').on('click',function(e){
    e.preventDefault();
    $('.mobile-menu-wrap').toggleClass('active');
  })
  // close mobile menu drawer
  $('.close-mobile-menu, .mobile-menu-overlay').on('click',function(e){
    e.preventDefault();
    $('.mobile-menu-wrap').removeClass('active');
  })
  
  // submenu
  $('.submenu-item').on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings('.sub-menu').slideToggle();
  })

  // child menu
  $('.child-menu-item').on('click',function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings('.child-menu').slideToggle();
  })

})

// hero slider
var swiper = new Swiper(".hero-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Review Slider
var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".review-arrow-next",
    prevEl: ".review-arrow-prev",
  },
});

// Instagram Slider
var swiper = new Swiper(".instagram-slider", {
  slidesPerView: 5.5,
  spaceBetween: 30,
  loop: true,
  speed: 4000,               
  allowTouchMove: false,
  freeMode: true,           
  freeModeMomentum: false,  
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  breakpoints: {
    // tablet
    768: {
      slidesPerView: 4.5,
      spaceBetween: 25,
    },
    // mobile
    480: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    // mobile
    0: {
      slidesPerView: 2.5,
    }
  }
});