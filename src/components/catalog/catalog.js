import Dropdown from "../ui/ui-dropdown/ui-dropdown.js";

const catalogFiltersData = [
   { id: 1, value: 'Цена по возрастанию' },
   { id: 2, value: 'Цена по убыванию' },
   { id: 3, value: 'Новинки' },
   { id: 4, value: 'Есть в наличии' },
   { id: 5, value: 'По рейтингу (возрастанию)' },
]

new Dropdown ('.catalog_sort', {
   data: catalogFiltersData,
   id: 1,
   placeholder: 'Выберите сортировку'
})