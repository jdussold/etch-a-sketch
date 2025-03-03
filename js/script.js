const container = document.querySelector('#container');

function createGrid(size) {
  container.innerHTML = '';

  let userInput = prompt(
    'Please enter the number of squares per side for your canvas (1-100). A higher number increases drawing detail.'
  );

  if (userInput === null) {
    alert('⚠️ Canvas creation has been canceled.');
    return;
  }

  userInput = Number(userInput);

  if (
    isNaN(userInput) ||
    !Number.isInteger(userInput) ||
    userInput < 1 ||
    userInput > 100
  ) {
    alert('🚫 Invalid input. Please enter a whole number between 1 and 100.');
    return;
  }

  size = userInput;

  const squareSize = 600 / size;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseenter', function () {
      this.style.backgroundColor = '#00c7cb';
    });

    container.appendChild(square);
  }
}

let newCanvasBtn = document.querySelector('#new-canvas-btn');
newCanvasBtn.addEventListener('click', createGrid);

let eraseBtn = document.querySelector('#erase-btn');
eraseBtn.addEventListener('click', () => {
  container.innerHTML = '';
});
