// import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './render-functions';

const toastOptions = {
  position: 'topRight',
  timeout: 3000,
  progressBar: true,
  close: true,
  maxWidth: '420px',
  messageColor: '#fff',
  titleColor: '#fff',
};
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value.trim();

  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(response => {
      const data = response.data.hits;
      if (!data.length) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#EF4040',
          ...toastOptions,
        });
        return;
      }

      createGallery(data);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });

  event.currentTarget.reset();
}
