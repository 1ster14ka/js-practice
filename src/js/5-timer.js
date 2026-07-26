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
