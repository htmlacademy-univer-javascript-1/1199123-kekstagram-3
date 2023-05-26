const fileInput = document.querySelector('#upload-file');
const editForm = document.querySelector('.img-upload__overlay');
const closeButton = editForm.querySelector('#upload-cancel');

function showEditForm() {
  editForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function hideEditForm() {
  editForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  editForm.reset();
  fileInput.value = '';
}

fileInput.addEventListener('change', () => {
  showEditForm();
})

closeButton.addEventListener('click', () => {
  hideEditForm();
})

document.addEventListener('keydown', (evt) => {
  if (!editForm.classList.contains('hidden') && evt.key === 'Escape') {
    hideEditForm();
  }
})
