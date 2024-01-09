import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../action/cartAction";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Background5 from "../images/background5.jpg";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [successMessage, setSuccessMessage] = useState("");
  const [isCheckout, setIsCheckout] = useState(false);

  const calculateProductTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveFromCart = (productId, productName) => {
    if (
      window.confirm(
        `Are you sure you want to remove ${productName} from your cart?`
      )
    ) {
      dispatch(removeFromCart(productId));
      const message = `${productName} has been removed from your cart.`;
      setSuccessMessage(message);
      setTimeout(() => {
        setSuccessMessage("");
      }, 10);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${Background5})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="container text-center align-items-center ">
        <div className="cart  text-center">
          <h1>Shopping Cart</h1>
          {successMessage && (
            <div className="alert alert-success mt-2">{successMessage}</div>
          )}
          <ul className="cart-list ">
            {cart.map((item) => (
              <li
                key={item.id}
                className="card cart-item mt-5 mb-5"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Row>
                  <Col lg={4} md={6} xs={12} >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image mt-5 mb-2 img-thumbnail "
                    />
                  </Col>
                  <Col>
                    <div className="mt-5">
                      <span className="cart-name">{item.name}</span>
                      <br />
                      <div className="cart-total">
                        ₹{calculateProductTotal(item)}
                      </div>
                      <button
                        className="remove-btn mt-4 mb-4"
                        onClick={() => handleRemoveFromCart(item.id, item.name)}
                      >
                        Remove
                      </button>
                    </div>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
          <h2>Total Fees: ₹{calculateTotal()}</h2>

          {cart.length === 0 && (
            <div className="alert alert-danger mt-2">
              Add Your Favorite Items to the Cart
            </div>
          )}

          {cart.length > 0 && (
            <button
              onClick={() => setIsCheckout(true)}
              className="checkout-btn mb-5"
            >
              Checkout
            </button>
          )}

          {isCheckout ? (
            <div className="alert alert-success mt-2">
              Your fees have been successfully paid!
            </div>
          ) : null}
          {isCheckout ? (
            <div className="mb-5 pb-5">
              <Link to="/" className="link-btn ">
                Go Back
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Cart;
