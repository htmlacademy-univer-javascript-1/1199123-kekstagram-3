import { fetchData } from "./server.js";

const picMiniature = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictures = document.querySelector('.pictures');
  const documentFragment = new DocumentFragment();

  photos.forEach((photo) => {
    const template = pictureTemplate.cloneNode(true);
    const image = template.querySelector('.picture__img');
    const likes = template.querySelector('.picture__likes');
    const comments = template.querySelector('.picture__comments');
    image.src = photo.url;
    likes.textContent = photo.likes;
    comments.textContent = photo.comments;

    documentFragment.append(template);
});

  pictures.append(documentFragment);
};

fetchData(picMiniature);
