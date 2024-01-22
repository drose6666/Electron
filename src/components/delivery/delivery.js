const deliveryCartData = [
   {
      id: 1,
      name: 'Доставка курьером',
      info: {
         description: 'Доставка в течении ',
         condition: '1-2-х дней'
      },
      price: '0.00',
   },

   {
      id: 2,
      name: 'Забрать из магазина',
      info: {
         description: 'Пн-Вс: 09:00-21:00,',
         condition: 'В наличии'
      },
      price: '0.00',
   },

   {
      id: 3,
      name: 'СДЭК',
      info: {
         description: 'Доставка ',
         condition: 'от 4 до 7 дней'
      },
      price: null
   },
]

const deliveryOrderData = [
   {
      id: 1,
      name: 'Доставка курьером',
      info: {
         description: 'Доставка в течении ',
         condition: '1-2-х дней'
      },
      price: '0.00',
      inOrder: true,
      selected: true
   },

   {
      id: 2,
      name: 'Забрать из магазина',
      info: {
         description: 'Пн-Вс: 09:00-21:00,',
         condition: 'В наличии'
      },
      price: '0.00',
      inOrder: true,
      selected: false
   },

   {
      id: 3,
      name: 'СДЭК',
      info: {
         description: 'Доставка ',
         condition: 'от 4 до 7 дней'
      },
      price: '450',
      inOrder: true,
      selected: false
   },
]

// TODO Создание структуры
function createHTMLDeliveryCart(arr) {
   let deliveryArr = arr.map(delivery => {
      let conditionInfo = delivery.info.condition ? `<strong class="mark">${delivery.info.condition}</strong>` : ''

      if (!delivery.inOrder) {
         return `
            <div class="delivery-item cart_delivery">
               <div class="delivery-item__container">
                  <div class="delivery-item__custom">
                     <div class="delivery-details">
                        <h4 class="delivery-name">${delivery.name}</h4>
                        <p class="delivery-info">${delivery.info.description} ${conditionInfo}</p>
                     </div>
               
                     ${createCalcBtn(delivery.price)}
                  </div>
               </div>
            </div>
         `
      } else {
         return `
            <label class="delivery-item order_delivery">
               <div class="delivery-item__container">
                  <input type="radio" name="delivery" data-id="${delivery.id}" value="${delivery.price}" ${delivery.selected ? 'checked': ''} class="delivery-item__input visually-hidden">
               
                  <div class="delivery-item__custom">
                     <div class="delivery-details">
                        <h4 class="delivery-name">${delivery.name}</h4>
                        <p class="delivery-info">${delivery.info.description} ${conditionInfo}</strong></p>
                     </div>

                     <span class="delivery-check"></span>
                  </div>
               </div>
            </label>
         `
      }
   })

   return deliveryArr.join('')
}

// TODO 
function createCalcBtn(price) {
   return price ? `<span class="delivery-price">${price} ₽</span>` : `<button class="btn_small-dark btn_delivery">Рассчитать</button>`
}

// TODO Добавление в page-cart
const cartDeliveryList = document.querySelector('.cart_delivery-list')
cartDeliveryList?.insertAdjacentHTML('afterbegin', createHTMLDeliveryCart(deliveryCartData))

const orderDeliveryList = document.querySelector('.order_delivery-list')
orderDeliveryList?.insertAdjacentHTML('beforeend', createHTMLDeliveryCart(deliveryOrderData))


const orderDeliveryItems = document.querySelectorAll('.order_delivery .delivery-item__input')
const deliveryValue = document.querySelector('.delivery_value')

// orderDeliveryItems.forEach(item => {
//    if (item.checked ) deliveryValue.textContent = `${item.value} ₽` 

//    item.addEventListener('change', function () {
//       deliveryValue.textContent = `${item.value} ₽` 
//    })
// })