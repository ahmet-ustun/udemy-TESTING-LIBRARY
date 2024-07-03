import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";
import { kebabCaseToTitleCase } from "./helpers.js";

test("button starts with correct label and color", () => {
  render(<App />);
  
  const buttonElement = screen.getByRole("button", { name: /midnight blue/i });
  
  expect(buttonElement).toHaveTextContent(/midnight blue/i);
  expect(buttonElement).toHaveClass("medium-violet-red");
});

test("button has correct label and color after click", () => {
  render(<App />);
  
  const buttonElement = screen.getByRole("button", { name: /midnight blue/i });
  
  fireEvent.click(buttonElement);
  
  expect(buttonElement).toHaveTextContent(/medium violet red/i);
  expect(buttonElement).toHaveClass("midnight-blue");
});

test("checkbox flow 1", () => {
  render(<App />);
  
  const buttonElement = screen.getByRole("button", { name: /midnight blue/i });
  const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i });
  
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  
  fireEvent.click(checkboxElement);
  
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("disabled");
});

test("checkbox flow 2", () => {
  render(<App />);
  
  const buttonElement = screen.getByRole("button", { name: /midnight blue/i });
  const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i });
  
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  
  fireEvent.click(checkboxElement);
  
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("disabled");

  fireEvent.click(checkboxElement);

  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).not.toHaveClass("disabled");
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hypens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hypen", () => {
    expect(kebabCaseToTitleCase("light-blue")).toBe("Light Blue");
  });
  test("works for multiple hypens", () => {
    expect(kebabCaseToTitleCase("very-dark-gray")).toBe("Very Dark Gray");
  });
});
