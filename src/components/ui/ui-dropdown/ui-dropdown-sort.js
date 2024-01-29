export default class Dropdown {
   constructor (selector, options) {
      this.selector = selector,
      this.options = options

      this.#setup()
   }

   #setup () {
      this.$dropdown = document.querySelector(this.selector)
      this.#render()

      this.$selected = document.querySelector(`${this.selector} .selected__item`)
      this.$options = document.querySelectorAll(`${this.selector} .options__item`)

      this.$dropdown?.addEventListener('click', this.eventHandler.bind(this))
      
      this.$options.forEach(option => {
         option.addEventListener('click', (e) => {
            for (let i = 0; i < this.$options.length; i++) {
               this.$options[i].classList.remove('current')
            }
            this.onselectCurrent(e)
         })
      })

   }

   #render() {
      this.$dropdown?.insertAdjacentHTML('afterbegin', renderDropdown(this.options))
   }

   eventHandler() {
      let hasActive = this.$dropdown.classList.contains('active')
      hasActive
         ? this.$dropdown.classList.remove('active')
         : this.$dropdown.classList.add('active')
   }

   onselectCurrent(e) {
      let currentId = Number(e.target.dataset.id)
      let currentItem = this.options.data.find(item => item.id === currentId)

      document.querySelector(`${this.selector} .options [data-id="${currentId}"]`).classList.add('current')

      if (currentItem) {
         this.$selected.textContent = currentItem.value
         this.$selected.dataset.id = currentId
      }
   }
}  


function renderDropdown(options) {
   const { data: data, id: id, placeholder: placeholder } = options

   

   let curentItem = data.find(item => item.id === id)
   let textForSelected = curentItem ? curentItem.value : placeholder

   let innerOptions = data.map(option => {
      return `
         <li data-id="${option.id}" class="options__item ${id == option.id ? 'current' : ''}">${option.value}</li>
      `
   })

   

   return `
      <div class="selected">
         <span type="text" class="selected__item">${textForSelected}</span>
      </div>

      <div class="options-wrap">
         <ul class="options">
            ${innerOptions.join('')}
         </ul>
      </div>
   `
}