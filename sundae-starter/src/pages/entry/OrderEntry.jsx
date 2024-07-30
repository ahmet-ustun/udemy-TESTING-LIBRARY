import { useOrderDetails } from "../../contexts/OrderDetails.jsx";
import { formatCurrency } from "../../utilities/index.js";
import Options from "./Options.jsx";
import Button from "react-bootstrap/Button";

export default function OrderEntry({ setOrderPhase }) {
  const { totals } = useOrderDetails();

  const grandTotal = totals.scoops + totals.toppings;

  const handleClick = () => {
    setOrderPhase("review");
  };

  const hasScoops = totals.scoops > 0;

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(grandTotal)}</h2>
      <Button disabled={!hasScoops} onClick={handleClick}>Order sundae</Button>
    </div>
  );
}
