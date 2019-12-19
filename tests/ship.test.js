import shipFactory from '../src/ship';

let testShip
beforeEach(() => {
  testShip = shipFactory(5);
});

test("getLength returns length of ship", () => {
  expect(testShip.getLength()).toBe(5);
});

test("getShipArray returns array of zeros for new ship", () => {
  expect(testShip.getShipArray()).toEqual([0, 0, 0, 0, 0]);
});

test ("hit(x) toggles shipArray[x] to 1", () => {
  testShip.hit(2);
  expect(testShip.getShipArray()).toEqual([0, 0, 1, 0, 0]);
})

describe("isSunk returns sink status", () => {

  test ("returns false when unsunk", () => {
    expect(testShip.isSunk()).toBe(false);
  });

  test ("returns true when sunk", () => {
    for(let i=0; i<testShip.getLength(); i++){
      testShip.hit(i);
    }
    expect(testShip.isSunk()).toBe(true);
  });
});