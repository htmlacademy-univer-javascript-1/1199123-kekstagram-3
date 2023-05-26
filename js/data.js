import { getRandomInt } from "./util.js";

function createPhotoArray() {
  const photoArray = [];

  for (let i = 1; i <= 25; i++) {
    const id = i;
    const url = `photos/${i}.jpg`;
    const description = `Описание фото #${i}`;
    const likes = getRandomInt(15, 200);
    const comments = getRandomInt(0, 200);
    photoArray.push({id, url, description, likes, comments})
  }

  return photoArray;
}

const EFFECTS = {
  none: {
    name: 'none',
    filter: '',
    size: ''
  },
  chrome: {
    name: 'chrome',
    step: 0.1,
    filter: 'grayscale',
    min: 0,
    max: 1,
    size: ''
  },
  sepia: {
    name: 'sepia',
    step: 0.1,
    filter: 'sepia',
    min: 0,
    max: 1,
    size: ''
  },
  marvin: {
    name: 'marvin',
    step: 1,
    filter: 'invert',
    min: 0,
    max: 100,
    size: '%'
  },
  phobos: {
    name: 'phobos',
    step: 0.1,
    filter: 'blur',
    min: 0,
    max: 3,
    size: 'px'
  },
  heat: {
    name: 'heat',
    step: 0.1,
    filter: 'brightness',
    min: 1,
    max: 3,
    size: ''
  }
};

export { EFFECTS };
export { createPhotoArray };
