import { showSuccess } from "./on-success.js";
import { showErrorFetch } from "./error-fetch.js";
import { showError } from "./error.js";

const SERVER_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const fetchData = (onSuccess) => {
  fetch(`${SERVER_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showErrorFetch();
    })
    .then((data) => onSuccess(data))
    .catch(() => {
      showErrorFetch();
    });
};

const sendData = (onSuccess, body) => {
  fetch(`${SERVER_URL}`, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      showError();
    })
    .then((data) => {
      onSuccess(data);
      showSuccess();
    })
    .catch(() => {
      showError();
    });
};

export { fetchData, sendData }
