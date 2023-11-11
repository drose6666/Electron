import PopupHandler from '../../../libs/js/module/fadeHiddenElements/PopupHandler.js';
import '../../forms/form-review/form-review.js';

new PopupHandler ({
   selector: '#popup-send-review',
   btnClose: '.popup-send-review-close',
   btnOpen: '.btn_send-review',
   overlay: '#overlay-send-review',
})