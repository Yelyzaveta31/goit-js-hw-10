
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconSuccess from '../img/icon-success.svg';
import iconError from '../img/icon-error.svg';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');


const promise = ({ delay, shouldFulfilled }) => {
    return new Promise((resolve, reject) => {
    if (delay >= 0) {
    setTimeout(() => {
        if ( shouldFulfilled) {
            resolve (delay);
        } else  {
            reject(delay);
        }
        }, delay);
} else { 
   reject("The number cannot be negative");
}
});
};

form.addEventListener('submit', event => {
    event.preventDefault();

    const delay = parseInt(form.elements.delay.value);
    const  shouldFulfilled = form.elements.state.value === 'fulfilled';
promise({ delay,  shouldFulfilled })
.then(
    delay => {
        iziToast.success({
            title: 'Success',
            message: `✅ Fulfilled promise in ${delay}ms`,
            backgroundColor: '#59a10d',
            theme: 'dark',
            color: 'green',
            iconUrl: iconSuccess,
            position: 'topRight',
    }); 
})
.catch(
    delay => {
    iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: '#ef4040',
        theme: 'dark',
        color: 'red',
        iconUrl: iconError,
        position: 'topRight',
}); 
});
});