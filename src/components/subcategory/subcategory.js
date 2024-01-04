window.addEventListener('load', function () {
   const subcategoryList = document.querySelectorAll('.subcategory-list')
   subcategoryList.forEach(item => {
      let childsCount = item.children.length

      if (childsCount > 6) 
         item.style.gridTemplate = `1fr 1fr / repeat(${Math.ceil(childsCount / 2)}, 1fr)`
      })
})