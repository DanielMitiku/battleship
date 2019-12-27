const gameBoard = () => {
  const boardSize = 10;
  const board = Array(boardSize).fill(0);
  board.forEach((b) => {
    b.push(Array(boardSize).fill(0));
  });
  const ships = [];

  const getBoard = () => board;

  const placeShip = (x,y,ship) => {
    if (!checkOccupied(x,y,ship.length)) {
      ship.setStartingLocation(x,y);
      if (ship.isVertical()) {
        for (let i = 0; i < ship.length; i += 1) {
          board[x][y+i] = ship.getName();
        }
      }
      else {
        for (let i = 0; i < ship.length; i += 1) {
          board[x+i][y] = ship.getName();
        }
      }
      ships.push(ship);
      return true;
    }
    else return false;
  };

  const checkOccupied = (x,y,length = 1) => {
    if(ship.isVertical()) {
      for (let i = 0; i < length; i += 1) {
        if (board[x][y] !== 0) {
          return true;
        }
      }
    }
    else {
      for (let i = 0; i < length; i += 1) {
        if (board[x][y] !== 0) {
          return true;
        }
      }
    }
    return false;
  };
  
  const getShip = (shipName) => {
    ships.find((ship) => {
      if (ship.getName() === shipName) {
        return ship;
      }
      return false;
    });
  };

  const receiveAttack = (x,y) => {
    if (checkOccupied(x,y) === true) {
      shipHit = getShip(board[x][y]);
      if (shipHit.isVertical()) {
        shipHit.hit(y - shipHit.getStartingYLocation());
      }
      else {
        shipHit.hit(x - shipHit.getStartingXLocation());
      }
      return true;
    }
    else return false;    
  };

  const shipSunk = (ship) => {
    let sank = true;
    ship.getShipArray().find((element) => {
      if (element === 0) {
        sank = false;
      }
    });
    return sank;
  };

  return {ships, getBoard, placeShip, checkOccupied, receiveAttack, shipSunk}
};

export default gameBoard;