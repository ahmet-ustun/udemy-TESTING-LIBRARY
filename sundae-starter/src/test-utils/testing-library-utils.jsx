import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails.jsx";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

export * from "@testing-library/react";
export { renderWithContext as render };