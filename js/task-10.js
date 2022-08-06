function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const mainBlock = document.querySelector('#boxes');
const inputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDeleteEl = document.querySelector('[data-destroy]');

let step = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1){
    const newElementList = document.createElement('div');
    newElementList.style.backgroundColor = getRandomHexColor();
    newElementList.style.width = `${step}px`;
    newElementList.style.height =`${step}px`;
    
    mainBlock.append(newElementList);
    step += 10;
  }
};
btnCreateEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});
function destroyBoxes() {
  inputEl.value = 0;
  step = 30;
  mainBlock.innerHTML='';
}
btnDeleteEl.addEventListener('click', () => {
  destroyBoxes();
});