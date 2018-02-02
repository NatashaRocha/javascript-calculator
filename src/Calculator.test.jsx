const React = require('react')
const { shallow, mount, render, configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const Calculator = require('./Calculator')

configure({ adapter: new Adapter() })

describe('<Calculator />', () => {
  it('renders the title', () => {
    const wrapper = shallow(<Calculator />)
    expect(wrapper.find('.h1').length).toBe(1)
  })
})