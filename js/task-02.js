const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector('#ingredients')

const makeIngredientElements = elements => {
  return elements.map(item => {
  const newElementList = document.createElement('li');
  newElementList.textContent = item;
  newElementList.classList.add('item');
  return newElementList;
    
  })
}

const markup = makeIngredientElements(ingredients);
ingredientsListEl.append(...markup);
