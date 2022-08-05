const counterEl = document.querySelector('#counter');
const decrementBtnEl = counterEl.querySelector('button[data-action="decrement"]');
const incrementBtnEl = counterEl.querySelector('button[data-action="increment"]');
const counterValueEl = counterEl.querySelector('#value');

const handleDecrementClick = ()=> {
        counterValueEl.textContent -= 1;
}
const handleIncrementClick = ()=> {
        counterValueEl.textContent = Number(counterValueEl.textContent) + 1;
}

decrementBtnEl.addEventListener("click", handleDecrementClick);
incrementBtnEl.addEventListener("click", handleIncrementClick);


