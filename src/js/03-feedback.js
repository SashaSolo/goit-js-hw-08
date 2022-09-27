const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const valueInputEmail = form.querySelector('input[name=email]');
const valueInputMessage = form.querySelector('textarea[name=message]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    const objForm = {
      email: valueInputEmail.value,
      message: valueInputMessage.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objForm));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  if (valueInputEmail.value !== '' && valueInputMessage.value !== '') {
    console.log({
      email: valueInputEmail.value,
      message: valueInputMessage.value,
    });
  }
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

const loadValueFormAfterReloadPage = key => {
  try {
    const dataFormStorage = localStorage.getItem(key);
    return dataFormStorage === null ? undefined : JSON.parse(dataFormStorage);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const checkData = loadValueFormAfterReloadPage(LOCALSTORAGE_KEY);
if (checkData) {
  valueInputEmail.value = checkData.email;
  valueInputMessage.value = checkData.message;
}
