
const displayBoards = () => {
  const playerDiv = document.querySelector('.player-div');
  const computerDiv = document.querySelector('.computer-div');


  const generateBoard = () => {
    const genBox = () => {
      const box = document.createElement('div');
      box.classList.add('cell', 'text-center');
      return box; 
    }
    const table = document.createElement('table');
    for (let i = 0; i < 10; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 10; j++) {
        const col = document.createElement('td');
        col.appendChild(genBox());
        col.dataset.xy = [i, j];
        row.appendChild(col);
      }
      table.appendChild(row);
    }
    return table;
  }

  playerDiv.appendChild(generateBoard());
  computerDiv.appendChild(generateBoard());
}

const renderPlayerBoard = (board, table) => {
  for(let i=0; i<board.getBoard().length; i++ ) {
    for(let j=0; j<board.getBoard().length; j++) {
      const col = table.querySelector(`[data-xy = "${i},${j}"]`);
      const cell = col.querySelector('div');
      const content = board.getBoard()[i][j];
      if (content === null) {
        cell.textContent = "";
      } else if (content === "missed") {
        cell.textContent = "X";
      } else {
        const presentShip = board.getShip(content);
        if (presentShip.isVertical()) {
          if (presentShip.getShipArray()[i - presentShip.getStartingXLocation()] === 0){
            cell.classList.add("bg-primary");
            cell.textContent = "";
          } else {
            cell.classList.add("bg-primary", "text-warning", "font-weight-bold");
            cell.textContent = ".";
          }
        } else {
          if (presentShip.getShipArray()[j - presentShip.getStartingYLocation()] === 0) {
            cell.classList.add("bg-primary");
            cell.textContent = "";
          } else {
            cell.classList.add("bg-primary", "text-warning", "font-weight-bold");
            cell.textContent = ".";
          } 
        }
          
      }
    }
  }
}

const renderComputerBoard = (board, table) => {
  for(let i=0; i<board.getBoard().length; i++ ) {
    for(let j=0; j<board.getBoard().length; j++) {
      const col = table.querySelector(`[data-xy = "${i},${j}"]`);
      const cell = col.querySelector('div');
      const content = board.getBoard()[i][j];
      if (content === null) {
        cell.textContent = "";
      } else if (content === "missed") {
        cell.textContent = "X";
      } else {
        const presentShip = board.getShip(content);
        if (presentShip.isVertical()) {
          if (presentShip.getShipArray()[i - presentShip.getStartingXLocation()] === 0){
            cell.classList.add("bg-primary")
            cell.textContent = "";
          } else {
            cell.classList.add("bg-primary", "text-warning", "font-weight-bold");
            cell.textContent = ".";
          }
        } else {
          if (presentShip.getShipArray()[j - presentShip.getStartingYLocation()] === 0) {
            cell.classList.add("bg-primary");
            cell.textContent = "";
          } else {
            cell.classList.add("bg-primary", "text-warning", "font-weight-bold");
            cell.textContent = ".";
          } 
        } 
      }
    }
  }
}


export { displayBoards, renderPlayerBoard, renderComputerBoard };