
const displayBoards = () => {
  const playerDiv = document.querySelector('.player-div');
  const computerDiv = document.querySelector('.computer-div');


  const generateBoard = () => {
    const genBox = () => {
      const box = document.createElement('div');
      box.classList.add('cell', 'text-center');
      return box;
    };
    const table = document.createElement('table');
    for (let i = 0; i < 10; i += 1) {
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j += 1) {
        const col = document.createElement('td');
        col.appendChild(genBox());
        col.dataset.xy = [i, j];
        row.appendChild(col);
      }
      table.appendChild(row);
    }
    return table;
  };

  playerDiv.appendChild(generateBoard());
  computerDiv.appendChild(generateBoard());
};

const renderPlayerBoard = (board, table) => {
  for (let i = 0; i < board.getBoard().length; i += 1) {
    for (let j = 0; j < board.getBoard().length; j += 1) {
      const col = table.querySelector(`[data-xy = "${i},${j}"]`);
      const cell = col.querySelector('div');
      const content = board.getBoard()[i][j];
      if (content === null) {
        cell.textContent = '';
      } else if (content === 'missed') {
        cell.innerHTML = '&#9874;';
      } else {
        const presentShip = board.getShip(content);
        if (presentShip.isVertical()) {
          if (presentShip.getShipArray()[i - presentShip.getStartingXLocation()] === 0) {
            cell.classList.add('bg-primary');
            cell.textContent = '';
          } else {
            cell.classList.add('bg-primary', 'text-black', 'font-weight-bold');
            cell.innerHTML = '&#10042;';
          }
        } else if (presentShip.getShipArray()[j - presentShip.getStartingYLocation()] === 0) {
          cell.classList.add('bg-primary');
          cell.textContent = '';
        } else {
          cell.classList.add('bg-primary', 'text-black', 'font-weight-bold');
          cell.innerHTML = '&#10042;';
        }
      }
    }
  }
};

const renderComputerBoard = (board, table) => {
  for (let i = 0; i < board.getBoard().length; i += 1) {
    for (let j = 0; j < board.getBoard().length; j += 1) {
      const col = table.querySelector(`[data-xy = "${i},${j}"]`);
      const cell = col.querySelector('div');
      const content = board.getBoard()[i][j];
      if (content === null) {
        cell.textContent = '';
      } else if (content === 'missed') {
        cell.innerHTML = '&#9874;';
      } else {
        const presentShip = board.getShip(content);
        if (presentShip.isVertical()) {
          if (presentShip.getShipArray()[i - presentShip.getStartingXLocation()] === 0) {
            cell.textContent = '';
          } else {
            cell.classList.add('bg-primary', 'text-black', 'font-weight-bold');
            cell.innerHTML = '&#10042;';
          }
        } else if (presentShip.getShipArray()[j - presentShip.getStartingYLocation()] === 0) {
          cell.textContent = '';
        } else {
          cell.classList.add('bg-primary', 'text-black', 'font-weight-bold');
          cell.innerHTML = '&#10042;';
        }
      }
    }
  }
};


export { displayBoards, renderPlayerBoard, renderComputerBoard };
