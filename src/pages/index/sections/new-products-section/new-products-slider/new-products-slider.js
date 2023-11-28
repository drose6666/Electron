// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const setOptions = (id) => {
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
         nextEl: `.new-products-next.next-${id}`,
         prevEl: `.new-products-prev.prev-${id}`
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

   return options;
}

window.addEventListener('load', () => {
   const newProducts1 = new Swiper('#new-product-swiper-1', setOptions(1))
   const newProducts2 = new Swiper('#new-product-swiper-2', setOptions(2))
   const newProducts3 = new Swiper('#new-product-swiper-3', setOptions(3))
   const newProducts4 = new Swiper('#new-product-swiper-4', setOptions(4))
})