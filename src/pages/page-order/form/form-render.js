import Dropdown from '../../../components/ui/ui-dropdown/ui-dropdown.js';
import { cityData } from '../../../components/ui/ui-dropdown/ui-dropdown-city.js';

// TODO Поля доставки для Доставки курьером
const addressCourier = `
   <div class="address-delivery">
      <div class="grid-item">
         <div class="ui-form__item">
            <input id="country" type="text" name="user_country" inputmode="text" autocomplete="country-name" value="Россия" placeholder="Страна" readonly class="ui-input">
            <span class="error-message"></span>
         </div>
         
         <div class="ui-form__item">
            <input id="city" type="text" name="user_city" inputmode="text" autocomplete="address-level2" value="Санкт-Петербург" readonly placeholder="Город" class="ui-input">
            <span class="error-message"></span>
         </div>
      </div>

      <div class="ui-form__item w100">
         <input id="address" type="text" name="user_address" inputmode="text" autocomplete="shipping street-address" placeholder="Адрес доставки" class="ui-input">
         <span class="error-message"></span>
      </div>
   </div>

   <p class="address_hint">Если выбран способ доставки "Доставка курьером", мы автоматически проверим введенный адрес на соответствие одной из зон доставки через 1.5 секунды после заполнения поля "Адрес".</p>
   <p class="address_hint bold"><strong>ВНИМАНИЕ!!!</strong> Яндекс изменяет значение адреса, если оно было введено некорректно, чтобы повысить результаты поиска. Результаты совпадения зон верны! Но вводите реальные и корректные адреса</p>
`

// TODO Поля доставки для СДЭК
const addressSDEC = `
   <div class="address-delivery">
      <div class="grid-item">
         <div class="ui-form__item">
            <input type="text" name="user_country" inputmode="text" autocomplete="country-name" placeholder="Страна" value="Россия" readonly class="ui-input">
            <span class="error-message"></span>
         </div>
         
         <div class="ui-form__item">
            <div class="ui-dropdown dropdown_form dropdown_city light"></div>
            <span class="error-message"></span>
         </div>
      </div>

      <div class="ui-form__item w100">
         <input type="text" name="user_address" inputmode="text" autocomplete="shipping street-address" placeholder="Адрес доставки" class="ui-input">
         <span class="error-message"></span>
      </div>
   </div>
`

const deliveryItems = document.querySelectorAll('.order_delivery .delivery-item__input')     // Способы доставки
const fieldsetAddress = document.querySelector('.address_item')   // Весь блок с адресом доставки
const containeAddressItem = fieldsetAddress.querySelector('.data-container')    // Контейнер для полей адреса доставки


// TODO Переключаем способы доставки
deliveryItems.forEach(item => {
   item.addEventListener('change', switchDeliveryItem.bind(this, item.dataset.id))
})


// TODO Изменяем поля адреса доставки при переключении изменении доставки
function switchDeliveryItem(id) {
   containeAddressItem.innerHTML = '';
   fieldsetAddress.style.display = 'block'

   if (id == 1) {
      containeAddressItem.insertAdjacentHTML('afterbegin', addressCourier)
      ymaps.ready(init);
   } else if (id == 2) {
      containeAddressItem.insertAdjacentHTML('afterbegin', addressSDEC)
      new Dropdown('.dropdown_city', {
         data: cityData,
         id: 2,
         placeholder: ''
      })
   } else {
      fieldsetAddress.style.display = 'none'
   }
}



