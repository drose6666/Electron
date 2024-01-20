new Swiper('.hero-swiper', {
   observer: true,
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   navigation: {
      nextEl: `.hero_arrow.next`,
      prevEl: `.hero_arrow.prev`
   },
   effect: 'fade',
   crossFade: true,
   loop: true,
   autoplay: false,
   delay: 5000,
   pauseOnMouseEnter: true
})