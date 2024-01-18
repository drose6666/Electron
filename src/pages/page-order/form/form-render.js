


// TODO Сохраненная инфа "Контакты"
const saveDataContacts = [
   { key: 'Имя:', value: 'Константин' },
   { key: 'Фамилия:', value: 'Константинополевский' },
   { key: 'Email:', value: 'danila.rose.web@gmail.com' },
   { key: 'Телефон:', value: '+37377946969' },
]

// TODO Сохраненная инфа "Адрес доставки"
// const saveDataAddress = [
//    { key: 'Страна:', value: 'Россия' },
//    { key: 'Город:', value: 'Санкт-Петербург' },
//    { key: 'Адрес:', value: 'М.Фрунзенская, Московский пр. 75А' },
//    { key: 'Почтовый индекс:', value: '10001' },
// ]

// TODO HTML-структура для блока Контакты
const orderContactsTemplate = `
   <div class="contact-fields">
      <div class="ui-form-item">
         <input type="text" name="user_name" inputmode="text" autocomplete="given-name" placeholder="Имя" class="ui-input ">
         <span class="error-message"></span>
      </div>

      <div class="ui-form-item">
         <input type="text" name="user_surname" inputmode="text" autocomplete="family-name" placeholder="Фамилия" class="ui-input ">
         <span class="error-message"></span>
      </div>

      <div class="ui-form-item">
         <input type="email" name="user_email" inputmode="email" autocomplete="email" placeholder="Email" class="ui-input">
         <span class="error-message"></span>
      </div>

      <div class="ui-form-item form-item_tel">
         <div class="ui-dropdown dropdown_tel"></div>
         <input type="tel" name="user_tel" inputmode="tel" autocomplete="tel" placeholder="Телефон" class="ui-input">
         <span class="error-message"></span>
      </div>
   </div>
`

// TODO HTML-структура для блока Адреса доставки
const orderAddressTemplate = `
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

// TODO HTML-шаблон для сохраненной информации
function createHTMLSavedInfo (arr) {
   let savedInfoHTML = arr.map(item => {
      return `
         <li class="saved-list__item">
            <div class="key">${item.key}</div>
            <div class="value">${item.value}</div>
         </li>
      `
   })

   return `
      <ul class="saved-list">
         ${savedInfoHTML.join('')}
      </ul>
   `
}


function selectVariantTemplate (data) {

}