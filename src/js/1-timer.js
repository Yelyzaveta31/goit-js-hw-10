
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import izitoast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconError from '../img/icon-error.svg';

const buttonStart = document.querySelector('[data-start]');
buttonStart.setAttribute('disabled', true);

const inputDatetime = document.querySelector('#datetime-picker');

const timerElements = {
days: document.querySelector('[data-days]'),
hours: document.querySelector('[data-hours]'),
minutes:document.querySelector('[data-minutes]'),
seconds: document.querySelector('[data-seconds]')
};

let userSelectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      checkData(selectedDates[0]);
    },
  };
  flatpickr(inputDatetime, options);

  const izitoastOptions = {
    title: 'Error',
    message: 'Please choose a date in the future',
    backgroundColor: 'red',
    theme: 'dark',
    color: 'red',
    iconUrl: iconError,
    position: 'topRight',
};

const checkData = data => {
    if (data.getTime() > Date.now()) {
        userSelectedDate = data;
        buttonStart.removeAttribute('disabled');
    } else {
        buttonStart.setAttribute('disabled', true);
        izitoast.error (izitoastOptions);
    }
};

  const addLeadingZero = value => {
    return String(value).padStart(2, '0');
  };

   
    const setValues = () => {
        const diff = userSelectedDate.getTime() - Date.now();
        let { days, hours, minutes, seconds } = convertMs(diff);
        if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
return null;          
        }

        timerElements.days.textContent = addLeadingZero(days);
        timerElements.hours.textContent = addLeadingZero(hours);
        timerElements.minutes.textContent = addLeadingZero(minutes);
        timerElements.seconds.textContent = addLeadingZero(seconds);
        return true;
    };

   const stop = intervalId => {
    clearInterval(intervalId);
   }

   const start = () => {
    inputDatetime.setAttribute('disabled', true);
    buttonStart.setAttribute('disabled', true);

    setValues();
    const timerIntervalId = setInterval(() => {
        setValues() || stop(timerIntervalId);
    }, 1000);
  };
  
    
buttonStart.addEventListener('click', start);

   function convertMs(diff){
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(diff / day);
    // Remaining hours
    const hours = Math.floor((diff % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((diff % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((diff % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds};
  };

