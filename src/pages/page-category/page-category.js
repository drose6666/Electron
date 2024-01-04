import '../../js/common.js';
import '../../components/subcategory/subcategory.js';
import '../../components/catalog/catalog-filters/catalog-filters.js';
import '../../components/product/product.js';

// TODO Popups
import '../../components/popups/fade-side/popup-filters/popup-filters.js';
import '../../components/popups/fade-side/popup-quickview/popup-quickview.js';
import '../../components/popups/popup-image-preview/popup-image-preview.js';
import Tabs from '../../libs/js/module/tabs.js';


// TODO Вкладки подкатегорий (Для смартфонов/Для ноутбуков)
new Tabs({
   visible: '.tab_category',
   collapse: '.subcategory-list'
})