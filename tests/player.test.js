import shipFactory from '../src/ship';
import gameBoard from '../src/game_board';
import player from '../src/player';

let testShip, testBoard, testPlayerHuman, testPlayerComputer

beforeEach(() => {
  testShip = shipFactory('test', 5, 1);
  testBoard = gameBoard();
  testPlayerHuman = player('testPlayerHuman');
  testPlayerComputer = player('testPlayerComputer', 1);
});

test("getName returns name of player", () => {
  expect(testPlayerHuman.getName()).toBe('testPlayerHuman');
});

test("isCompupter returns true if player is computer", () => {
  expect(testPlayerHuman.isComputer()).toBe(false);
});

test("isCompupter returns true if player is computer", () => {
  expect(testPlayerComputer.isComputer()).toBe(true);
});