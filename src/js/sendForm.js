// import Inputmask from "inputmask";

export default async function sendForm(form) {
   console.log('sendForm');
   try {
      const isValid = validateForm(form);
      if (isValid) {
      
         const phpHandlerUrl = "../../libs/telegram.php";

         const response = await fetch(phpHandlerUrl, {
         method: "POST",
         body: new FormData(form),
         });

         if (response.ok) {
         alert("Данные успешно отправлены на сервер.");
         } else {
         alert("Произошла ошибка при отправке данных на сервер.");
         }
      }
   } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке данных.");
   }
}

function validateForm(form) {
   console.log('validateForm');
   const inputs = form.querySelectorAll("input, textarea");
   let isFormValid = true;

   clearErrors(form);

   inputs.forEach((input) => {
      const type = input.dataset.type;
      const isRequired = input.hasAttribute("data-required");
      const value = input.value.trim();
      const errorMessage = input.nextElementSibling;
      const parentInputEl = input.parentNode;

      switch (type) {
         case "name":
            if ((isRequired && value === "") || !validateName(value)) {
               onError(errorMessage, parentInputEl, "Введите корректное имя");
               isFormValid = false;
            } else {
               onSuccess(errorMessage, parentInputEl);
            }
            break;

         case "tel":
            applyPhoneMask(input); // Применяем маску к полю телефона
            if ((isRequired && value === "") || !validatePhone(value)) {
               onError(errorMessage, parentInputEl, "Поле 'Телефон' заполнено некорректно.");
               isFormValid = false;
            } else {
               onSuccess(errorMessage, parentInputEl);
            }
            break;

         case "email":
            if ((isRequired && value === "") || !validateEmail(value)) {
               onError(errorMessage, parentInputEl, "Поле 'Email' заполнено некорректно.");
               isFormValid = false;
            } else {
               onSuccess(errorMessage, parentInputEl);
            }
            break;

         case "message":
            if ((isRequired && value === "") || !validateMessage(value)) {
               onError(errorMessage, parentInputEl, "Поле 'Сообщение' заполнено некорректно.");
               isFormValid = false;
            } else {
               onSuccess(errorMessage, parentInputEl);
            }
            break;

         default:
            break;
      }

      // Добавим обработчик события focus, чтобы скрыть сообщение об ошибке при фокусировке на поле
      input.addEventListener("focus", () => {
         clearErrorsForInput(input);
      });
   });

   return isFormValid;
}

function validateName(name) {
   const nameRegex = /^[a-zA-Zа-яА-ЯёЁ.\s-]+$/;
   return nameRegex.test(name);
}

function validatePhone(phone) {
   const phoneRegex = /^\d{3} \d{3} \d{2} \d{2}$/;
   return phoneRegex.test(phone);
}

function validateEmail(email) {
   const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return emailRegex.test(email);
}

function validateMessage(message) {
   return message.length <= 3000;
}

function onError(element, parentEl, message) {
   console.log('onError');
   parentEl.classList.add("error");
   element.textContent = message;
}

function onSuccess(element, parentEl) {
   parentEl.classList.remove("error");
   element.textContent = "";
}

function clearErrors(form) {
   const errorMessages = form.querySelectorAll(".error-message");
   errorMessages.forEach((message) => (message.textContent = ""));
}

function clearErrorsForInput(input) {
   const errorMessage = input.nextElementSibling;
   errorMessage.textContent = "";
   input.parentNode.classList.remove("error");
}

function applyPhoneMask(input) {
   Inputmask('999 999 99 99', { showMaskOnHover: false }).mask(input);
}