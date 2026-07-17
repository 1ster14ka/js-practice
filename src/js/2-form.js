const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.elements.email;
const messageEl = formEl.elements.message;

const formData = {
  email: '',
  message: '',
};

const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedData) {
  formData.email = savedData.email;
  formData.message = savedData.message;
}

emailEl.value = formData.email;
messageEl.value = formData.message;

formEl.addEventListener('input', saveInputUser);
formEl.addEventListener('submit', submitForm);

function saveInputUser(event) {
  formData.email = event.currentTarget.elements.email.value;
  formData.message = event.currentTarget.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitForm(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';

  formEl.reset();
}
