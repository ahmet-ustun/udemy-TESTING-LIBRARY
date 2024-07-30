import { useEffect, useState } from "react";
import { useOrderDetails } from "../../contexts/OrderDetails.jsx";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function OrderConfirmation({ setOrderPhase }) {
  const [orderNumber, setOrderNumber] = useState(null);

  const { resetOrder } = useOrderDetails();

  const handleClick = () => {
    resetOrder();
    setOrderPhase("inProgress");
  };

  useEffect(() => {
    axios
      .post("http://localhost:3030/order")
      .then(({ data }) => {
        setOrderNumber(data.orderNumber);
      })
      .catch((error) => {
        console.error("Order post error: ", error);
      });
  }, []);

  return orderNumber ? (
    <div style={{ textAlign: "center" }}>
      <h1>Thank you!</h1>
      <p>Your order number is {orderNumber}</p>
      <p style={{ fontSize: "25%" }}>
        as per our terms and conditions, nothing will happen now
      </p>
      <Button onClick={handleClick}>Create new order</Button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
