import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App.jsx";

test("Order phases for happy path", async () => {
  const user = userEvent.setup();

  render(<App />);

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  await user.clear(vanillaInput);
  await user.type(vanillaInput, "2");

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });

  await user.click(cherriesCheckbox);

  const orderButton = screen.getByRole("button", { name: /order sundae/i });

  await user.click(orderButton)
});
