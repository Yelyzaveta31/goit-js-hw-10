
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const timer = {
    deadline: new Date('2024-04-10T00:00:00'),
    elements: {
        days: document.querySelector('[data-days]'),
        hours: document.querySelector('[data-hours]'),
        minutes:document.querySelector('[data-minutes]'),
        seconds: document.querySelector('[data-seconds]')
    },

   start() {
    setInterval(() => {
        const diff = this.deadline.getTime() - Date.now();
        const {days, hours, minutes, seconds} = this.convertMs(diff);
        this.elements.days.textContent = days;
        this.elements.hours.textContent = hours;
        this.elements.minutes.textContent = minutes;
        this.elements.seconds.textContent = seconds;
        console.log(days, hours, minutes, seconds);
    }, 1000);
   },

   stop() {
   },

   convertMs(diff){
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
  },
};

timer.start();



// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//       console.log(selectedDates[0]);
//     },
//   };


//   flatpickr(selector, options);
  

