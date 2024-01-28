import MobilePopupHandler from "./MobilePopupHandler.js";

export default class PopupHandler extends MobilePopupHandler {
   constructor ({ selector, btnClose, btnOpen = null, overlay, frame = null, insertTo = null, openByEvent = null }) {
      super ({ selector, btnClose, btnOpen, overlay, openByEvent })
      
      this.frame = frame
      this.insertTo = this.selector.querySelector(insertTo)
   }

   open () {
      super.open()
      this.frame && this.insertFrame()
   }

   close () {
      super.close()
      this.frame && this.removeFrame()
   }

   insertFrame () {
      this.insertTo.insertAdjacentHTML('afterbegin', this.frame)
   }

   removeFrame () {
      this.insertTo.querySelector('iframe')?.remove()
   }
}