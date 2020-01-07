import gameBoard from "./game_board";
import { displayBoards, renderPlayerBoard, renderComputerBoard } from "./display";
import player from "./player";
import "./style.css";
import shipFactory from "./ship";

displayBoards();

const computerBoard = gameBoard();
const computerTable = document.querySelector('.computer-div table');
const playerBoard = gameBoard();
const playerTable = document.querySelector('.player-div table');

const player1 = player("Player1");
const computer = player("Computer", 1);

const player1Ships = [
  shipFactory("two", 3, 0)
]

player1Ships.forEach((ship) => {
  console.log(playerBoard.checkOccupiedByShip(0, 0, ship));
  playerBoard.placeShip(0, 0, ship);
})

const computerShips = [
  shipFactory("three", 3, 1)
]

computerShips.forEach((ship) => {
  console.log(computerBoard.checkOccupiedByShip(0, 0, ship));
  computerBoard.placeShip(0, 0, ship);
})

renderPlayerBoard(playerBoard, playerTable);
renderComputerBoard(computerBoard, computerTable);
computerTable.addEventListener("click", (event) => {
  const location = event.target.parentElement.dataset.xy;

    player1.attack(computerBoard, location[0], location[2]);
    renderComputerBoard(computerBoard, computerTable);
    console.log(computerBoard.getBoard());
    if (computerBoard.allShipsSunk()) {
      console.log("You win")
      return false;
    } 

    computer.makeRandomMove(playerBoard);
    renderPlayerBoard(playerBoard, playerTable);
    if (playerBoard.allShipsSunk()) {
      console.log("Computer wins")
      // computerTable.removeEventListener("click", gameRound(event));
      // return;
    }
});
const gameRound = (event) => {
    const location = event.target.parentElement.dataset.xy;

    player1.attack(computerBoard, location[0], location[2]);
    renderComputerBoard(computerBoard, computerTable);
    console.log(computerBoard.getBoard());
    if (computerBoard.allShipsSunk()) {
      console.log("You win")
      return false;
    } 

    computer.makeRandomMove(playerBoard);
    renderPlayerBoard(playerBoard, playerTable);
    if (playerBoard.allShipsSunk()) {
      console.log("Computer wins")
      // computerTable.removeEventListener("click", gameRound(event));
      // return;
    }
}
