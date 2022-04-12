import { render, screen } from '@testing-library/react'; //Imports the testing library 
import Footer from '../Footer'; //Imports the component to be tested
import '@testing-library/jest-dom/extend-expect'

test("Check the button renders", () => {
  render(<Footer />);
  const button = screen.getByRole("button", { name: "Light" });
  expect(button).toBeInTheDocument();
})