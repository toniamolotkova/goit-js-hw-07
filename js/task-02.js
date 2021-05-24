const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
const listEl = ingredients.forEach(ingredient => {
    const el = document.createElement('li');
    list.appendChild(el);
    el.textContent = ingredient;
});

