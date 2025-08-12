import {render , screen} from '@testing-library/react'
import Greet from './Greet'
test('Greet renders correctly' , ()=> {
  render(<Greet/>)
const textElement =  screen.getByText(/hello/i);
expect(textElement).toBeInTheDocument()
})


test('render greet with name', ()=> {
  render(<Greet name='gourav'/>)
  const textElement = screen.getByText(/hello gourav/i)
  expect(textElement).toBeInTheDocument()

})