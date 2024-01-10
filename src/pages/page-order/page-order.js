import '../../js/common.js';
import '../../components/product/product-counter/product-counter.js';

import '../../components/forms/form-order/form-order.js';
import '../../components/delivery/delivery.js';
import './order-final/order-final.js';
// import '../../components/popups/popup-success-order/popup-success-order.js';


const orderContent = document.querySelectorAll('.step-order[data-id]')
const orderBtns = document.querySelectorAll('.nav_order[data-for]')
const contentWrap = document.querySelector('.order-content')


window.addEventListener('load', setStartActiveContent)
window.addEventListener('load', function() {
   let currentActiveContent = document.querySelector('.step-order.active')
   contentWrap.style.minHeight = `${currentActiveContent.clientHeight}px`
})

// TODO Задаем активный контент при загрузке страницы
function setStartActiveContent() {
   let startContent = document.querySelector('.step-order[data-id="1"]')
   contentWrap.style.minHeight = `${startContent.clientHeight}px`
   startContent.classList.add('active')

   let startContentId = startContent.dataset.id
   
   setActiveTab(startContentId, [...orderBtns])
}


orderBtns.forEach(btn => {
   btn.addEventListener('click', () => setCurrentContent(btn))
})


// TODO Находим активную вкладку и добавляем ей класс 'active'
function setActiveTab(currentContentId, btnsArr) {
   let currentTab = btnsArr.find(btn => btn.dataset.for == currentContentId)

   for (let i = 0; i < btnsArr.length; i++) {
      btnsArr[i].classList.remove('active')
   }
   currentTab && currentTab.classList.add('active')
}


// TODO Находим текущий контент при клике на кнопки
function setCurrentContent(clickedTab) {
   let currentTabId = clickedTab.dataset.for
   let currentContent = document.querySelector(`.step-order[data-id="${currentTabId}"]`)

   contentWrap.style.minHeight = `${currentContent.clientHeight}px`
   for (let i = 0; i < orderContent.length; i++) {
      orderContent[i].classList.remove('active')
   }
   currentContent.classList.add('active')

   let currentContentId = currentContent.dataset.id
   setActiveTab(currentContentId, [...orderBtns])
}