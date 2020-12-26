/**
 * So far we’re still basically monkey-patching the utils
 * module which is fine, but could lead to problems in the
 * future, especially if we want to mock a ESModule export
 * which doesn’t allow this kind of monkey-patching on
 * exports. Instead, let’s mock the entire module so when
 * our test subject requires the file they get our mocked
 * version instead.
 *
 * Task: refactor the code to mock the entire module.
 *
 * Execute: Use `npx jest --watch src/__tests__/inline-module-mock.js` to watch the test
 */

const thumbWar = require('../thumb-war');
const utils = require('../utils');

jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  }
});

test("returns winner", () => {
  const winner = thumbWar("Andrew", "Sofia")
  expect(winner).toBe("Andrew")
  expect(utils.getWinner.mock.calls).toEqual([
    ["Andrew", "Sofia"],
    ["Andrew", "Sofia"],
  ])

  // cleanup
  utils.getWinner.mockReset();
})