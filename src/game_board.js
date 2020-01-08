const gameBoard = () => {
  const boardSize = 10;
  const board = [];
  for (let i=0; i<boardSize; i += 1) {
    board.push(Array(boardSize).fill(null));
  }
  
  const ships = [];

  const getBoard = () => board;

  const placeShip = (x,y,ship) => {
    if (!checkOccupiedByShip(x,y,ship)) {
      ship.setStartingLocation(x,y);
      if (ship.isVertical()) {
        for (let i = 0; i < ship.getLength(); i += 1) {
          board[x+i][y] = ship.getName();
        }
      }
      else {
        for (let i = 0; i < ship.getLength(); i += 1) {
          board[x][y+i] = ship.getName();
        }
      }
      ships.push(ship);
      return true;
    }
    return false;
  };

  const placeShips = (ships) => {
    ships.forEach((ship) => {
      let x = Math.floor(Math.random() * boardSize);
      let y = Math.floor(Math.random() * boardSize);
      while (!placeShip(x, y, ship)) {
        x = Math.floor(Math.random() * boardSize);
        y = Math.floor(Math.random() * boardSize);
      }
    });
  }

  // const checkOccupied = (x,y) => {
  //   if (board[x][y] !== null) {
  //     return true;
  //   }
  //   return false;
  // };

  const checkOccupiedByShip = (x,y,ship) => {
    if(ship.isVertical()) {
      for (let i = 0; i < ship.getLength(); i += 1) {
        if (board[i+x][y] !== null) {
          return true;
        }
      }
    }
    else {
      for (let i = 0; i < ship.getLength(); i += 1) {
        if (board[x][i+y] !== null) {
          return true;
        }
      }
    }
    return false;
  };
  
  const getShip = (shipName) => {
    let s = ships.find((ship) => {
      if (ship.getName() === shipName) {
        return ship;
      }
      return false;
    });
    return s;
  };

  const receiveAttack = (x,y) => {
    if (board[x][y] !== null && board[x][y] !== "missed") {
      let shipName = board[x][y];
      if(getShip(shipName) !== false) {
        let shipHit = getShip(shipName);
        if (shipHit.isVertical() && !shipHit.isHit(x - shipHit.getStartingXLocation())) {
          shipHit.hit(x - shipHit.getStartingXLocation());
          return true;
        }
        else if (!shipHit.isVertical() && !shipHit.isHit(y - shipHit.getStartingYLocation())) {
          shipHit.hit(y - shipHit.getStartingYLocation());
          return true;
        }
      } 
    } else if (board[x][y] === "missed") {
      return false;
    } else {
      board[x][y] = "missed";
      return true;
    }    
  };

  const allShipsSunk = () => {
    let sank = true;
    ships.forEach((ship) => {
      if (!ship.isSunk()) {
        sank = false;
      }
    });
    return sank;
  };

  return { ships, getBoard, getShip, placeShip, placeShips, checkOccupiedByShip, receiveAttack, allShipsSunk }
};

export default gameBoard;