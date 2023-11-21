import PopupHandler from '../../../../libs/js/module/fadeHiddenElements/PopupHandler.js'

new PopupHandler ({
   selector: '#popup-sign',
   btnClose: '.popup-sign-close',
   btnOpen: '.btn_sign',
   overlay: '#overlay-sign',
})

const popupSign = document.getElementById('popup-sign');
const dataFor = popupSign.querySelectorAll('[data-for]');
const dataId = popupSign.querySelectorAll('[data-id]');

dataFor.forEach(item => {
   item.addEventListener('click', function () {
      let currentDataForAttr = this.getAttribute('data-for')
      let currentDataId = [...dataId].find(item => item.getAttribute('data-id') === currentDataForAttr)
      
      for (let dataIdItem of dataId) {
         dataIdItem.classList.add('hidden')
      }

      currentDataId.classList.remove('hidden')
   })
})
