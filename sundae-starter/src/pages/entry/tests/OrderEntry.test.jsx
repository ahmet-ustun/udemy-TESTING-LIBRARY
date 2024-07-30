import { render, screen, logRoles } from "../../../test-utils/testing-library-utils.jsx";
import OrderEntry from "../OrderEntry";
import { server } from "../../../mocks/server";
import { http, HttpResponse } from "msw";

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
  render(<OrderEntry />);

  const orderButton = screen.getByRole("button", { name: /order sundae/i });

  expect(orderButton).toBeDisabled();
})
