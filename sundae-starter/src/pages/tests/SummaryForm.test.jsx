import { render, screen } from "@testing-library/react";
import SummaryForm from "../summary/SummaryForm";
import userEvent from "@testing-library/user-event";

test("Checkbox is unchecked, button is disabled", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test("Checkbox is checked, button is enabled", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(confirmButton).toBeEnabled();
});

test("Checkbox is checked and unchecked, button is disabled", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});
