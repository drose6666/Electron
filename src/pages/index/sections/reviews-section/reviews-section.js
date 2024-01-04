// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const optionsReviews = {
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 20,
   speed: 400,
   loop: true,
   pauseOnMouseEnter: true,
   observer: true,
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   navigation: {
      nextEl: `.reviews_arrow.next`,
      prevEl: `.reviews_arrow.prev`
   },

   breakpoints: {
      600: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 20,
         observer: true,
      },
      1100: {
         spaceBetween: 20,
         slidesPerView: 3,
         slidesPerGroup: 1,
         observer: true,
      },
   }
}

window.addEventListener('load', () => {
   const reviewsSwiper = new Swiper('#reviews-swiper', optionsReviews)
})

