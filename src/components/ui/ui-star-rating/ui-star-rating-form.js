const formReview = document.getElementById('form-send-review');
const inputRating = formReview.querySelector('.input_rating');
const stars = Array.from(formReview.querySelectorAll('.ui-star-form__input'));

inputRating.addEventListener('input', function () {
   this.value = this.value.replace(/[^1-9.]/g, ''); 

   const val = Math.round(this.value);
   if (val >= 1 && val <= 5) {
      const findEl = stars.find(item => Math.round(item.value) === val);
      if (findEl) findEl.checked = true;
   }
});

stars.forEach(item => {
   item.addEventListener('change', function () {
      inputRating.value = this.value;
   });
});