// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



let userSelectedDate = 0;
let differenceTime = 0;

const btnStart = document.querySelector("[data-start]");
const inputTime = document.querySelector("#datetime-picker");
const showTime = document.querySelectorAll(".value");


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    differenceTime = userSelectedDate - new Date(); 
    if (differenceTime < 1) {
      iziToast.error({
        message: `Please choose a date in the future`,
        position: 'topRight',
      });
      btnStart.disabled = true;
      btnStart.classList.remove(`btn-active`);
    } else {
      btnStart.disabled = false;
      btnStart.classList.add(`btn-active`);
    }
  },
};

btnStart.disabled = true;

flatpickr("#datetime-picker", options);


btnStart.addEventListener("click", event => {
  const repeatTime = setInterval(() => {
    differenceTime = userSelectedDate - new Date(); 
    event.preventDefault();
    inputTime.disabled = true;
    btnStart.classList.remove(`btn-active`);

    if (differenceTime < 1) {
      btnStart.disabled = true;
      inputTime.disabled = false;
      clearInterval(repeatTime);
      return;
    }

    const convertedTime = convertMs(differenceTime);
    showTime[0].innerText = convertedTime.days.toString().padStart(2, '0');
    showTime[1].innerText = convertedTime.hours.toString().padStart(2, '0');
    showTime[2].innerText = convertedTime.minutes.toString().padStart(2, '0');
    showTime[3].innerText = convertedTime.seconds.toString().padStart(2, '0');
  }, 1000);
});


function convertMs(ms) {
  // Number of milliseconds per unit of time
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
};

