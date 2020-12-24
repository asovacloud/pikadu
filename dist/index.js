const sum = (a, b) => a - b;

const substract = (a, b) => a - b;

test("sum test", () => {
  const result = sum(42, 8);
  const expected = 50;
  expect(result).toBe(expected);
});
test("subtract test", () => {
  const result = substract(42, 7);
  const expected = 35;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(`YES: ${title}`);
  } catch (error) {
    console.error(`NO: ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }

  };
}