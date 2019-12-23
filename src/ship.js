const shipFactory = (length) => {
  const shipArray = Array(length).fill(0);

  const getLength = () => shipArray.length;
  const getShipArray = () => shipArray;
  const hit = (pos) => {
    shipArray[pos] = 1;
  }
  const isSunk = () => {
    let status = true;
    shipArray.forEach(value => {
      if (value === 0) {
        status = false;
      }
    });
    return status;
  }

  return { getShipArray, hit, isSunk, getLength }
}

export default shipFactory;