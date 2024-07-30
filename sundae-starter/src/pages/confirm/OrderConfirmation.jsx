import { useEffect, useState } from "react";
import { useOrderDetails } from "../../contexts/OrderDetails.jsx";
import axios from "axios";
import Button from "react-bootstrap/Button";
import AlertBanner from "../common/AlertBanner.jsx";

export default function OrderConfirmation({ setOrderPhase }) {
  const [orderNumber, setOrderNumber] = useState(null);
  const [isError, setIsError] = useState(false);

  const { resetOrder } = useOrderDetails();

  const handleClick = () => {
    resetOrder();
    setIsError(false);
    setOrderPhase("inProgress");
  };

  useEffect(() => {
    axios
      .post("http://localhost:3030/order")
      .then(({ data }) => {
        setOrderNumber(data.orderNumber);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  const newOrderButton = (
    <Button onClick={handleClick}>Create new order</Button>
  );

  if (isError) {
    return (
      <div style={{ textAlign: "center" }}>
        <AlertBanner message={null} variant={null} />
        {newOrderButton}
      </div>
    );
  }

  return orderNumber ? (
    <div style={{ textAlign: "center" }}>
      <h1>Thank you!</h1>
      <p>Your order number is {orderNumber}</p>
      <p style={{ fontSize: "25%" }}>
        as per our terms and conditions, nothing will happen now
      </p>
      {newOrderButton}
    </div>
  ) : (
    <p>Loading...</p>
  );
}
