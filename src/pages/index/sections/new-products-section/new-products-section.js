// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const options = {
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 20,
   speed: 400,
   pauseOnMouseEnter: true,
   observer: true,
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   navigation: {
      nextEl: `.new-products-container .next`,
      prevEl: `.new-products-container .prev`
   },
   breakpoints: {
      500: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 20,
         observer: true,
      },
      1000: {
         spaceBetween: 20,
         slidesPerView: 3,
         slidesPerGroup: 1,
         observer: true,
      },
   }
}

window.addEventListener('load', () => {
   new Swiper('#new-product-swiper', options)
})