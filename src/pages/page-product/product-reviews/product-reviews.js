import Dropdown from "../../../components/ui/ui-dropdown/ui-dropdown.js";
import '../../../components/review/review.js';

const reviewsFiltersData = [
   { id: 1, value: 'Сначала новые' },
   { id: 2, value: 'Сначала старые' },
   { id: 3, value: 'Рейтинг: по возрастанию' },
   { id: 4, value: 'Рейтинг: по убыванию' },
]

new Dropdown ('.reviews_sort', {
   data: reviewsFiltersData,
   id: 1,
   placeholder: 'Выберите сортировку'
})
