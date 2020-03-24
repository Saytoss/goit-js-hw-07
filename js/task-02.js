// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientsListCreate = ingredients.map(ingredient => {
    const ingredientsListItem = document.createElement('li');
    ingredientsListItem.textContent = ingredient;
    return ingredientsListItem;
});

ingredientsList.append(...ingredientsListCreate);
