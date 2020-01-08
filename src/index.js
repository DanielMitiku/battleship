import gameBoard from "./game_board";
import { displayBoards, renderPlayerBoard, renderComputerBoard } from "./display";
import player from "./player";
import "./style.css";
import shipFactory from "./ship";



const gamePlay = () => {
  displayBoards();
  const computerTable = document.querySelector('.computer-div table');
  const playerTable = document.querySelector('.player-div table');
  const computerBoard = gameBoard();
  const playerBoard = gameBoard();

  const player1 = player("Player1");
  const computer = player("Computer", 1);

  const player1Ships = [
    shipFactory("p1", 3, 0),
    shipFactory("p2", 2, 0),
    shipFactory("p3", 1, 0),
    shipFactory("p4", 3, 0),
    shipFactory("p5", 2, 0),
    shipFactory("p6", 2, 0),
    shipFactory("p7", 3, 0),
    shipFactory("p8", 2, 0),
    shipFactory("p9", 2, 0)
  ]

  const computerShips = [
    shipFactory("c1", 3, 0),
    shipFactory("c2", 2, 0),
    shipFactory("c3", 1, 0),
    shipFactory("c4", 3, 0),
    shipFactory("c5", 2, 0),
    shipFactory("c6", 2, 0),
    shipFactory("c7", 3, 0),
    shipFactory("c8", 2, 0),
    shipFactory("c9", 2, 0)
  ]

  playerBoard.placeShips(player1Ships);
  computerBoard.placeShips(computerShips);


  renderPlayerBoard(playerBoard, playerTable);
  renderComputerBoard(computerBoard, computerTable);
  
  const gameRound = () => {
    const location = event.target.parentElement.dataset.xy;
      player1.attack(computerBoard, location[0], location[2]);
      renderComputerBoard(computerBoard, computerTable);
      console.log(computerBoard.getBoard());
      if (computerBoard.allShipsSunk()) {
        console.log("You win")
        computerTable.addEventListener("click", (event) => {
          event.stopPropagation();
        }, true);
        return;
      } 

      computer.makeRandomMove(playerBoard);
      renderPlayerBoard(playerBoard, playerTable);
      if (playerBoard.allShipsSunk()) {
        console.log("Computer wins");
        computerTable.addEventListener("click", (event) => {
          event.stopPropagation();
        }, true);
        return;
      }
  }
  computerTable.addEventListener("click", (event) => gameRound())
}

gamePlay();



