import PopupHandler from '../../../libs/js/module/fadeHiddenElements/PopupHandler.js';
import '../../forms/form-call/form-call.js';

window.addEventListener('load', function() {
   new PopupHandler ({
      selector: '#popup-call',
      btnClose: '.popup-call-close',
      btnOpen: '.btn_call',
      overlay: '#overlay-call',
   });
})