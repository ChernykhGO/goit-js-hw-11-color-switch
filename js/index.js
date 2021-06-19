const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

// Функция генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

const PROMT_DELAY = 1000;
let colorSwitch = false;

startBtnRef.addEventListener('click', changeBackground);
stopBtnRef.addEventListener('click', stopBackground);

function changeBackground() {
  colorSwitch = true;

  // setAttribute() используется, чтобы установить 
  // атрибут disabled кнопки <button>, делая её отключённой 
  if (colorSwitch = true) {
  startBtnRef.setAttribute('disabled', 'true');
  }
  timerId = setInterval(() => {
    randomColor = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.background = colors[randomColor];
    }, PROMT_DELAY);
};

function stopBackground () {
  clearInterval(timerId);
  // removeAttribute() используется для удаления из элемента 
  //  атрибута disabled кнопки <button>
  startBtnRef.removeAttribute('disabled', 'true');
}
