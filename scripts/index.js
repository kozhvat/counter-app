let buttonPlus = document.querySelector('.js-button-plus');
let jsNumber = document.querySelector('.js-number');
let buttonReset = document.querySelector('.js-button-reset');
let counter = 0;

buttonPlus.addEventListener('click', function () {
  console.log('клик +1');
  counter = counter + 1;
  jsNumber.innerText = counter;
});

buttonReset.addEventListener('click', function () {
  console.log('клик сбросить');
  counter = 0;
  jsNumber.innerText = counter;
});
