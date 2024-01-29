import sendForm from "../../../js/sendForm.js";

document.getElementById('form_call').addEventListener('submit', async function (e) {
   e.preventDefault();
   await sendForm(this)
});