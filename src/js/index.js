// //  console.log("Hallo Lection 9");

// //  const logMessege = () => {
// //      console.log('Лог вызова callback через 3 сек');
// //  }

// //  console.log('До вызова setTimeout');

// // setTimeout(() => {
// //     console.log('внутри callback для setTimeout');
// // }, 2000);

// // console.log('после вызова setTimeout');
// const NOTIFICATION_DELAY = 3000;
// const timeoutId = null;

// const refs = {
//     notification: document.querySelector('.js-alert'),
// };
// console.log(refs.notification);

// refs.notification.addEventListener('click', onNotificationClick);

// // showNotification();

// function onNotificationClick() {
//     // console.log('click');
//     showNotification();

//    timeoutId = setTimeout(() => {
//         refs.notification.classList.remove('success');
//     }, NOTIFICATION_DELAY);

// }

// function showNotification() {
//     console.log('click');
// refs.notification.classList.add('success');
// clearTimeout(timeoutId);
// }

// timeoutId = setTimeout(() => {
//     console.log('добавили стиль')
//     showNotification();
// }, 2000);


// // ----------- всплывающее окно

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter =0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//         console.log("Останавливаем");
//         clearInterval(intervalId);
//         return;
//     }
// console.log('подпишись на рассылку' + Date.now());
// promptCounter +=1;
// }, PROMPT_DELAY);

//----------------------- modal 
import BSN from 'bootstrap.native';
const PROM_DELAY = 3000;
const MAX_PROMT_ATTEMPTS = 3;
let promtCounter = 0;
let hasSubscribed = false;

openModal();

const modal = new BSN.Modal(
    '#myModal', // target selector
    { // options object
      backdrop: 'static', // we don't want to dismiss Modal when Modal or backdrop is the click event target
      keyboard: false // we don't want to dismiss Modal on pressing [Esc] key
    }
  );


const myModal = document.getElementById('myModal')
const subBtn = document.querySelector('button[data-subscribe]')
// const myInput = document.getElementById('myInput')

myModal.addEventListener('hide.bs.modal',
    openModal);

subBtn.addEventListener('click', onSubBtnClick);

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

function openModal() {
    if (promtCounter === MAX_PROMT_ATTEMPTS || hasSubscribed) {
        console.log('Tschus')
        return;
    }
    console.log("закрыли модалку")
    setTimeout(() => {
        modal.show();
        promtCounter += 1;
        }, PROM_DELAY);
}


function onSubBtnClick () {
hasSubscribed = true;
modal.hide();
}