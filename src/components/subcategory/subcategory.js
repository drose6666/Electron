window.addEventListener('load', function () {
   const subcategoryList = document.getElementById('subcategory-list')
   let childsCount = subcategoryList.children.length

   if (childsCount > 6) 
      subcategoryList.style.gridTemplate = `1fr 1fr / repeat(${Math.ceil(childsCount / 2)}, 1fr)`
})