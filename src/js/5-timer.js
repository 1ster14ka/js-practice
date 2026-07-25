// console.log('First');

// function foo(str) {
//   console.log(`Hello ${str}`);
// }

// const timerID = setTimeout(foo, 2000, 'Kate');
// clearTimeout(timerID);

// console.log('Third');

// console.log(timerID);

// const date = new Date('2001-01-30T22:00:30');
// const date = new Date();
// console.log(date.getTime());

// const startTime = Date.now();

// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }

// const endTime = Date.now();

// console.log(`Elapsed time ${endTime - startTime} ms`);

// const leftHandle = 'qwertasdfgzxcvb';
// const rigthHandle = 'yuiophjklnm'.split('');
// function whichHand(word) {
//   const left = word.split('').find(letter => {
//     return leftHandle.includes(letter);
//   });
//   const right = word.split('').find(letter => {
//     return rigthHandle.includes(letter);
//   });
//   if (!word.trim().length) {
//     return 'NONE';
//   }

//   if (left && right) {
//     return 'BOTH';
//   } else if (right) {
//     return 'RIGHT';
//   }
//   return 'LEFT';
// }

// console.log(whichHand('type'));

// const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// const result = str => {
//   return str
//     .split('')
//     .map(letter => (vowels.includes(letter) ? '*' : letter))
//     .join('');
// };

// console.log(result('Hello World'));

// let isSucces = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSucces) {
//       resolve('True');
//     } else {
//       reject('Error');
//     }
//   }, 2000);
// });

// promise.then(onResolve, onReject);

// console.log(promise);

// const makeOrder = dish => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//       if (random > 0.5) {
//         resolve(`Make order ready ${dish}`);
//       }
//       reject(`Sorry order ${dish} is not available`);
//     });
//   });
// };

// makeOrder('cupcake')
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  enableSeconds: true,
  dateFormat: 'Y-m-d H:i:S',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  secondIncrement: 1,
  disableMobile: true,

  onClose(selectedDates) {
    if (Date.now() > selectedDates[0]) {
      iziToast.error({
        message: '❌ Please choose a date in the future',
        messageSize: 18,
        messageLineHeight: 50,
        position: 'topRight',
        icon: '',
        timeout: '2000',
      });
      changeDisabledEl(btnStart, true);

      return;
    }
    userSelectedDate = selectedDates[0];

    changeDisabledEl(btnStart, false);
  },
};
const arrSpanEl = [...document.querySelectorAll('.value')];
const btnStart = document.querySelector('button[data-start]');
const inputDate = document.querySelector('#datetime-picker');
let userSelectedDate;
let intervalId = null;

changeDisabledEl(btnStart, true);

btnStart.addEventListener('click', startTimer);
flatpickr(inputDate, options);

function startTimer() {
  changeDisabledEl(btnStart, true);
  changeDisabledEl(inputDate, true);

  intervalId = setInterval(() => {
    const milliseconds = userSelectedDate - Date.now();
    let time = convertMs(milliseconds);
    if (milliseconds < 1) {
      clearInterval(intervalId);
      changeDisabledEl(btnStart, false);
      changeDisabledEl(inputDate, false);

      return;
    }
    arrSpanEl.forEach(el => {
      const key = Object.keys(el.dataset)[0];

      el.textContent = addLeadingZero(time[key]);
    });
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function changeDisabledEl(element, value) {
  element.disabled = value;
}
