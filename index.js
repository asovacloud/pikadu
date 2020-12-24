const axios = require("axios");

exports.sum = (a, b) => {
  return a + b;
};

exports.nativeNull = () => null;

class Lodash {
  compact(array) {
    return array.filter(item => !!item)
  }

  groupBy(array, prop) {
    return array.reduce((acc, i) => {
      const key = typeof prop === "function" ? prop(i) : i[prop];

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(i);
      return acc;
    }, {})
  }
}

exports.Lodash = Lodash;

class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error("error"))
        }
      }, 150)
    })
  }

  static async get() {
    try {
      const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
      return result.data;
    } catch (e) {
      console.error(e);
    }
  }
}

exports.Ajax = Ajax;

function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

exports.map = map;