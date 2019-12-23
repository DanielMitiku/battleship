const gameBoard = (ship) => {
  const boardSize = 10;
  const board = [];
  board.forEach((b) => {
    b.push(Array(boardSize).fill(0));
  });

  const getBoard = () => board;

  const placeShip = () => {

  };
  
  const receiveAttack = (x,y) => {
    
  };

  const shipSunk = () => {
    
  };

  return {getBoard, placeShip, receiveAttack, shipSunk}
};