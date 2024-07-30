import SummaryForm from "./SummaryForm.jsx";
import { useOrderDetails } from "../../contexts/OrderDetails.jsx";
import { formatCurrency } from "../../utilities";

export default function OrderSummary({ setOrderPhase }) {
  const { totals, optionCounts } = useOrderDetails();

  const scoopsArray = Object.entries(optionCounts.scoops);
  const scoopsList = scoopsArray.map(([key, value]) => (
    <li key={key}>{`${value} ${key}`}</li>
  ));

  const toppingsArray = Object.keys(optionCounts.toppings);
  const toppingsList = toppingsArray.map((key) => <li key={key}>{key}</li>);

  const hasToppings = totals.toppings > 0;

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopsList}</ul>
      {hasToppings && (
        <>
          <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
          <ul>{toppingsList}</ul>
        </>
      )}
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
}
