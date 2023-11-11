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

