const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

inputEl.addEventListener("input", (event) => {
    const element = event.currentTarget;
    element.value === '' ? spanEl.textContent = 'Anonymous' : spanEl.textContent = element.value;
    
})