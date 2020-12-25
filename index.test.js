const { sum, nativeNull, Lodash, Ajax, map } = require("./index");
const axios = require("axios");

jest.mock("axios");

describe("Sum function:", () => {
  test("test should return sum of two values", () => {
    const expected = 42;
    const result = sum(35, 7);

    expect(result).toBe(expected);
    expect(result).toEqual(expected);
  });

  test("Sum should return value correctly comparing to other", () => {
    const expected = 42;
    const result = sum(35, 7);

    expect(result).toBeGreaterThanOrEqual(expected);
    expect(result).toBeGreaterThan(41);
    expect(result).toBeLessThanOrEqual(expected);
    expect(result).toBeLessThan(45);
  });

  test("Sum should sum 2 float values correctly", () => {
    const expected = 0.3;
    const result = sum(0.1, 0.2);

    expect(result).toBeCloseTo(expected);
  });
});

describe("nativeNull function:", () => {
  const result = nativeNull();

  test("should return null", () => {
    expect(result).toBeNull();
    expect(result).toBe(null);
    expect(result).toBeDefined();
    expect(result).toBeFalsy();
    expect(result).not.toBeTruthy();
    expect(result).not.toBeUndefined();
  });
});

describe("Lodash: compact", () => {
  let array;
  let _;
  let expected;

  beforeEach(() => {
    _ = new Lodash();
    array = [false, 12, 0, undefined, "Sofia", null, '', true, 100, NaN];
    expected = _.compact(array);
  });

  test("should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("should working array be editable", () => {
    array.push(...["one", "two"]);

    expect(array).toContain("one");
    expect(array).toContain("two");
  });

  test("should remove falsy values from array", () => {
    const result = [ 12, "Sofia", true, 100 ];

    expect(expected).toEqual(result);
  });

  test("should NOT contain falsy values", () => {
    expect(expected).not.toContain(false);
    expect(expected).not.toContain("");
    expect(expected).not.toContain(0);
    expect(expected).not.toContain(null);
    expect(expected).not.toContain(NaN);
    expect(expected).not.toContain(undefined);
  });
});

describe("Lodash: groupBy", () => {
  let _ = new Lodash();

  beforeEach(() => {
    _ = new Lodash();
  });

  test("should be defined", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test("should group array items by Math.floor", () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {2: [2.2, 2.4], 4: [4.2], 3: [3.1] };

    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test("should group array items by length", () => {
    const array = ["one", "two", "three"];
    const result = {3: ["one", "two"], 5: ["three"]};

    expect(_.groupBy(array, "length")).toEqual(result);
  });

  test("should NOT to return array", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
    expect(_.groupBy([], Math.trunc)).toBeInstanceOf(Object);
    expect(_.groupBy([], Math.tranc)).not.toBeInstanceOf(Function);
  });
})

describe("Ajax: echo function", () => {

  test("should return value async",  async() => {
    const result = await Ajax.echo("some data");

    expect(result).toBe("some data");
  });

  test("should return value with promise", () => {
    return Ajax.echo("some data").then(data => {
      expect(data).toBe("some data");
    })
  });

  test("should catch error with promise", () => {
    return Ajax.echo().catch(e => {
      expect(e).toBeInstanceOf(Error);
    })
  });

  test("should return value with try/catch", async () => {
    try {
      const result = await Ajax.echo("some data");

      expect(result).toBe("some data");
    } catch (e) {
      throw new Error(e)
    }
  });

  test("should catch an error with try/catch",  async() => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e.message).toBe("error");
    }
  })
});

describe("Ajax: GET", () => {
  let response;
  let todos;

  beforeEach(() => {
    todos = [ {id: 1, title: "Todo 1", completed: false} ];

    response = {
      data: {
        todos
      }
    }
  })
  test("should return data from back end", () => {
    axios.get.mockReturnValue(response);

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos);
    })
  });
})

describe("map: function", () => {
  let array;
  let fn;

  beforeEach(() => {
    array = [1, 2, 3, 5, 8];
    fn = jest.fn(x => x ** 2);
    map(array, fn);
  });

  test("should call callback", () => {
    expect(fn).toBeCalled();
  });

  test("should call callback 5 times", () => {
    expect(fn).toBeCalledTimes(5);
    expect(fn.mock.calls.length).toBe(5);
  })

  test("should pow 2 each element", () => {
    expect(fn.mock.results[0].value).toBe(1);
    expect(fn.mock.results[1].value).toBe(4);
    expect(fn.mock.results[2].value).toBe(9);
    expect(fn.mock.results[3].value).toBe(25);
    expect(fn.mock.results[4].value).toBe(64);
  })

  test("should fn work", () => {
    fn
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue("42");

    expect(fn()).toBe(100);
    expect(fn()).toEqual(200);
    expect(fn()).toEqual("42");
    expect(fn()).toEqual("42");
  })
})
