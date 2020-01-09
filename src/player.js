const player = (name, computer = 0) => {
  const allMoves = [];
  const madeMovesIdx = [];
  let nextMoveIdx = Math.floor(Math.random() * 100);
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      allMoves.push([i, j]);
    }
  }

  const getName = () => name;

  const isComputer = () => {
    if (computer === 0) {
      return false;
    }
    return true;
  };

  const attack = (enemyBoard, x, y) => enemyBoard.receiveAttack(x, y);

  const makeRandomMove = (enemyBoard) => {
    let moveIdx = nextMoveIdx;
    while (madeMovesIdx.includes(moveIdx) || moveIdx > 99) {
      moveIdx = Math.floor(Math.random() * 100);
    }
    const move = allMoves[moveIdx];
    enemyBoard.receiveAttack(move[0], move[1]);
    madeMovesIdx.push(moveIdx);

    const randomNum = Math.random() * 10;
    if (randomNum < 3) {
      nextMoveIdx = moveIdx + 1;
    } else if (randomNum < 5) {
      nextMoveIdx = moveIdx + 10;
    } else if (randomNum < 9) {
      nextMoveIdx = Math.abs(moveIdx - 10)
    } else {
      nextMoveIdx = Math.abs(moveIdx - 1);
    }
    return true;
  };

  return {
    getName, isComputer, attack, makeRandomMove,
  };
};

export default player;
