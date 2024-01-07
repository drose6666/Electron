const notificationNode = document.querySelector('.product-add-notification')
const btnCartAdd = document.querySelectorAll('.btn_cart-add')
const btnClose = document.querySelector('.product-add-notification .ui-close')

btnCartAdd.forEach(btnCart => {
   btnCart.addEventListener('click', function() {

      if (!btnCart.classList.contains('inCart')) {
         // changeStatusCartOfProduct(btnCart)
         handlerNotification('open')
      }

      // if (notificationNode.classList.contains('active')) {
      //    let closeTimeout = setTimeout(() => {
      //       notificationNode.classList.remove('active')
      //    }, 2000)
      // }
   })
})

btnClose.addEventListener('click', () => handlerNotification('close'))




function handlerNotification(handler) {
   handler === 'open'
      ? notificationNode.classList.add('active')
      : notificationNode.classList.remove('active')
}


// function changeStatusCartOfProduct(btn) {
//    btn.classList.contains('inCart')
//       ? btn.classList.remove('inCart')
//       : btn.classList.add('inCart')
// }