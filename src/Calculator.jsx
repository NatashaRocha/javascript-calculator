import './style.css'

const React = require('react')
const CalculatorAPI = require('./calculatorAPI')

const calculator = new CalculatorAPI()

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

  handleClick(e) {
    const button = e.target.innerHTML
    this.setState({ result: button })
  }

  render() {
    return (
      <div className="calculatorWrapper">
        <div className="calculator">
          <h1 className="title">ELECTRONIC CALCULATOR</h1>
          <div className="resultsWrapper">
            <input type="text" value={this.state.result} />
            <input type="text" name={this.state.input} />
          </div>
          <div className="buttonsWrapper">
            { buttons.map(b => <button key={b} onClick={this.handleClick}> {b} </button>) }
          </div>
        </div>
      </div>
    )
  }
}
