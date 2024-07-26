import { useOrderDetails } from "../../contexts/OrderDetails.jsx";
import { formatCurrency } from "../../utilities/index.js";
import Options from "./Options.jsx";

export default function OrderEntry() {
  const {totals} = useOrderDetails()

  const grandTotal = totals.scoops + totals.toppings

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(grandTotal)}</h2>
    </div>
  );
}
