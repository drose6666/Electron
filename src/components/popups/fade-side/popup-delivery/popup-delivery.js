import PopupHandler from '../../../../libs/js/module/fadeHiddenElements/PopupHandler.js'
import './../../../forms/form-calc-delivery/form-calc-delivery.js';

new PopupHandler ({
   selector: '#popup-delivery',
   btnClose: '.popup-delivery-close',
   btnOpen: '.btn_delivery',
   overlay: '#overlay-delivery',
})