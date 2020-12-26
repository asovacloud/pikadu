/**
 * Task: refactor the code to use an external mock module.
 *
 * Execute: Use `npx jest --watch src/no-framework/external-mock-module.js` to watch the test
 */

require("../__no-framework-mocks__/utils");
const utilsPath = require.resolve('../utils');
const mockUtilsPath = require.resolve("../__no-framework-mocks__/utils");

require.cache[utilsPath] = require.cache[mockUtilsPath];

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar("Andrew", "Sofia")
assert.strictEqual(winner, "Andrew")
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Andrew", "Sofia"],
  ["Andrew", "Sofia"],
])

// cleanup
delete require.cache[utilsPath]

/**
 * Checkout master branch to see the answer.
 */