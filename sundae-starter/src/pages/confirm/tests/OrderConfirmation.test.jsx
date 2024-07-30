import { render } from "@testing-library/react";
import { server } from "../../../mocks/server.js";
import { http, HttpResponse } from "msw";
import OrderConfirmation from "../OrderConfirmation";

test("Error response from server for submitting order", async () => {
  server.resetHandlers(
    http.post("http://localhost:3030/order", () =>
      HttpResponse(null, { status: 500 })
    )
  );

  render(<OrderConfirmation setOrderPhase={vi.fn()} />);

  const alertBanner = await screen.findByRole("alert");

  expect(alertBanner).toHaveTextContent(
    "An unexpected error occurred. Please try again later."
  );
});
