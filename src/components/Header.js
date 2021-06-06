import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Header = () => {
  const { totalItem } = useGlobalContext();

  return (
    <header className="header">
      <h1 className="logo">UseReducer</h1>
      <div className="cart-logo">
        <FaCartArrowDown />

        <div className="cart-logo-item">{totalItem}</div>
      </div>
    </header>
  );
};

export default Header;
