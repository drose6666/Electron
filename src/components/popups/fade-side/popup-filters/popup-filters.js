import PopupHandler from '../../../../libs/js/module/fadeHiddenElements/PopupHandler.js'
import './filter-items/filter-items.js';

new PopupHandler ({
   selector: '#popup-filters',
   btnClose: '.popup-filters-close',
   btnOpen: '.btn_filters',
   overlay: '#overlay-filters',
})

const filterTitle = document.querySelectorAll('.filter-item__title')

filterTitle.forEach(item => {
   item.addEventListener('click', function () {
      this.classList.toggle('hide')
      let sib = this.nextElementSibling
      sib.classList.toggle('hide')
   })
})

