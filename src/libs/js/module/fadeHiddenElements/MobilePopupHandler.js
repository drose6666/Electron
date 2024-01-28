export default class MobilePopupHandler {
   constructor ({ selector, btnClose, btnOpen = null, overlay, openByEvent = false }) {
      this.selector = document.querySelector(selector);
      this.btnClose = document?.querySelectorAll(btnClose);
      // this.elementsClose = document.querySelectorAll(elementsClose);
      this.btnOpen = document?.querySelectorAll(btnOpen);
      this.overlay = document?.querySelector(overlay);
      this.openByEvent = openByEvent;

      this.#setup()
   }

   body = document.body

   #setup () {
      this.openByEvent ? this.open() : this.close()


      this.#eventHandler('click', this.btnOpen, this.open.bind(this))
      this.#eventHandler('click', this.btnClose, this.close.bind(this))
      this.#eventHandler('click', this.overlay, this.close.bind(this))
      // this.#eventHandler('click', this.elementsClose, this.close.bind(this))
      this.#eventHandler('keydown', this.body, (e) => {
         e.keyCode === 27 && this.close.call(this)
      })
   }

   open () {
      this.#handler('open', 'active', this.selector)
      this.#handler('open', 'active', this.overlay)
      this.#handler('open', 'no-scroll', this.body)
   }

   close () {
      this.#handler('close', 'active', this.selector)
      this.#handler('close', 'active', this.overlay)
      this.#handler('close', 'no-scroll', this.body)
   }

   /**
    * TODO Обработчик действия (открытие/закрытие), которое совершается при клике
    * @param {string} handler - действие: open или close 
    * @param {string} className - css-класс, который будет добавляться/исчезать при событии 
    * @param {HTMLElement} element - нода, которой будет добавляться css-класс 
    */
   #handler (handler, className, element) {
      handler === 'open' && element.classList.add(className)
      handler === 'close' && element.classList.remove(className)
   }

   /**
    * 
    * @param {string} handler - cобытие (event) 
    * @param {HTMLElement} element - элемент, на котором будет обработчик события
    * @param {function} callback - callback-фцнкция, выполняющаяся при собитии (event)
    */
   #eventHandler (handler, element, callback) {
      if (element) {
         if (!element.length) element?.addEventListener(handler, callback)
         else 
            for (let el of element) {  
               el.addEventListener(handler, callback)
            }  
      }
   }
}