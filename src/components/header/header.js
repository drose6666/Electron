import './header-logined/header-user-menu/header-user-menu.js';

const header = document.querySelector('header')

// TODO Проверка расстояния скролла и добавения класса 'active' плавающим элементам
function fadeInNavOnScroll(distance) {

   if (window.scrollY >= distance) {
      header.classList.add('sticky')
      setTimeout(() => {
         header.classList.add('active')
      }, 50)
   }

   if (window.scrollY <= 200) {
      header.classList.remove('active')
      header.classList.remove('sticky')
   } 
}


window.addEventListener('load', () => {
   fadeInNavOnScroll(200) 

   window.addEventListener('scroll', () => {
      fadeInNavOnScroll(200) 
   })
})