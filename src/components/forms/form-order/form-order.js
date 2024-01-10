import Dropdown from "../../ui/ui-dropdown/ui-dropdown.js";

const telData = [
   { id: 1, value: '+7' },
   { id: 2, value: '+1' },
   { id: 3, value: '+43' },
   { id: 4, value: '+373' },
]

new Dropdown ('.dropdown_tel', {
   data: telData,
   id: 1,
   placeholder: ''
})