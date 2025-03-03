const container = document.querySelector('#container');

function createGrid(size) {
  container.innerHTML = '';
  let userInput = prompt(
    'Please enter the number of squares you want for you canvas (limit 1,000).  The more squares, the higher the detail you can achieve in your sketch.'
  );

  userInput = Number(userInput);

  if (userInput === null) {
    alert(`⚠️ Canvase creation has been canceled by the user.`);
    return;
  } else if (userInput > 1000 || userInput < 1) {
    alert(`🚫 Invalid input. Please enter a whole number between 1 and 1,000.`);
    createGrid();
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
