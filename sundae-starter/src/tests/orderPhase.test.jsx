import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App.jsx";
import { expect } from "vitest";

test("Order phases for happy path", async () => {
  const user = userEvent.setup();

  const { unmount } = render(<App />);

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");

  const chocolateInput = screen.getByRole("spinbutton", {
    name: "Chocolate",
  });

  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });

  await user.click(cherriesCheckbox);

  const orderButton = screen.getByRole("button", { name: /order sundae/i });

  await user.click(orderButton);

  const summaryHeading = screen.getByRole("heading", { name: "Order Summary" });
  expect(summaryHeading).toBeInTheDocument();

  const scoopsHeading = screen.getByRole("heading", { name: "Scoops: $6.00" });
  expect(scoopsHeading).toBeInTheDocument();

  const toppingsHeading = screen.getByRole("heading", {
    name: "Toppings: $1.50",
  });
  expect(toppingsHeading).toBeInTheDocument();

  expect(screen.getByText("1 Vanilla")).toBeInTheDocument();
  expect(screen.getByText("2 Chocolate")).toBeInTheDocument();
  expect(screen.getByText("Cherries")).toBeInTheDocument();

  const tcCheckbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  await user.click(tcCheckbox);

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  await user.click(confirmButton);

  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const confirmationHeading = await screen.findByRole("heading", {
    name: /thank you/i,
  });

  expect(confirmationHeading).toBeInTheDocument();

  const notLoading = screen.queryByText("loading");
  expect(notLoading).not.toBeInTheDocument();

  const orderNumber = await screen.findByText(/order number/i);
  expect(orderNumber).toBeInTheDocument();

  const newOrderButton = screen.getByRole("button", { name: /new order/i });
  await user.click(newOrderButton);

  const scoopsTotal = await screen.findByText("Scoops total: $0.00");
  expect(scoopsTotal).toBeInTheDocument();

  const toppingsTotal = screen.getByText("Toppings total: $0.00");
  expect(toppingsTotal).toBeInTheDocument();

  unmount();
});
