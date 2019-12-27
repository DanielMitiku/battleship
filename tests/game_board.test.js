import shipFactory from '../src/ship';
import gameBoard from '../src/game_board';

let testShip, testBoard

beforeEach(() => {
  testShip = shipFactory('test', 5, 1);
  testBoard = gameBoard();
});

test("getLength returns length of board", () => {
  expect(testBoard.getBoard().length).toBe(10);
});

test('places given ship on the board', () => {
  testBoard.placeShip(0,0,testShip);
  expect(testBoard.getBoard()[0][0]).toEqual(testShip.getName());
});

test('board should be occupied', () => {
  testBoard.placeShip(0,0,testShip);
  expect(testBoard.checkOccupied(0,0)).toBe(true);
});

test('board should not be occupied', () => {
  testBoard.placeShip(1,1,testShip);
  expect(testBoard.checkOccupied(2,6)).toBe(false);
});

test('ship should not receive attack', () => {
  testBoard.placeShip(1,1,testShip);
  expect(testBoard.receiveAttack(2,6)).toBe(false);
});

test('ship should receive attack', () => {
  testBoard.placeShip(1,1,testShip);
  expect(testBoard.receiveAttack(1,1)).toBe(true);
});