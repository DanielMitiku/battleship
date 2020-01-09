import shipFactory from '../src/ship';
import gameBoard from '../src/game_board';
import player from '../src/player';

let testShip, testBoard, testPlayerHuman, testPlayerComputer

beforeEach(() => {
  testShip = shipFactory('test1', 5, 1);
  testBoard = gameBoard();
  testBoard.placeShip(0,0,testShip);
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

test("attack attacks on enemy's board", () => {
  expect(testPlayerHuman.attack(testBoard,0,0)).toBe(true);
});

test("cannot attack same location twice", () => {
  testPlayerHuman.attack(testBoard,0,0);
  expect(testPlayerHuman.attack(testBoard,0,0)).toBe(false);
});

test("computer player makes random move", () => {
  expect(testPlayerComputer.makeRandomMove(testBoard)).toBe(true);
});