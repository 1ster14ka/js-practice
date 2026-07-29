import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  loop: true,
});

const listEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

export function createGallery(images) {
  // lightbox.refresh();

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item"><a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"/>
      </a>
      <p>${likes}</p>
      <p>${views}</p>
      <p>${comments}</p>
      <p>${downloads}</p>
      </li>`
    )
    .join('');
  listEl.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  listEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('close');
}

export function hideLoader() {
  loaderEl.classList.add('close');
}
