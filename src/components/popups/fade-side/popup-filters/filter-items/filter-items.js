/* TODO Список элементов фильтра  */
const filterOptions = [
   {
      id: 1,
      name : 'Бренд',
      options: [
         { id: 1, name: 'brand', value: 'Apple', count: 325, disabled: false },
         { id: 2, name: 'brand', value: 'Asus', count: 325, disabled: false },
         { id: 3, name: 'brand', value: '128/512 Gb', count: 325, disabled: false },
         { id: 4, name: 'brand', value: '16/512 Gb', count: 325, disabled: false },
         { id: 5, name: 'brand', value: '32/512 Gb', count: 325, disabled: false },
         { id: 6, name: 'brand', value: '128/512 Gb', count: 325, disabled: false },
         { id: 7, name: 'brand', value: '16/512 Gb', count: 325, disabled: false },
         { id: 8, name: 'brand', value: '32/512 Gb', count: 325, disabled: false },
         { id: 9, name: 'brand', value: '128/512 Gb', count: 325, disabled: false },
         { id: 10, name: 'brand', value: '16/512 Gb', count: 325, disabled: true },
         { id: 11, name: 'brand', value: '32/512 Gb', count: 325, disabled: true },
         { id: 12, name: 'brand', value: '128/512 Gb', count: 325, disabled: true },
      ]
   },
   {
      id: 2,
      name : 'Цвет',
      options: [
         { id: 1, name: 'color', value: 'Светлый титан', count: 325, color: '#F4F2EE', disabled: false },
         { id: 2, name: 'color', value: 'Темный титан', count: 325, color: '#4A4846', disabled: false },
         { id: 3, name: 'color', value: 'Натуральный титан', count: 325, color: '#FDE8CF', disabled: false },
         { id: 4, name: 'color', value: 'Красный титан', count: 325, color: '#DE8E86', disabled: false },
         { id: 5, name: 'color', value: 'Зеленый титан', count: 325, color: '#516956', disabled: false },
         { id: 6, name: 'color', value: 'Синий титан', count: 325, color: '#82A7C8', disabled: true },
      ]
   },
   {
      id: 3,
      name : 'Разрешение',
      options: [
         { id: 1, name: 'resolution', value: '2560 x 1664', count: 325, disabled: false },
         { id: 2, name: 'resolution', value: '2880 x 1664', count: 325, disabled: false },
         { id: 3, name: 'resolution', value: 'UHD (2880*1800)', count: 325, disabled: false },
         { id: 4, name: 'resolution', value: 'WQXGA (2560*1600)', count: 325, disabled: true },
      ]
   },
   {
      id: 4,
      name : 'Диагональ',
      options: [
         { id: 1, name: 'diagonal', value: '14.3”', count: 325, disabled: false },
         { id: 2, name: 'diagonal', value: '15.3”', count: 325, disabled: false },
         { id: 3, name: 'diagonal', value: '15.6”', count: 325, disabled: true },
      ]
   }
]



/* TODO Рендер списка опций фильтра  */
function renderFilterOptions (filterOptions) {
   const renderedFieldsets = filterOptions.map(fieldset => {
      let options = fieldset.options.map(option => {
         let isColor = fieldset.id === 2 ?  `style="background: ${option.color}"` : '';

         return `
            <li class="filter-list__item">
               <label class="ui-control filter checkbox ${fieldset.id === 2 ? 'color': ''}">
                  <input type="checkbox" name="${option.name}" value="${option.value}" ${option.disabled ? 'disabled' : ''} class="ui-control__input visually-hidden">
                  <span class="ui-control__custom" ${isColor}></span>
               
                  <div class="ui-control__name">
                     <span class="value">${option.value}</span>
                     <span class="count">(${option.count})</span>
                  </div>
               </label>
            </li>
         `
      })

      return `
         <fieldset class="filter-item">
            <legend class="filter-item__title">${fieldset.name}</legend>
         
            <ul class="filter-list filter-collapse ${fieldset.id === 2 ? 'color_list': ''}">
               ${options.join('')}
            </ul>
         </fieldset>
      `
   })
   return renderedFieldsets.join('');
}



/* TODO Вставляем список в HTML */
let filterAfterInsert = document.querySelector('#form-filters .filter-item.price')
filterAfterInsert.insertAdjacentHTML('afterend', renderFilterOptions(filterOptions))



/* TODO Очищаем все выделенные элменты фильтра */
const btnCancel = document.querySelector('#form-filters .btn_filter_cancel')

function clearOptions () {
   let filterItemsChecked = document.querySelectorAll('.filter-list__item .ui-control__input:checked')
   for (let i = 0; i < filterItemsChecked.length; i++) {
      filterItemsChecked[i].checked = false
   }
}

btnCancel.addEventListener('click', clearOptions)