const multiply = require("../src/kata_8y/Kata8y_1.bs.js").multiply;
const assert = require("chai").assert;

describe("Multiply", () => {
  it("fixed tests", () => {
    assert.strictEqual(multiply(1, 1), 1);
    assert.strictEqual(multiply(2, 1), 2);
    assert.strictEqual(multiply(2, 2), 4);
    assert.strictEqual(multiply(3, 5), 15);
  });
});
