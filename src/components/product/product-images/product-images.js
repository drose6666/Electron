const productImgThumbs = new Swiper(".product-img__thumbs", {
   spaceBetween: 5,
   slidesPerView: 3,
   slidesPerGroup: 1,
   freeMode: true,
   watchSlidesProgress: true,
});

const productImgMain = new Swiper(".product-img__main", {
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 5,
   pauseOnMouseEnter: true,
   observer: true,
   // navigation: {
   //    nextEl: ".swiper-button-next",
   //    prevEl: ".swiper-button-prev",
   // },
   thumbs: {
      swiper: productImgThumbs,
   },
});
