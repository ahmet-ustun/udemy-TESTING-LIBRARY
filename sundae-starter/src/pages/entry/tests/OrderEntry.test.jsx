import { render, screen, logRoles } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { server } from "../../../mocks/server";
import { http, HttpResponse } from "msw";

test.only("Handles error for scoops and toppings routes", async () => {
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
