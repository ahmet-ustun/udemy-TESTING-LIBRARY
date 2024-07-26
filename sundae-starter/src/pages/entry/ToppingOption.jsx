import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useOrderDetails } from "../../contexts/OrderDetails.jsx";

export default function ToppingOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e) => {
    const value = e.target.checked ? 1 : 0
    updateItemCount(name, value, "toppings");
  };

  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      style={{
        textAlign: "center",
      }}
    >
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: "75%" }}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check type="checkbox" label={name} onChange={handleChange} />
      </Form.Group>
    </Col>
  );
}