const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
const listEl = [];
ingredients.forEach(ingredient => {
    const el = document.createElement('li');
  el.textContent = ingredient;
  listEl.push(el);
});

list.append(...listEl);