const counterEl = document.querySelector('#counter');
const decrementBtnEl = counterEl.querySelector('button[data-action="decrement"]');
const incrementBtnEl = counterEl.querySelector('button[data-action="increment"]');
const counterValueEl = counterEl.querySelector('#value');

let counterValue = 0;
const handleDecrementClick = ()=> {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}
const handleIncrementClick = ()=> {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}
decrementBtnEl.addEventListener("click", handleDecrementClick);
incrementBtnEl.addEventListener("click", handleIncrementClick);
