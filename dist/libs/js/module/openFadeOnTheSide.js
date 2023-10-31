export default class openFadeOnTheSide {
   constructor ({ fadeSelector, close, open, overlay, closeItems }) {
      this.$fadeElement = document.querySelector(fadeSelector)
      this.$selectorClose = document.querySelector(close)
      this.$selectorOpen = document.querySelectorAll(open)
      this.$overlay = document.querySelector(overlay)
      this.$closeItems = document.querySelectorAll(closeItems)

      this.#setup()
   }

   #setup = () => {
      for (let i = 0; i < this.$selectorOpen.length; i++) {
         this.$selectorOpen[i].addEventListener('click', this.onOpen)
      }

      for (let i = 0; i < this.$closeItems.length; i++) {
         this.$closeItems[i].addEventListener('click', this.onClose)
      }

      this.$overlay?.addEventListener('click', this.onClose)
      
      this.$selectorClose?.addEventListener('click', this.onClose)
      document.body?.addEventListener('keydown', (e) => {
         if (e.keyCode == 27) this.onClose()
      })
   }

   onOpen = () => {
      this.$fadeElement.classList.add('active')
      this.$overlay.classList.add('active')
      document.body.classList.add('no-scroll')
   }

   onClose = () => {
      this.$fadeElement.classList.remove('active')
      this.$overlay.classList.remove('active')
      document.body.classList.remove('no-scroll')
   }
}


