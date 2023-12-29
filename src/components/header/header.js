import './header-logined/header-user-menu/header-user-menu.js';

const header = document.querySelector('header')

// TODO Проверка расстояния скролла и добавения класса 'active' плавающим элементам
function fadeInNavOnScroll(distance) {

   if (window.scrollY >= distance) {
      header.classList.add('sticky')
   } else {
      header.classList.remove('sticky')
   }
}


window.addEventListener('load', () => {
   fadeInNavOnScroll(40) 

   window.addEventListener('scroll', () => {
      fadeInNavOnScroll(40) 
   })
})