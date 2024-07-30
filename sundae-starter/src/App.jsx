import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry.jsx";
import { OrderDetailsProvider } from "./contexts/OrderDetails.jsx";
import OrderSummary from "./pages/summary/OrderSummary.jsx";
import OrderConfirmation from "./pages/confirm/OrderConfirmation.jsx";
import { useState } from "react";

function App() {
  const [orderPhase, setOrderPhase] = useState("inProgress");

  const OrderEntryComponent = {
    inProgress: <OrderEntry setOrderPhase={setOrderPhase} />,
    review: <OrderSummary setOrderPhase={setOrderPhase} />,
    completed: <OrderConfirmation setOrderPhase={setOrderPhase} />,
  };

  return (
    <Container>
      <OrderDetailsProvider>
        {OrderEntryComponent[orderPhase]}
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
