let moreZero = 'my-counter__button-reset_active';
let myButtonPlus = document.querySelector('.my-js-button-plus');
let myJsNumber = document.querySelector('.my-js-number');
let myButtonReset = document.querySelector('.my-js-button-reset');
let myCounter = 0;

myButtonPlus.addEventListener('click', function () {
  console.log('клик +1');
  myCounter = myCounter + 1;
  myJsNumber.innerText = myCounter;
});

myButtonReset.addEventListener('click', function () {
  console.log('клик сбросить');
  myCounter = 0;
  myJsNumber.innerText = myCounter;
});
