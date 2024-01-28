import PopupHandler from '../../../libs/js/module/fadeHiddenElements/PopupHandler.js';

window.addEventListener('load', function() {
   new PopupHandler ({
      selector: '#popup-notification',
      btnClose: '.popup-notification-close',
      btnOpen: '.btn_notification',
      overlay: '#overlay-notification',
   });
})