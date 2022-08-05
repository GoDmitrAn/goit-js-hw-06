const inputElement = document.querySelector('#font-size-control');
const spanElement = document.querySelector('#text');
inputElement.value = 16;
inputElement.addEventListener('input', (event) => {
    const targetEl = event.currentTarget;
    spanElement.style.fontSize = `${targetEl.value}px`
    
    
})