import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../action/cartAction";
import { Link } from "react-router-dom";
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
    <div style={{ backgroundImage: `url(${Background5})` }}>
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
                className="card cart-item ms-5 mb-5"
                style={{ display: "flex", width: "40rem" }}
              >
                <div className="row d-flex">
                  <div className="col cart-item-content">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image mt-3 mb-3 img-thumbnail "
                    />
                  </div>
                  <div className="col cart-details ">
                    <div className="mt-2">
                      <span className="cart-name">{item.name}</span>
                      <br />
                      <div className="cart-total">
                        ₹{calculateProductTotal(item)}
                      </div>
                      <button
                        className="remove-btn mt-4 mb-4"
                        onClick={() => handleRemoveFromCart(item.id, item.name)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total Fees: ₹{calculateTotal()}</h2>
          {isCheckout ? (
            <div className="alert alert-success mt-2">
              Your fees has been successfully Paid!
            </div>
          ) : (
            <button
              onClick={() => setIsCheckout(true)}
              className="checkout-btn mb-5 "
            >
              Checkout
            </button>
          )}
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
