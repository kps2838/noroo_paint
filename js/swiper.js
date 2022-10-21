const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',

    autoplay: {
        delay: 5000
      },
  
      speed: 2000, //전환효과 시간

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

  });