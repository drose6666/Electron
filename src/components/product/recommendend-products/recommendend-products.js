const options = {
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 20,
   speed: 400,
   pauseOnMouseEnter: true,
   autoplay: true,
   delay: 3000,
   observer: true,
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   navigation: {
      nextEl: `.container_recommendend-products .next`,
      prevEl: `.container_recommendend-products .prev`
   },
   breakpoints: {
      500: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 20,
         observer: true,
         pauseOnMouseEnter: true,
      },
      1000: {
         spaceBetween: 20,
         slidesPerView: 3,
         slidesPerGroup: 1,
         observer: true,
         pauseOnMouseEnter: true,
      },
      1200: {
         spaceBetween: 20,
         slidesPerView: 4,
         slidesPerGroup: 1,
         observer: true,
         pauseOnMouseEnter: true,
      },
   }
}

new Swiper('#recommendend-products-swiper', options)
