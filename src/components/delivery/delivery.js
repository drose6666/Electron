const deliveryOrderData = [
   {
      id: 1,
      name: 'Доставка курьером',
      info: {
         description: 'Доставка в течении 1-2-х дней. ',
         condition: 'От 290 ₽'
      },
      selected: true
   },

   {
      id: 2,
      name: 'СДЭК',
      info: {
         description: 'Доставка ',
         condition: 'от 4 до 7 дней'
      },
      selected: false
   },

   {
      id: 3,
      name: 'Забрать из магазина',
      info: {
         description: 'Пн-Вс: 09:00-21:00,',
         condition: 'СПб, Новоизмайловский проспект 4'
      },
      selected: false
   }, 
]



// TODO HTML-template для элемента способа доставки на странице оформления заказа
function deliveryOrderPageTemplate(item) {
   const {id, name, info, selected} = item

   let additionalInfo = info.condition ? `<strong class="mark">${info.condition}</strong>` : ''

   return `
      <label class="delivery-item order_delivery">
         <div class="delivery-item__container">
            <input type="radio" name="delivery" data-id="${id}" ${selected ? 'checked': ''} class="delivery-item__input visually-hidden">
         
            <div class="delivery-item__custom">
               <div class="delivery-details">
                  <h4 class="delivery-name">${name}</h4>
                  <p class="delivery-info">${info.description} ${additionalInfo}</strong></p>
               </div>

               ${renderBtnDeliveryAreas(id)}
            </div>
         </div>
      </label>
   `
}

// TODO
function renderBtnDeliveryAreas(id) {
   const onlyCheck = `<span class="delivery-check"></span>`
   const checkWithBtnAreas = `
      <div class="check-wrap">
         <div class="btn_xs-dark btn_delivery-areas">Зоны доставки</div>
         <span class="delivery-check"></span>
      </div>
   `

   return id == 1 ? checkWithBtnAreas : onlyCheck
}

// TODO Рендер способов доставки на странице pade-order
function renderDeliveryItems(arr) {
   const orderDeliveryItems = arr.map(item => deliveryOrderPageTemplate(item))
   return orderDeliveryItems.join('')
}

document.querySelector('.order_delivery-list').insertAdjacentHTML('afterbegin', renderDeliveryItems(deliveryOrderData))

