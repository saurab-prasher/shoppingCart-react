import React from "react";
import { useGlobalContext } from "../context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { totalAmount, cart, handleClearCart } = useGlobalContext();

  return (
    <>
      {cart.length === 0 ? (
        <h1
          style={{
            textAlign: "center",
            marginTop: "3rem",
            textDecoration: "underline",
          }}
        >
          Your Cart is empty
        </h1>
      ) : (
        <main className="cart-container">
          <h1>Your Cart</h1>
          <section className="content">
            <CartItem />
            <hr className="line" />
            <article className="total">
              <h3>Total</h3>
              <h3>${totalAmount}</h3>
            </article>
          </section>

          <button onClick={handleClearCart} className="btn-clear">
            CLEAR CART
          </button>
        </main>
      )}
    </>
  );
};

export default CartContainer;
