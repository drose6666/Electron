import '../../js/common.js';
import '../../components/product/product-images/product-images.js';
import '../../components/product/product.js';
import './product-reviews/product-reviews.js';
import '../../components/product/recommendend-products/recommendend-products.js';


// TODO Popups
import '../../components/popups/fade-side/popup-quickview/popup-quickview.js';
import '../../components/popups/popup-image-preview/popup-image-preview.js';
import '../../components/popups/popup-send-review/popup-send-review.js';
import '../../components/popups/fade-side/popup-review/popup-review.js';

import Tabs from '../../libs/js/module/tabs.js';

new Tabs({
   visible: '.product-tab',
   collapse: '.product-content__item'
})

// TODO Скрытие постера в обзоре продукта при клике на видео
const videoWrap = document.getElementById('video-wrap')
videoWrap.addEventListener('click', function () {
   this.classList.toggle('play')
})