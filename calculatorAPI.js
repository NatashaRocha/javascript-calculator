class Calculator {
  constructor() {
    this.result = 0
  }

  reset() {
    this.result = 0
    return this
  }

  add(x) {
    this.result += x
    return this
  }

  subtract(x) {
    this.result -= x
    return this
  }

  multiply(x) {
    this.result *= x
    return this
  }

  divide(x) {
    this.result /= x
    return this
  }
}

module.exports = Calculator