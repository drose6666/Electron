import '../../js/common.js';
import '../../components/catalog/catalog.js';
import '../../components/product/product.js';
import '../../components/product/recommendend-products/recommendend-products.js';

// TODO Popups
import '../../components/popups/fade-side/popup-quickview/popup-quickview.js';
import '../../components/popups/popup-image-preview/popup-image-preview.js';
// import '../../components/popups/popup-call/popup-call.js';

import Tabs from '../../libs/js/module/tabs.js';

// TODO Вкладки подкатегорий (Для смартфонов/Для ноутбуков)
new Tabs({
   visible: '.tab_category',
   collapse: '.subcategory-list'
})