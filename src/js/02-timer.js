import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';


const ref = {
    inputValue:document.querySelector('#datetime-picker')
}

ref.inputValue.addEventListener('input', () => {
    console.log();
})




const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      console.log(currentTime - startTime);
    }, 1000);
  },
};


// timer.start();


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const fp = flatpickr('#datetime-picker', { options });


