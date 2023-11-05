import openFadeOnTheSide from '../../../../libs/js/module/openFadeOnTheSide.js'

new openFadeOnTheSide ({
   fadeSelector: '#fade-filters',
   close: '.ui-close.fade_filters',
   open: '.btn_favourites',
   overlay: '#overlay-filters',
})

const filterItem = document.querySelectorAll('.filter-collapse');
const filterTitle = document.querySelectorAll('.filter-item__title')

filterTitle.forEach(item => {
   item.addEventListener('click', function () {
      this.classList.toggle('hide')
      let sib = this.nextElementSibling
      sib.classList.toggle('hide')
   })
})

