function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonElChangeColor = document.querySelector('.change-color');
const spanElValue = document.querySelector('.color');
const bodyEl=document.querySelector('body')

buttonElChangeColor.addEventListener('click', () => {
  spanElValue.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = spanElValue.textContent;
  })