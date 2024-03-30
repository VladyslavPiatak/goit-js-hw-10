// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const dateForm = document.querySelector(".form");



dateForm.addEventListener('submit', event => {
  event.preventDefault();
  const inputTimer = event.currentTarget.elements.delay.value;
  const inputState = event.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(inputTimer, inputState);
      if (inputState ==="fulfilled") {
        resolve();
      } else {
        reject();
      }
    }, inputTimer);
  });

promise
  .then(value => {
    iziToast.success({  
      color: 'green',
      position: "topRight",
      message: `✅ Fulfilled promise in ${inputTimer}ms`
  })
  })
  .catch(error => {
    iziToast.error({ 
      color: 'red',
      position: "topRight",          
      message: `❌ Rejected promise in ${inputTimer}ms`
  })
  });
});

