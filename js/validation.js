import pristineMin from "../pristine/pristine.min.js";

const form = document.querySelector('.img-upload__form');
const regex = new RegExp('^#[а-яa-zA-ZА-ЯёЁ0-9]{1,15}$');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

function validateComment (value) {
  return value.length >= 20 && value.length <= 140;
}

function validateHashtag (value) {
  return value.length >= 16 && regex.test(value);
}

pristine.addValidator(
  form.querySelector('.text__description'),
  validateComment,
  'Комментарий должен содержать от 20 до 140 символов'
);

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  validateHashtag,
  'Хэштег должен начинаться с # и содержать от 1 до 15 символов'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    closeWindow();
    showSuccessMessage();
  }
});
