import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [isHighlight, setHighlight] = useState(false);
  const ctx = useContext(CartContext);

  const { items } = ctx;
  const numberOfItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHighlight(true);
    const timer = setTimeout(() => {
      setHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${styles.button} ${isHighlight ? styles.bump : ""}`;

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
