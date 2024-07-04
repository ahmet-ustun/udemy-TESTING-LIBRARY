import { render, fireEvent, screen } from "@testing-library/react";
import SummaryForm from "../summary/SummaryForm";

test("Checkbox is unchecked, button is disabled", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test("Checkbox is checked, button is enabled", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(confirmButton).toBeEnabled();
});

test("Checkbox is checked and unchecked, button is disabled", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});
