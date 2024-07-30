import {
  render,
  screen,
  logRoles,
} from "../../../test-utils/testing-library-utils.jsx";
import OrderEntry from "../OrderEntry";
import { server } from "../../../mocks/server";
import { http, HttpResponse } from "msw";
import userEvent from "@testing-library/user-event";

test("Handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    http.get(
      "http://localhost:3030/scoops",
      () => new HttpResponse(null, { status: 500 })
    ),
    http.get(
      "http://localhost:3030/toppings",
      () => new HttpResponse(null, { status: 500 })
    )
  );

  const { container } = render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert");

  logRoles(container);

  expect(alerts).toHaveLength(2);
});

test("my test 2", () => {});
test("my test 3", () => {});

test("Order button is disabled if there are no scoops ordered", async () => {
  const user = userEvent.setup();

  render(<OrderEntry setOrderPhase={vi.fn()} />);

  const orderButton = screen.getByRole("button", { name: /order sundae/i });

  expect(orderButton).toBeDisabled();

  const vanillaInput  = await screen.findByRole("spinbutton", { name: "Vanilla" })

  await user.clear(vanillaInput)
  await user.type(vanillaInput, "1")

  expect(orderButton).toBeEnabled();

  await user.clear(vanillaInput)
  await user.type(vanillaInput, "0")

  expect(orderButton).toBeDisabled();
});
