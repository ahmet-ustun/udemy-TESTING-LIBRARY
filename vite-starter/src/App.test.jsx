import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  expect(headingElement).toBeInTheDocument();
});

test('App contains correct text', () => {
  render(<App />);
  const targetText = screen.getByText("I'm gonna learn React Testing Library");
  expect(targetText).toBeInTheDocument();
});
