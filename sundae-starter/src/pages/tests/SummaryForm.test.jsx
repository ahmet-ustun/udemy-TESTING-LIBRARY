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

test("Popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();
  
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
