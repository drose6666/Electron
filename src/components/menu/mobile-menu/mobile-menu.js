import openFadeOnTheSide from '../../../libs/js/module/openFadeOnTheSide.js';

new openFadeOnTheSide({
   fadeSelector: '#mobile-menu',
   close: '.mobile-close',
   open: '.ui-burger',
   overlay: '#overlay-mobile-menu',
   closeItems: '.menu_close'
})

const mobileMenu = document.querySelector('.mobile-menu');
const listItems = mobileMenu.querySelectorAll('[data-for]');
const lists = mobileMenu.querySelectorAll('[data-id]');

listItems.forEach(item => {
   item.addEventListener('click', function (e) {
      let clickedItemFor = this.getAttribute('data-for');

      for (let i = 0; i < lists.length; i++) {
         lists[i].classList.add('hidden')
      }

      let childList = [...lists].find(list => list.getAttribute('data-id') === clickedItemFor);
      childList.classList.remove('hidden')
      
      mobileMenu.style.height = `${childList.clientHeight}px`

      if (clickedItemFor === '0') {
         mobileMenu.style.height = 'auto' 
      }
   })
})

/**
 * TODO Добавление стрелок к .has-children
 */
const mobileMenuHasChildrenItems = mobileMenu.querySelectorAll('.has-children')

for (let i = 0; i < mobileMenuHasChildrenItems.length; i++) {
   if (mobileMenuHasChildrenItems[i].classList.contains('parent-item')) insertArrow(mobileMenuHasChildrenItems[i], 'arrow_right_wide')
   else if (mobileMenuHasChildrenItems[i].classList.contains('child-item')) insertArrow(mobileMenuHasChildrenItems[i], 'arrow_down_wide')
   else if (mobileMenuHasChildrenItems[i].classList.contains('back-item')) insertArrow(mobileMenuHasChildrenItems[i], 'arrow_left_wide')
}

function insertArrow (parentEl, className) {
   const iconArrow = `<i class="i-${className} arrow_mobile-menu"></i>`
   parentEl.insertAdjacentHTML('beforeend', iconArrow)
}