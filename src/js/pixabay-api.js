import axios from 'axios';

const API_KEY = '46450573-3594decb070dbd953bbf2f5a8';

export function getImagesByQuery(query) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
