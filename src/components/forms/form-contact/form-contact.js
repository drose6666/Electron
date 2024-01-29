import sendForm from "../../../js/sendForm.js";

document.getElementById('contact_form').addEventListener('submit', async function (e) {
   e.preventDefault();
   await sendForm(this)
});