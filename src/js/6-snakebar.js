import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const toastOptions = {
  messageColor: 'white',
  messageSize: 18,
  messageLineHeight: 50,
  position: 'topRight',
  timeout: 2000,
};

formEl.addEventListener('submit', getPromise);

function getPromise(event) {
  event.preventDefault();
  const delay = Number(event.currentTarget.elements.delay.value);
  const result = event.currentTarget.elements.state.value;
  createDelayedPromise(delay, result)
    .then(delay => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        backgroundColor: `rgb(16, 230, 94)`,
        ...toastOptions,
      });
    })
    .catch(delay => {
      console.log(delay);

      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: `rgb(250, 42, 46)`,
        ...toastOptions,
      });
    });
  event.currentTarget.reset();
}

function createDelayedPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
