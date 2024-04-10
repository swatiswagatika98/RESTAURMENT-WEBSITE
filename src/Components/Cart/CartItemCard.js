import React, { useContext } from "react";
import "./CartItemCard.css";
import CartContext from "../../store/cart-context";

const CartItemCard = (props) => {
  const cartCtx = useContext(CartContext);

  const decreaseQuantityHandler = (itemId) => {
    cartCtx.removeItem(itemId);
  };

  return (
    <div>
      {props.item.map((item) => {
        return (
          <div key={item.id} className="cartItem-main">
            <div className="cartItem-main-description">
              <h3>{item.name}</h3>
              <div>
                <span className="cartItem-price">${item.price.toFixed(2)}</span>
                <span>x{item.amount}</span>
              </div>
            </div>
            <div className="cartItem-main--actions">
              <button
                className="cartItem-action-dec"
                onClick={() => decreaseQuantityHandler(item.id)}
              >
                -
              </button>
              <button className="cartItem-action-inc">+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItemCard;
