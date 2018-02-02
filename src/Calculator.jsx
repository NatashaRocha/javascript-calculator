const React = require('react')
const calculator = require('./calculatorAPI')

const c = new calculator()

class Calculator extends React.Component {
  render() {
    return (
      <h1>ELECTRONIC CALCULATOR</h1>
    )
  }
}

module.exports = Calculator