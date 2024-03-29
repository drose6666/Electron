const products = [
   {
      id: 1,
      name: 'iPhone 15',
      price: '190 990 ₽',
      colors: [
         { id: 1, name: 'Желтый', color: "#EAE1BA" },
         { id: 2, name: 'Черный', color: "#4C4D4F" },
      ],
      img: '../../../img/product/iphone_15/yellow/cards/iphone_15_yellow_1_card.webp',
      imgHidden: '../../../img/product/iphone_15/yellow/cards/iphone_15_yellow_2_card.webp',
      isFavourites: true,
      isCompare: true,
      soldOut: true,
      inCart: false
   },

   {
      id: 2,
      name: 'MacBook Pro (M2 Pro, 2023)',
      price: '300 990 ₽',
      img: '../../../img/cards/card_1.webp',
      imgHidden: '../../../img/cards/cards_large/card_17.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false,
      inCart: false
   },

   {
      id: 3,
      name: 'Samsung Galaxy S23 Ultra в комплекте с Buds 2 Pro',
      price: '170 990 ₽',
      colors: [
         { id: 1, name: 'Темный титан', color: "#4A4846" },
         { id: 2, name: 'Светлый титан', color: "#F4F2EE" },
         { id: 3, name: 'Натуральный титан', color: "#FDE8CF" },
         { id: 4, name: 'Зеленый титан', color: "#516956" },
         { id: 5, name: 'Красный титан', color: "#DE8E86" },
         { id: 6, name: 'Синий титан', color: "#82A7C8" },
      ],
      img: '../../../img/cards/card_2.webp',
      imgHidden: '../../../img/cards/card_2.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false,
      inCart: false
   },

   {
      id: 4,
      name: 'iPad Pro (6th Gen, 2022)',
      price: '300 990 ₽',
      colors: [
         { id: 1, name: 'Темный титан', color: "#4A4846" },
         { id: 2, name: 'Светлый титан', color: "#F4F2EE" },
         { id: 3, name: 'Натуральный титан', color: "#FDE8CF" },
      ],
      img: '../../../img/cards/card_4.webp',
      imgHidden: '../../../img/cards/card_4.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false,
      inCart: false
   },
   {
      id: 5,
      name: 'iPhone 15 Pro Max',
      price: '210 990 ₽',
      colors: [
         { id: 1, name: 'Темный титан', color: "#4A4846" },
      ],
      img: '../../../img/cards/card_5.webp',
      imgHidden: '../../../img/cards/card_5_2.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false ,
      inCart: false
   },

   {
      id: 6,
      name: 'MacBook Air 15',
      price: '300 990 ₽',
      img: '../../../img/cards/card_6.webp',
      imgHidden: '../../../img/cards/card_6.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false,
      inCart: false
   },

   {
      id: 7,
      name: 'Mac Mini',
      price: '300 990 ₽',
      colors: [
         { id: 1, name: 'Темный титан', color: "#4A4846" },
         { id: 2, name: 'Светлый титан', color: "#F4F2EE" },
         { id: 3, name: 'Натуральный титан', color: "#FDE8CF" },
      ],
      img: '../../../img/cards/card_7.webp',
      imgHidden: '../../../img/cards/card_7.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false,
      inCart: false
   },

   {
      id: 8,
      name: 'ASUS VivoBook 15 M1502IA-BQ011W',
      price: '270 990 ₽',
      colors: [
         { id: 1, name: 'Темный титан', color: "#4A4846" },
         { id: 2, name: 'Светлый титан', color: "#F4F2EE" },
         { id: 3, name: 'Натуральный титан', color: "#FDE8CF" },
      ],
      img: '../../../img/cards/card_16.webp',
      imgHidden: '../../../img/cards/card_16.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false,
      inCart: false
   },
]

/**
 * TODO Рендер
 */

const productsLists = document.querySelectorAll('[data-products="product-list"]')

productsLists.forEach(item => {
   item.insertAdjacentHTML('afterbegin', renderProductList(products))
})

function renderProductList (productsList) {
   // NOTE Стикер "Нет в наличии" - товара нет в наличии
   const stickerSoldOut = `<span class="ui-sticker sticker_sold ">Нет в наличии</span>`
   const stickerSale = `<span class="sticker_sale">-10%</span>`


   // TODO Вывод списка товаров
   let products = productsList.map(product => {

      return `
         <div class="product-card swiper-slide">
            <div class="product-img">
               <a class="img-wrap" href="../../../../pages/page-product/page-product.html">
                  <div class="img img_main"><img src="${product.img}" alt=""></div>
                  <div class="img img_hover"><img loading="lazy" src="${product.imgHidden}" alt=""></div>
               </a>

               <div class="sticker-wrap">
                  ${product.soldOut ? stickerSoldOut : ''}
               </div>
         
               <div class="product-controls">
                  <div class="btn_circle btn_save-product-card btn_quickview">
                     <i class="i-eye"></i>
                  </div>
               </div>
         
               <div class="action-wrap">
                  ${ product.soldOut ? stickerSale : ''}
                  ${ renderCartBtn(product.soldOut, product.inCart) }
               </div>
            </div>
         
            <div class="info">
               ${ product.colors ? renderColors(product.colors) : '' }
               <h4 class="title"><a href="../../../../pages/page-product/page-product.html">${product.name}</a></h4>
               <span class="price">${product.price}</span>
            </div>
         </div>
      `
   })

   return products.join('')
}

// TODO Создание HTML цветов в карточке товара
function renderColors(arr) {
   let colors = arr.map(item => {
      return `<li class="colors__item" style="background: ${item.color};" title="${item.name}"></li>`
   })

   const colorsListHTML = `
      <ul class="colors">
         ${ colors ? colors.join('') : '' }
      </ul>
   `

   return colorsListHTML
}

// TODO Создание HTML для кнопки корзины и "Заказать"
function renderCartBtn(availability, statusCart) {
   const defaultCartBtn = `
      <button class="btn_circle btn_cart btn_cart-add ${statusCart ? 'inCart' : ''}">
         <img src="../../../../img/check_notification.svg" />
         <i class="i-cart"></i>
      </button>
   `
   const orderCartBtn = `<a href="../../../../pages/page-product/page-product.html" class="btn_card-order">Заказать</a>`

   return availability ? orderCartBtn : defaultCartBtn
}
