import PopupHandler from '../../../../libs/js/module/fadeHiddenElements/PopupHandler.js'

window.addEventListener('load', function() {
   new PopupHandler ({
      selector: '#popup-cart',
      btnClose: '.popup-cart-close',
      btnOpen: '.btn_header-cart',
      overlay: '#overlay-cart',
   })
})