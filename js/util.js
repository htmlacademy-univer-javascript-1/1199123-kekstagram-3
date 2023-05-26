function showAlert(message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '10px';
  alertContainer.style.top = '10px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.fontFamily = 'Times New Roman';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.color = 'white';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
}

const getRandomInt = (a, b) => {
  const min = Math.ceil(a)
  const max = Math.floor(b)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const checkStrLength = (str, maxLen) => str.length <= maxLen

export { showAlert }
export { getRandomInt, checkStrLength }
