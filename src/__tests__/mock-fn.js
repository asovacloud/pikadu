const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const expected = thumbWar("Andrew", "Sofia");
  expect(expected).toBe("Andrew");
  expect(utils.getWinner.mock.calls).toEqual([
    ["Andrew", "Sofia"],
    ["Andrew", "Sofia"]
  ]);
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith("Andrew", "Sofia");
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    "Andrew",
    "Sofia"
  );
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    "Andrew",
    "Sofia"
  );

  // cleanup
  utils.getWinner = originalGetWinner
})
