const player = (name, computer=0) => {
  const nextMove = [-1,-1];

  const getName = () => name;

  const isComputer = () => {
    if (computer === 0) {
      return false;
    }
    return true;
  };

  const attack = (enemyBoard, x, y) => {
    return enemyBoard.receiveAttack(x,y);
  };
  
  const makeRandomMove = (enemyBoard) => {
    let xMove, yMove; 
    let nextXMove = nextMove[0];
    let nextYMove = nextMove[1];
    if (nextXMove !== -1 && nextYMove !== -1 && nextXMove < 10 && nextYMove < 10 && enemyBoard.getBoard()[nextXMove][nextYMove] !== 'missed') {
      xMove = nextXMove;
      yMove = nextYMove;
    }
    else {
      do {
        xMove = Math.floor(Math.random() * 10);
        yMove = Math.floor(Math.random() * 10);
      }
      while (enemyBoard.getBoard()[xMove][yMove] === 'missed');
    }
    
    let move = enemyBoard.receiveAttack(xMove,yMove);
    if (move === true) {
      let randomBetweenXY = Math.round(Math.random());
      if (randomBetweenXY === 0) {
        nextMove[0] = xMove;
        nextMove[1] = yMove + 1;
      }
      else {
        nextMove[0] = xMove + 1;
        nextMove[1] = yMove;
      }
      return true;
    } else {
      nextMove[0] = -1;
      nextMove[1] = -1;
      return true;
    }
  };

  return { getName, isComputer, attack, makeRandomMove }

};

export default player;