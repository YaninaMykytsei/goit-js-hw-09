const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
  formData = savedData;
  form.elements.email.value = savedData.email || '';
  form.elements.message.value = savedData.message || '';
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log('Form Data:', formData);
  form.reset();
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
});
