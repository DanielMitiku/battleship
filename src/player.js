const player = (name, computer = 0) => {
  const allMoves = [];
  const madeMoves = [];
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
    let moveIdx = Math.floor(Math.random() * 100);
    while (madeMoves.includes(moveIdx)) {
      moveIdx = Math.floor(Math.random() * 100);
    }
    const move = allMoves[moveIdx];
    enemyBoard.receiveAttack(move[0], move[1]);
    madeMoves.push(moveIdx);
    return true;
  };

  return {
    getName, isComputer, attack, makeRandomMove,
  };
};

export default player;
