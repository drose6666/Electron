const fileComponent = document.querySelector('.ui-file')
const fileInput = document.getElementById("ui-file__input");
const imagePreviewContainer = document.querySelector(".ui-file-previews");


fileInput.addEventListener("change", handleFileSelection);

function handleFileSelection() {
   const selectedFiles = Array.from(this.files);

   selectedFiles.forEach((file) => {
      if (file.type.match(/image.*/) && selectedFiles.length <= 6) {
         if (file.size <= 5 * 1024 * 1024) {

            let previewImage = {
               name: file.name,
               size: formatBytes(file.size),
               url: URL.createObjectURL(file)
            }
            
            imagePreviewContainer.insertAdjacentHTML('beforeend', createPreviewFile(previewImage))

            const previewFileCloseBtn = document.querySelectorAll('.close_image-preview')
            previewFileCloseBtn.forEach(closeBtn => {
               closeBtn.addEventListener('click', function () {
                  removePreviewFile(closeBtn);
                  if (imagePreviewContainer.childElementCount >= 6) {
                     fileComponent.classList.add('hidden')
                  } else {
                     fileComponent.classList.remove('hidden')
                  }
               })
            })

            if (imagePreviewContainer.childElementCount >= 6) {
               fileComponent.classList.add('hidden')
            } else {
               fileComponent.classList.remove('hidden')
            }
            
         } else {
            console.log("Размер изображения превышает 5 Мб");
         }
      } else {
         console.log("Файл не является изображением (.jpg, .jpeg, .png, .webp)");
      }
   });
}

function createPreviewFile ({ name, size, url }) {
   return `
      <div class="preview">
         <img src="${url}" alt="">

         <div class="preview__info">
            <span class="preview__info__item name">${name}</span>
            <span class="preview__info__item size">${size}</span>
         </div>

         <div class="ui-close close_image-preview">
            <i class="i-close"></i>
         </div>
      </div>
   `
}

function removePreviewFile (currentBtnClose) {
   
   let parent = currentBtnClose.parentNode;
   parent.remove();
   fileInput.value = '';
}


function formatBytes(bytes, decimals = 1) {
  if (bytes === 0) return "0 Б";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Б", "КБ", "МБ", "ГБ", "ТБ", "ПБ", "ЭБ", "ЗБ", "ИБ"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

function hideFileInput() {
   fileComponent.style.display = "none";
}
