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

test('ship should record missed attack', () => {
  testBoard.placeShip(1,1,testShip);
  testBoard.receiveAttack(2,6);
  expect(testBoard.getBoard()[2][6]).toEqual('missed');
});

test('ship should receive attack', () => {
  testBoard.placeShip(1,1,testShip);
  expect(testBoard.receiveAttack(1,1)).toBe(true);
});