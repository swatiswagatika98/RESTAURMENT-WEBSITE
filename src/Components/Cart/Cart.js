import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onCartHandler = () => {
    props.setCartOpen(false);
  };

  let totalAmount = cartCtx.totalAmount.toFixed(2);

  return (
    <Modal>
      <div className="cart-items">
        <CartItemCard item={cartCtx.items} />
        <div className="total">
          <h3>Total Amount</h3>
          <h3>${totalAmount}</h3>
        </div>
        <div className="actions">
          <button onClick={onCartHandler} className="button--alt">
            Close
          </button>
          <button className="button">Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
