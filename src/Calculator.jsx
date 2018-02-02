import './style.css'

const React = require('react')
// const CalculatorAPI = require('./calculatorAPI')

// const c = new CalculatorAPI()

const buttons = [
  'C', '(', ')', '÷',
  '7', '8', '9', 'x',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '%', '=',
]

export default class Calculator extends React.Component {
  constructor() {
    super()
    this.state = { result: 0, input: '' }
  }

  render() {
    return (
      <div className="calculatorWrapper">
        <div className="calculator">
          <h1 className="title">ELECTRONIC CALCULATOR</h1>
          <div className="resultsWrapper">
            <input type="text" value={this.state.result} />
            <input type="text" value={this.state.input} />
          </div>
          <div className="buttonsWrapper">
            { buttons.map(b => <button> {b} </button>) }
          </div>
        </div>
      </div>
    )
  }
}
