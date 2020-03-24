// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');

const handleIncrement = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

const handleDecrement = () => {
    if (counterValue === 0) {
        return;
    }
    counterValue -= 1;
    value.textContent = counterValue;
};

incrementButton.addEventListener('click', handleIncrement);
decrementButton.addEventListener('click', handleDecrement);
