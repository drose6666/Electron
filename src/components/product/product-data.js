const products = [
   {
      id: 1,
      name: 'iPhone 15',
      price: '190 990 ₽',
      img: '../../../img/optimized/cards/card_3.webp',
      imgHidden: '../../../img/optimized/cards/card_3_2.webp',
      isFavourites: true,
      isCompare: true,
      soldOut: true 
   },

   {
      id: 2,
      name: 'MacBook Pro (M2 Pro, 2023)',
      price: '300 990 ₽',
      img: '../../../img/optimized/cards/card_1.webp',
      imgHidden: '../../../img/optimized/cards/card_1.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 3,
      name: 'Samsung Galaxy S23 Ultra в комплекте с Buds 2 Pro',
      price: '170 990 ₽',
      img: '../../../img/optimized/cards/card_2.webp',
      imgHidden: '../../../img/optimized/cards/card_2.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 4,
      name: 'iPad Pro (6th Gen, 2022)',
      price: '300 990 ₽',
      img: '../../../img/optimized/cards/card_4.webp',
      imgHidden: '../../../img/optimized/cards/card_4.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },
   {
      id: 5,
      name: 'iPhone 15 Pro Max',
      price: '210 990 ₽',
      img: '../../../img/optimized/cards/card_5.webp',
      imgHidden: '../../../img/optimized/cards/card_5_2.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 6,
      name: 'MacBook Air 15',
      price: '300 990 ₽',
      img: '../../../img/optimized/cards/card_6.webp',
      imgHidden: '../../../img/optimized/cards/card_6.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 7,
      name: 'Mac Mini',
      price: '300 990 ₽',
      img: '../../../img/optimized/cards/card_7.webp',
      imgHidden: '../../../img/optimized/cards/card_7.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 8,
      name: 'ASUS VivoBook 15 M1502IA-BQ011W',
      price: '270 990 ₽',
      img: '../../../img/optimized/cards/card_16.webp',
      imgHidden: '../../../img/optimized/cards/card_16.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },
   {
      id: 9,
      name: 'iPhone 15 Pro Max',
      price: '210 990 ₽',
      img: '../../../img/optimized/cards/card_5.webp',
      imgHidden: '../../../img/optimized/cards/card_5_2.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 10,
      name: 'MacBook Air 15',
      price: '300 990 ₽',
      img: '../../../img/optimized/cards/card_6.webp',
      imgHidden: '../../../img/optimized/cards/card_6.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 11,
      name: 'Mac Mini',
      price: '300 990 ₽',
      img: '../../../img/optimized/cards/card_7.webp',
      imgHidden: '../../../img/optimized/cards/card_7.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 12,
      name: 'ASUS VivoBook 15 M1502IA-BQ011W',
      price: '270 990 ₽',
      img: '../../../img/optimized/cards/card_16.webp',
      imgHidden: '../../../img/optimized/cards/card_16.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 3,
      name: 'iPhone 15',
      price: '190 990 ₽',
      img: '../../../img/optimized/cards/card_3.webp',
      imgHidden: '../../../img/optimized/cards/card_3_2.webp',
      isFavourites: true,
      isCompare: true,
      soldOut: true 
   },

   {
      id: 14,
      name: 'MacBook Pro (M2 Pro, 2023)',
      price: '300 990 ₽',
      img: '../../../img/optimized/cards/card_1.webp',
      imgHidden: '../../../img/optimized/cards/card_1.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 15,
      name: 'Samsung Galaxy S23 Ultra в комплекте с Buds 2 Pro',
      price: '170 990 ₽',
      img: '../../../img/optimized/cards/card_2.webp',
      imgHidden: '../../../img/optimized/cards/card_2.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
   },

   {
      id: 16,
      name: 'iPad Pro (6th Gen, 2022)',
      price: '300 990 ₽',
      img: '../../../img/optimized/cards/card_4.webp',
      imgHidden: '../../../img/optimized/cards/card_4.webp',
      isFavourites: true,
      isCompare: false,
      soldOut: false 
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
   // NOTE Иконка корзины, когда товар есть в наличии
   const cartIcon = `
      <div class="ui-circle-icon circle-icon_cart">
         <i class="i-cart"></i>
      </div>
   `;

   // NOTE Кнопка заказа, когда товара нет в наличии
   const orderBtn = `
      <a href="#" class="btn_card-order">Заказать</a>
   `

   // NOTE Стикер "Нет в наличии" - товара нет в наличии
   const stickerSoldOut = `
      <div class="ui-sticker sticker_sold ">Нет в наличии</div>
   `

   // TODO Вывод списка товаров
   let products = productsList.map(product => {
      return `
         <div class="product-card swiper-slide">
            <div class="img">
               <a href="#">
                  <img src="${product.img}" alt="">
                  <img src="${product.imgHidden}" alt="" class="hover-img">
               </a>
               
               <div class="sticker-wrap">
                  ${product.soldOut ? stickerSoldOut : ''}
               </div>
         
               <div class="quick-nav">
                  <div class="ui-circle-icon circle-icon_card btn_quickview">
                     <i class="i-eye"></i>
                  </div>
         
                  <div class="ui-circle-icon circle-icon_card ${product.isCompare ? 'active' : ''}">
                     <i class="i-compare"></i>
                  </div>
         
                  <div class="ui-circle-icon circle-icon_card ${product.isFavourites ? 'active' : ''}">
                     <i class="i-heart"></i>
                  </div>
               </div>
         
               <div class="action-wrap">
                  ${product.soldOut ? orderBtn : cartIcon}
               </div>
            </div>
         
            <div class="info">
               <h4 class="title"><a href="#">${product.name}</a></h4>
               <span class="price">${product.price}</span>
            </div>
         </div>
      `
   })

   return products.join('')
}