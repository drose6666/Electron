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


/**
 * TODO Product option
 */

const productOptions = [
   {
      id: 1,
      name : 'Цвета',
      options: [
         { id: 1, name: 'colors', value: 'Светлый титан', color: '#F4F2EE' },
         { id: 2, name: 'colors', value: 'Темный титан', color: '#4A4846' },
         { id: 3, name: 'colors', value: 'Натуральный титан', color: '#FDE8CF' },
         { id: 4, name: 'colors', value: 'Красный титан', color: '#DE8E86' },
         { id: 5, name: 'colors', value: 'Зеленый титан', color: '#516956' },
         { id: 6, name: 'colors', value: 'Синий титан', color: '#82A7C8' },
      ]
   },
   {
      id: 2,
      name : 'Память',
      options: [
         { id: 1, name: 'memory', value: '16/512 Gb' },
         { id: 2, name: 'memory', value: '32/512 Gb' },
         { id: 3, name: 'memory', value: '64/512 Gb' },
         { id: 4, name: 'memory', value: '128/512 Gb' },
      ]
   },
   {
      id: 3,
      name : 'SSD',
      options: [
         { id: 1, name: 'ssd', value: '256 Gb' },
         { id: 2, name: 'ssd', value: '512 Gb' },
         { id: 3, name: 'ssd', value: '1 Tb' },
         { id: 4, name: 'ssd', value: '2 Tb' },
      ]
   },
   {
      id: 4,
      name : 'Диагональ',
      options: [
         { id: 1, name: 'diagonal', value: '14.3”' },
         { id: 2, name: 'diagonal', value: '15.3”' },
         { id: 3, name: 'diagonal', value: '15.6”' },
      ]
   }
]

function renderOptions () {
   const fieldset = `
      <fieldset class="product-options">
         <legend class="product-options__title">Память</legend>

         <label class="ui-control product-option">
            <input type="text" name="memory" value="16/512 Gb" class="ui-control__input visually-hidden">
            <span class="ui-control__custom">
               <div class="ui-control__custom__name">16/512 Gb</div>
            </span>
         </label>
      </fieldset>
   `

}

const formProductoptions = document.querySelectorAll('form-product-options')


formProductoptions.forEach(item => {

})
