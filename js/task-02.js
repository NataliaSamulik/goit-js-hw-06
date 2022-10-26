const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListEl = document.querySelector('#ingredients');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredients[i];
  console.log(itemEl);
  elements.push(itemEl);
}

ingredientsListEl.append(...elements);
