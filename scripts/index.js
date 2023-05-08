const counterEl = document.querySelector('[data-find="counterValue"]');
const buttonPlus = document.getElementById('button-plus');
const buttonMinus = document.getElementById('button-minus');
const buttonReset = document.getElementById('button-reset');
const COUNTER_INITIAL_VALUE = 0;
let counter = COUNTER_INITIAL_VALUE;
counterEl.innerText = counter;

buttonPlus.addEventListener('click', function () {
  console.log('клик +1');
  counter = counter + parseInt(buttonPlus.dataset.plus);
  counterEl.innerText = counter;
});

buttonMinus.addEventListener('click', function () {
  if (counter > 0) {
    console.log('клик -1');
    counter = counter - parseInt(buttonMinus.dataset.minus);
    counterEl.innerText = counter;
  } else {
    console.log('счетчик дошел до нуля');
  }
});

buttonReset.addEventListener('click', function () {
  console.log('клик сбросить');
  counter = COUNTER_INITIAL_VALUE;
  counterEl.innerText = counter;
});
