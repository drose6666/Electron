const passwordControl = document.querySelectorAll('.password-control__input');

passwordControl.forEach(item => {
   item.addEventListener('click', function () {
      let parent = this.parentNode
      
      this.checked 
         ? parent.previousElementSibling.type = 'text'
         : parent.previousElementSibling.type = 'password'
   })
})