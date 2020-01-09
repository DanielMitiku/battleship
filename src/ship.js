const shipFactory = (name, length, orientation) => {
  const shipArray = Array(length).fill(0);
  let xLocation = null;
  let yLocation = null;

  const getLength = () => shipArray.length;
  const getName = () => name;
  const getShipArray = () => shipArray;
  const isVertical = () => {
    if (orientation === 1) {
      return true;
    }
    return false;
  };
  const hit = (pos) => {
    shipArray[pos] = 1;
  };

  const isHit = (pos) => {
    if (shipArray[pos] === 1) {
      return true;
    }
    return false;
  };

  const isSunk = () => {
    let status = true;
    shipArray.forEach((value) => {
      if (value === 0) {
        status = false;
      }
    });
    return status;
  };

  const setStartingLocation = (x, y) => {
    xLocation = x;
    yLocation = y;
  };

  const getStartingXLocation = () => xLocation;
  const getStartingYLocation = () => yLocation;

  return {
    getName,
    getShipArray,
    isVertical,
    hit,
    isHit,
    isSunk,
    getLength,
    setStartingLocation,
    getStartingXLocation,
    getStartingYLocation,
  };
};

export default shipFactory;
