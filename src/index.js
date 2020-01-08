import gameBoard from './game_board';
import { displayBoards, renderPlayerBoard, renderComputerBoard } from './display';
import player from './player';
import './style.css';
import shipFactory from './ship';


const gamePlay = () => {
  displayBoards();
  const computerTable = document.querySelector('.computer-div table');
  const playerTable = document.querySelector('.player-div table');
  const computerBoard = gameBoard();
  const playerBoard = gameBoard();

  const player1 = player('Player1');
  const computer = player('Computer', 1);

  const resetBtn = document.querySelector('.reset-btn');
  const winBoard = document.querySelector('.winner');

  const player1Ships = [
    shipFactory('Carrier', 5, 0),
    shipFactory('Battleship', 4, 1),
    shipFactory('Destroyer', 3, 0),
    shipFactory('Submarine', 3, 1),
    shipFactory('Patrol', 2, 0),
  ];

  const computerShips = [
    shipFactory('Carrier', 5, 0),
    shipFactory('Battleship', 4, 1),
    shipFactory('Destroyer', 3, 0),
    shipFactory('Submarine', 3, 1),
    shipFactory('Patrol', 2, 0),
  ];

  playerBoard.placeShips(player1Ships);
  computerBoard.placeShips(computerShips);

  renderPlayerBoard(playerBoard, playerTable);
  renderComputerBoard(computerBoard, computerTable);

  const gameRound = () => {
    const location = event.target.parentElement.dataset.xy;
    if (player1.attack(computerBoard, location[0], location[2]) === true) {
      renderComputerBoard(computerBoard, computerTable);
      if (computerBoard.allShipsSunk()) {
        winBoard.textContent = 'You win';
        computerTable.addEventListener('click', (event) => {
          event.stopPropagation();
        }, true);
        return;
      }

      computer.makeRandomMove(playerBoard);
      renderPlayerBoard(playerBoard, playerTable);
      if (playerBoard.allShipsSunk()) {
        winBoard.textContent = 'Computer wins';
        computerTable.addEventListener('click', (event) => {
          event.stopPropagation();
        }, true);
      }
    }
  };
  computerTable.addEventListener('click', (event) => gameRound(event));
  resetBtn.addEventListener('click', () => {
    window.location.reload();
  });
};

gamePlay();
