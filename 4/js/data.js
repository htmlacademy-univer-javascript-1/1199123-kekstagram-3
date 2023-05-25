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

export { createPhotoArray }
