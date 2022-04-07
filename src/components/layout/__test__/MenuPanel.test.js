import { render, screen } from '@testing-library/react'; //Imports the testing library 
import MenuPanel from '../MenuPanel'; //Imports the component to be tested
import '@testing-library/jest-dom/extend-expect'

test("check the header renders", () => {
  render(<MenuPanel />);
  const header = screen.getByText(/Footy/i);
  expect(header).toBeInTheDocument();
})