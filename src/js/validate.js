function validateForm(formId) {
   const form = document?.getElementById(formId)
   const inputs = form?.querySelectorAll('input, textarea')

   console.log(inputs);
}

validateForm('form-order')
validateForm('form-calc-delivery')