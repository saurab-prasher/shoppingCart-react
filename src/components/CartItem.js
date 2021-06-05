import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useGlobalContext } from "../context";

const CartItem = () => {
  const {
    state: { list },
    handleIncrement,
    handleDecrement,
    handleRemoveItem,
  } = useGlobalContext();

  return (
    <div className="div">
      {list.map((item) => {
        const { id, title, price, img, amount } = item;

        return (
          <React.Fragment key={id}>
            <article className="phone">
              <div className="img-box">
                <img src={img} alt="ds" />
              </div>

              <div className="text-box">
                <h3>{title}</h3>
                <p className="price">${price}</p>
                <button onClick={handleRemoveItem} className="btn-remove">
                  remove
                </button>
              </div>
            </article>
            <div className="increment">
              <IoIosArrowUp
                onClick={() => handleIncrement(id)}
                className="arrow"
              />
              {amount}
              <IoIosArrowDown
                onClick={(id) => handleDecrement(id)}
                className="arrow"
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CartItem;