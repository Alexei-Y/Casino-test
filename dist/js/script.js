(function () {
  "use strict"

  document.addEventListener("DOMContentLoaded", () => {

    let mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      speed: 400,
      spaceBetween: 10,
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    })
  })

})();