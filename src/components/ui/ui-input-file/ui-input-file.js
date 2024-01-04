const fileComponent = document.querySelector('.ui-file');
const fileInput = document.getElementById("ui-file__input");
const imagePreviewContainer = document.querySelector(".ui-file-previews");

fileInput.addEventListener("change", handleFileSelection);

function handleFileSelection() {
  const selectedFiles = Array.from(this.files);

  selectedFiles.forEach((file) => {
    if (file.type.match(/image.*/) && imagePreviewContainer.childElementCount <= 5) {
      if (file.size <= 5 * 1024 * 1024) {
        const previewImage = {
          name: file.name,
          size: formatBytes(file.size),
          url: URL.createObjectURL(file)
        };

        imagePreviewContainer.insertAdjacentHTML('beforeend', createPreviewFile(previewImage));

        const previewFileCloseBtn = document.querySelectorAll('.close_input-file');
        previewFileCloseBtn.forEach(closeBtn => {
          closeBtn.addEventListener('click', function () {
            removePreviewFile(closeBtn);
            hideFileInput();
          });
        });

        hideFileInput();
      } else {
        alert("Размер изображения превышает 5 Мб");
      }
    } else {
      alert("Файл не является изображением (.jpg, .jpeg, .png, .webp) или превышено ограничение по количеству файлов");
    }
  });
}

function createPreviewFile({ name, size, url }) {
  return `
      <div class="preview">
         <img src="${url}" alt="">

         <div class="preview__info">
            <span class="preview__info__item name">${name}</span>
            <span class="preview__info__item size">${size}</span>
         </div>

         <div class="ui-close close_input-file">
            <i class="i-close"></i>
         </div>
      </div>
   `;
}

function removePreviewFile(currentBtnClose) {
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
  imagePreviewContainer.childElementCount >= 6
    ? fileComponent.classList.add('hidden')
    : fileComponent.classList.remove('hidden');
}
