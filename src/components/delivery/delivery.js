const deliveryCartData = [
   {
      id: 1,
      name: 'Доставка курьером',
      info: {
         description: 'В течении 3-х дней,',
         condition: ''
      },
      price: '0.00',
   },

   {
      id: 2,
      name: 'Забрать из магазина',
      info: {
         description: 'Пн-Вс: 09:00-20:00,',
         condition: 'В наличии'
      },
      price: '0.00',
   },

   {
      id: 3,
      name: 'СДЭК',
      info: {
         description: 'В течении 1 дня при оплате с сайта',
         condition: ''
      },
      price: null
   },
]

// TODO Создание структуры
function createHTMLDeliveryCart(arr) {
   let deliveryArr = arr.map(delivery => {
      let conditionInfo = delivery.info.condition ? `<strong class="mark">${delivery.info.condition}</strong>` : ''

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
   })

   return deliveryArr.join('')
}

// TODO 
function createCalcBtn(price) {
   return price ? `<span class="delivery-price">${price} ₽</span>` : `<button class="btn_small-dark btn_delivery">Рассчитать</button>`
}

const cartDeliveryList = document.querySelector('.cart_delivery-list')
cartDeliveryList.insertAdjacentHTML('afterbegin', createHTMLDeliveryCart(deliveryCartData))