import React, { useContext, useState } from "react";
import "./MealList.css";
import CartContext from "../../store/cart-context";

const MealList = () => {
  const cartCtx = useContext(CartContext);
  const [amounts, setAmounts] = useState({});

  const mealItem = [
    {
      id: 1,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 2,
      name: "Schnitzel",
      description: "A German specialty!",
      price: 16.5,
    },
    {
      id: 3,
      name: "Barbecue Burger",
      description: "America, raw, meaty",
      price: 12.99,
    },
    {
      id: 4,
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 16.0,
    },
  ];

  const addCartItemHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: +amounts[item.id] || 1,
      price: item.price,
    });
  };

  const amountChangeHandler = (itemId, newAmount) => {
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [itemId]: newAmount,
    }));
  };

  return (
    <ul className="mealList-main">
      {mealItem.map((item) => {
        return (
          <li key={item.id} className="mealList">
            <div>
              <h3>{item.name}</h3>
              <div className="mealList-description">{item.description}</div>
              <div className="mealList-price">${item.price.toFixed(2)}</div>
            </div>
            <form
              className="mealList-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <h4>Amount</h4>
                <input
                  type="number"
                  id={`amount-${item.id}`}
                  defaultValue={amounts[item.id] || 1}
                  onChange={(e) => amountChangeHandler(item.id, e.target.value)}
                />
              </div>
              <button onClick={() => addCartItemHandler(item)}>+Add</button>
            </form>
          </li>
        );
      })}
    </ul>
  );
};

export default MealList;
