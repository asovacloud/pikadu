/**
 * Task: refactor the code to mock the entire module.
 *
 * Execute: Use `npx jest --watch src/no-framework/inline-module-mock.js` to watch the test
 */

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = {calls: []}
  mockFn.mockImplementation = newImpl => (impl = newImpl)
  return mockFn
}

const utilsPath = require.resolve("../utils");
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1)
  }
}

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
 * Hints:
 * - https://nodejs.org/api/modules.html#modules_caching
 *
 * Checkout master branch to see the answer.
 */