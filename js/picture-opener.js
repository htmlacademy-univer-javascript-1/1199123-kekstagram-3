import { clearSlider } from "./effects-and-previews.js";
import { updateScale } from "./effects-and-previews.js";

const getData = () => {
  const imgUpload = document.querySelector('.img-upload__overlay');
  const fileInput = document.querySelector('.img-upload__input');
  const closeImgUploadButton = document.querySelector('.img-upload__cancel');
  const form = document.querySelector('.img-upload__form');
  const submitButton = document.querySelector('.img-upload__submit');
  return {
    imgUpload, fileInput, closeImgUploadButton, form, submitButton
  };
};

function openImgUpload() {
  const data = getData();
  data.fileInput.removeEventListener('change', openImgUpload);
  data.imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', escapeKeyHandler);
  const img = document.querySelector('.img-upload__preview').querySelector('img');
  img.src = window.URL.createObjectURL(data.fileInput.files[0]);
};

function closeImgUpload() {
  const data = getData();
  data.imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeKeyHandler);
  data.fileInput.addEventListener('change', openImgUpload);
  data.form.reset();
  clearSlider();
  updateScale(100);
  data.submitButton.disabled = false;
};

function escapeKeyHandler(evt) {
  if (evt.key === 'Escape') {
    closeImgUpload();
  }
}

const dataFirst = getData();
dataFirst.fileInput.addEventListener('change', openImgUpload);
dataFirst.closeImgUploadButton.addEventListener('click', closeImgUpload);

function closeImgUploadWithError() {
  const data = getData();
  data.imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapeKeyHandler);
  data.fileInput.value = '';
  data.fileInput.addEventListener('change', openImgUpload);
  data.submitButton.disabled = false;
};

export { openImgUpload, closeImgUpload, escapeKeyHandler, closeImgUploadWithError }
