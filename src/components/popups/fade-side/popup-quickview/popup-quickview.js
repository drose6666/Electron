import PopupHandler from '../../../../libs/js/module/fadeHiddenElements/PopupHandler.js'

const options = {
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 5,
   speed: 400,
   pauseOnMouseEnter: true,
   observer: true,
   keyboard: {
      enabled: true,
      onlyInViewport: false,
   },
   navigation: {
      nextEl: '.quickview-product-next',
      prevEl: '.quickview-product-prev'
   },
}

let quickviewProductSwiper = null

function initQuickviewProductSwiper () {
   if (window.innerWidth <= 830) {
      if (!quickviewProductSwiper) {
         quickviewProductSwiper = new Swiper('#quickview-product-swiper', options)
      }
   } else {
      if (quickviewProductSwiper) {
         quickviewProductSwiper.destroy();
         quickviewProductSwiper = null
      }
   }
}

window.addEventListener('load', initQuickviewProductSwiper)
window.addEventListener('resize', initQuickviewProductSwiper)

new PopupHandler ({
   selector: '#popup-quickview',
   btnClose: '.popup-quickview-close',
   btnOpen: '.btn_quickview',
   overlay: '#overlay-quickview',
})