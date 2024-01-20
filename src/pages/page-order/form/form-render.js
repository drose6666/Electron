const pickup = `
   <p class="delivery_details__text">Вы сможете забрать заказ в любое удобное для вас время <strong>с 09:00 до 21:00</strong> по адресу: <strong>город Санкт-Петербург Новоизмайловский проспект 4</strong></p>
`
const deliveryAddresFields = `
   <div class="address-delivery">
      <div class="grid-item">
         <div class="ui-form__item">
            <input type="text" name="user_country" inputmode="text" autocomplete="country-name" placeholder="Страна" value="Россия" readonly class="ui-input">
            <span class="error-message"></span>
         </div>
         
         <div class="ui-form__item">
            <input type="text" name="user_city" inputmode="text" autocomplete="address-level2" placeholder="Город" class="ui-input">
            <span class="error-message"></span>
         </div>
      </div>
      
      <div class="grid-item unequal">
         <div class="ui-form__item">
            <input type="text" name="user_address" inputmode="text" autocomplete="shipping street-address" placeholder="Адрес доставки" class="ui-input">
            <span class="error-message"></span>
         </div>
      
         <div class="ui-form__item">
            <input type="text" name="user_postal_code" inputmode="numeric" autocomplete="postal-code" placeholder="Почтовый индекс" class="ui-input">
            <span class="error-message"></span>
         </div>
      </div>
   </div>
`
const deliveryItems = document.querySelectorAll('.order_delivery .delivery-item__input')


// TODO Меняем поля адреса доставки на текст для самовывоза при
//      при изменении способа доставки
deliveryItems.forEach(item => {
   item.addEventListener('change', () => {
      item.dataset.id == 2
         ? renderAddressContentOnChooseDelivery(pickup, 'Мы ждем вас!')
         : renderAddressContentOnChooseDelivery(deliveryAddresFields, 'Адрес доставки')
   })
})

// TODO по умолчанию - поля для воода адреса доставки
window.addEventListener('load', () => renderAddressContentOnChooseDelivery(deliveryAddresFields, 'Адрес доставки'))


// TODO Рендерим нужный контент
function renderAddressContentOnChooseDelivery(content, title) {
   const addressItemTitle = document.querySelector('.address_item .order-item__title')
   const addressItemContainer = document.querySelector('.address_item .data-container')

   addressItemContainer.innerHTML = ''

   addressItemTitle.textContent = title
   addressItemContainer.insertAdjacentHTML('afterbegin', content)
}


