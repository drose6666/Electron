/**
 * TODO Product option
 */

const productOptions = [
   {
      id: 1,
      name : 'Цвет',
      options: [
         { id: 1, name: 'colors', value: 'Желтый', color: '#EAE1BA', disabled: false, selected: true},
         { id: 2, name: 'colors', value: 'Черный', color: '#4C4D4F', disabled: false, selected: false},
      ]
   },
   {
      id: 2,
      name : 'Память',
      options: [
         { id: 1, name: 'memory', value: '128 Gb', disabled: false, selected: false },
         { id: 2, name: 'memory', value: '256 Gb', disabled: false, selected: true },
         { id: 3, name: 'memory', value: '512 Gb', disabled: false, selected: false },
         { id: 5, name: 'memory', value: '1 Tb', disabled: true, selected: false },
      ]
   },
]

function createHTMLOptionItem (productOptions) {
   const renderedFieldsets = productOptions.map(fieldset => {
      return `
         <fieldset class="product-options ${fieldset.id === 1 ? 'color_options' : ''}">
            <h2 class="product-options__title">
               ${fieldset.name}: 
               ${fieldset.id === 1 ? createHTMLColorName(fieldset.options) : ''}
            </h2>
            <div class="product-options__list">
               ${createHTMLOptions(fieldset.options, fieldset.id)}
            </div>
         </fieldset>
      `
   })

   return renderedFieldsets.join('');
}

// TODO Создание HTML для отображения названия цвета
function createHTMLColorName(colors) {
   let currentColor = colors.find(color => color.selected)
   return `<strong class="color-name">${currentColor.value}</strong>`
}

// TODO Создание HTML-структуры списка элементов опции для каждого fieldset
function createHTMLOptions (arrOptions, optionItemId) {
   let options = arrOptions.map(option => {
      if (optionItemId === 1) {
         return `
            <label class="product-option color_option" title="${option.value}">
               <input type="radio" name="${option.name}" value="${option.value}" ${option.disabled && 'disabled'} ${option.selected && 'checked'} class="product-option__input visually-hidden">
               <div class="product-option__custom" style="background: ${option.color}"></div>
            </label>
         `
      } else {
         return `
            <label class="product-option">
               <input type="radio" name="${option.name}" value="${option.value}" ${option.disabled && 'disabled'} ${option.selected && 'checked'} class="product-option__input visually-hidden">
               <div class="product-option__custom">
                  <h6 class="product-option__custom__name">${option.value}</h6>
               </div>
            </label>
         `
      }
   })

   return options.join('')
}


// TODO Рендер списка опций
const formProductoptions = document.querySelectorAll('.product-info__options')
formProductoptions.forEach(item => {
   item.insertAdjacentHTML('afterbegin', createHTMLOptionItem(productOptions))
})


// TODO Изменение названия цвета при выборе цвета
const colorsNodes = document.querySelectorAll('.color_option')

colorsNodes.forEach(item => {
   item.addEventListener('change', function () {
      let field = item.querySelector('.product-option__input')
      let currentColorNode = field.checked

      if (currentColorNode) {
         let parentColorNode = item.parentNode
         let colorNameParent = parentColorNode.previousElementSibling
         colorNameParent.querySelector('.color-name').innerText = field.value
      }
   })
})
