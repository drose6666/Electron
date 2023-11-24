import PopupHandler from '../../../libs/js/module/fadeHiddenElements/PopupHandler.js';
import '../../forms/form-answer/form-answer.js';

new PopupHandler ({
   selector: '#popup-answer',
   btnClose: '.popup-answer-close',
   btnOpen: '.btn_answer',
   overlay: '#overlay-answer',
});