import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback__form'),
  textarea: document.querySelector('.feedback__textarea'),
    name: document.querySelector('.feedback__input--name'),
  phone: document.querySelector('.feedback__input--tel'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

let formData = {};

function onFormInput(e) {
  
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
  formData[e.target.name] = e.target.value;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  if (localStorage.getItem(STORAGE_KEY)) {
    refs.name.value = parsedData.name || '';
    refs.phone.value = parsedData.phone || '';
    refs.textarea.value = parsedData.message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.textarea.value && refs.name.value && refs.phone.value) {

  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    formData = {}
    //Object.getOwnPropertyNames(formData).forEach(key => (delete formData[key]));
  } 
}