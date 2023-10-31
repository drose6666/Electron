import openMobileMenu from '../../../libs/js/module/openMobileMenu.js';

new openMobileMenu({
   menu: '.mobile-wrap',
   close: '.ui-close.mobile',
   open: '.ui-burger',
   overlay: '.overlay_mobile-menu',
   closeItems: '.menu_close'
})

const mobileMenu = document.querySelector('.mobile-menu');
const listItems = mobileMenu.querySelectorAll('[data-for]');
const lists = mobileMenu.querySelectorAll('[data-id]');
const mobileOverlay = document.querySelector('.overlay_mobile-menu')
const burger = document.querySelector('.ui-burger')

listItems.forEach(item => {
   item.addEventListener('click', function (e) {
      let clickedItemFor = this.getAttribute('data-for');

      for (let i = 0; i < lists.length; i++) {
         lists[i].classList.add('hidden')
      }

      let childList = [...lists].find(list => list.getAttribute('data-id') === clickedItemFor);
      childList.classList.remove('hidden')

      
      mobileMenu.style.height = `${childList.clientHeight}px`
      mobileOverlay.style.height = `${childList.clientHeight}px`

      if (clickedItemFor === '0') {
         mobileMenu.style.height = 'auto' 
         mobileOverlay.style.height = `${mobileMenu.clientHeight}px`
      }
   })
})

burger.addEventListener('click', function () {
   mobileOverlay.style.height = `${mobileMenu.clientHeight}px`
})

