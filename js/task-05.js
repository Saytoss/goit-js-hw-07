// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const nameInput = document.querySelector('#name-input');
const nameValue = document.querySelector('#name-output');

const updateValue = e => {
    nameValue.textContent = `${e.target.value}`;
};

nameInput.addEventListener('input', updateValue);
