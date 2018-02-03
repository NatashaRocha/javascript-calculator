const Calculator = require('./calculatorAPI')

const calculator = new Calculator()

describe('calculator API', () => {
  beforeEach(() => {
    calculator.reset()
  })

  it('can chain mathematical operations properly', () => {
    calculator.add(2).subtract(3).multiply(4).divide(2)
    expect(calculator.result).toBe(-2)
  })

  it('can divide two numbers', () => {
    calculator.result = 100
    calculator.divide(20)
    expect(calculator.result).toBe(5)
  })

  it('can multiply two numbers', () => {
    calculator.result = 10
    calculator.multiply(5)
    expect(calculator.result).toBe(50)
  })

  it('can subtract two numbers', () => {
    calculator.subtract(2)
    expect(calculator.result).toBe(-2)
  })

  it('can add two numbers', () => {
    calculator.add(2)
    expect(calculator.result).toBe(2)
  })

  it('can clear result when reset is called', () => {
    calculator.result = 10
    calculator.reset()
    expect(calculator.result).toBe(0)
  })
})
