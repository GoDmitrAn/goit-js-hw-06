const inputElement = document.querySelector('#validation-input');
let checkInputLenght=0;

inputElement.addEventListener('blur', (event) => {
    const targetEl = event.currentTarget;
    if (targetEl.value.length === Number(targetEl.getAttribute("data-length"))) {
        targetEl.classList.remove('invalid');
        targetEl.classList.add('valid');
    } else {
        targetEl.classList.remove('valid');
        targetEl.classList.add('invalid');
    }
    
    
})