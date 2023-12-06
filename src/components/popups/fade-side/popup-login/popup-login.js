import PopupHandler from '../../../../libs/js/module/fadeHiddenElements/PopupHandler.js'
import '../../../forms/forms-login/forms-login.js';

// new PopupHandler ({
//    selector: '#popup-login',
//    btnClose: '.popup-login-close',
//    btnOpen: '.btn_login',
//    overlay: '#overlay-login',
// })

const popupLogin = document.querySelector('#popup-login .sign-wrap');
const dataFor = popupLogin.querySelectorAll('[data-for]');
const dataId = popupLogin.querySelectorAll('[data-id]');

dataFor.forEach(item => {
   item.addEventListener('click', function () {
      let currentDataForAttr = this.getAttribute('data-for')
      let currentDataId = [...dataId].find(item => item.getAttribute('data-id') === currentDataForAttr)
      
      for (let dataIdItem of dataId) {
         dataIdItem.classList.add('hidden')
      }

      currentDataId.classList.remove('hidden')
      popupLogin.style.height = `${currentDataId.clientHeight}px`

      if (currentDataForAttr === 'start-screen') popupLogin.style.height = 'auto' 
   })
})
