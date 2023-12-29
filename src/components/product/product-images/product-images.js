const productImagesThumbs = new Swiper(".product-images1", {
   spaceBetween: 15,
   slidesPerView: 3,
   slidesPerGroup: 1,
   freeMode: true,
   watchSlidesProgress: true,
});

const productImages = new Swiper(".product-images2", {
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 10,
   pauseOnMouseEnter: true,
   observer: true,
   // navigation: {
   //    nextEl: ".swiper-button-next",
   //    prevEl: ".swiper-button-prev",
   // },
   thumbs: {
      swiper: productImagesThumbs,
   },
});
