import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button starts with correct label and color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

test("button has correct label and color after click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent(/red/i);
  expect(buttonElement).toHaveClass("blue");
});
