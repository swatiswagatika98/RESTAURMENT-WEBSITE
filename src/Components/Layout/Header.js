import React from "react";
import "./Header.css";
import backgroundImage from "../../assets/background.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
  const oncCartOpenHandler = () => {
    props.setCartOpen(true);
  };

  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <CartButton onClick={oncCartOpenHandler} />
      </header>
      <div className="main-image">
        <img src={backgroundImage} alt="background" />
      </div>
    </>
  );
};

export default Header;
