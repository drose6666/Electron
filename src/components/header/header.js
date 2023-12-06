import './header-logined/header-user-menu/header-user-menu.js';

const header = document.querySelector('header')

// TODO Проверка расстояния скролла и добавения класса 'active' плавающим элементам
function fadeInNavOnScroll(distance) {
   console.log('fadeInNavOnScroll');
   // let items = document.querySelectorAll(elements)

   if (window.scrollY >= distance) {
      header.classList.add('sticky')
      header.classList.add('active')
   }

   if (window.scrollY <= 200) {
      header.classList.remove('sticky')
      header.classList.remove('active')
   } 

   // for (let i = 0; i < items.length; i++) {
   //    if (window.scrollY >= distance) {
   //       items[i].classList.add('active')
   //    }
      
   //    if (window.scrollY <= 200) {
   //       items[i].classList.remove('active')
   //    }   
   // }
}


window.addEventListener('load', () => {
   fadeInNavOnScroll(200) 

   window.addEventListener('scroll', () => {
      fadeInNavOnScroll(200) 
   })
})