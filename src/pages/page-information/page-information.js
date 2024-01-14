import '../../js/common.js';
import '../../components/popups/fade-side/popup-delivery/popup-delivery.js';

import Tabs from '../../libs/js/module/tabs.js';

// TODO Вкладки подкатегорий (Для смартфонов/Для ноутбуков)
new Tabs({
   visible: '.info_tab',
   collapse: '.info-content'
})