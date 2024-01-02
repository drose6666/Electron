const products = [
   {
      id: 1,
      name: 'iPhone 15',
      price: '190 990 ₽',
      colors: [
         { id: 1, name: 'Темный титан', color: "#4A4846" },
         { id: 2, name: 'Светлый титан', color: "#F4F2EE" },
         { id: 3, name: 'Натуральный титан', color: "#FDE8CF" },
      ],
      img: '../../../img/cards/card_3.webp',
      imgHidden: '../../../img/cards/card_3_2.webp',
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
      inCart: true
   },
   {
      id: 5,
      name: 'iPhone 15 Pro Max',
      price: '210 990 ₽',
      colors: [
         { id: 1, name: 'Темный титан', color: "#4A4846" },
         { id: 2, name: 'Светлый титан', color: "#F4F2EE" },
         { id: 3, name: 'Натуральный титан', color: "#FDE8CF" },
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
      inCart: true
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
   const stickerSoldOut = `
      <div class="ui-sticker sticker_sold ">Нет в наличии</div>
   `

   // TODO Вывод списка товаров
   let products = productsList.map(product => {

      return `
         <div class="product-card swiper-slide">
            <div class="product-img">
               <a class="img-wrap" href="../../../../pages/page-product/page-product.html">
                  <img loading="lazy" class="img img_main" src="${product.img}" alt="">
                  <img loading="lazy" class="img img_hover" src="${product.imgHidden}" alt="">
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
      <button class="btn-cart btn_cart-add ${statusCart ? 'inCart' : ''}">
         <span class="in-cart"></span>
         <i class="i-cart"></i>
      </button>
   `
   const orderCartBtn = `
      <a href="../../../../pages/page-product/page-product.html" class="btn_card-order">Заказать</a>
   `
   return availability ? orderCartBtn : defaultCartBtn
}


// TODO ПРи клике на кнопку корзины товар будет удаляться/добавляться в корзину
// Код наже описывает визиуальную часть кнопки корзины в карточке товара 
// без связи с массивом товаров

const cartBtns = document.querySelectorAll('.product-card .btn-cart')
for (let i = 0; i < cartBtns.length; i++) {
   cartBtns[i].addEventListener('click', () => changeStatusCartOfProduct(cartBtns[i]))
}

function changeStatusCartOfProduct(btn) {
   btn.classList.contains('inCart')
      ? btn.classList.remove('inCart')
      : btn.classList.add('inCart')
}