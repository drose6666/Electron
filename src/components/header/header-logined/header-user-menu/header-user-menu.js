const headerAvatars = document?.querySelectorAll('.header-user');
const headerUserMenus = document?.querySelectorAll('.header-user-menu');

if (headerAvatars) 
   for (let avatar of headerAvatars) {
      avatar.addEventListener('click', function() {
         for (let menu of headerUserMenus) {
            menu.classList.toggle('active')
         }
      })
   }

