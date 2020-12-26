const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originalGetWinner = utils.getWinner;
utils.getWinner= (p1, p2) => p1;

const winner = thumbWar("Andrew", "Sofia");
assert.strictEqual(winner, "Andrew");

// cleanup
utils.getWinner = originalGetWinner;
