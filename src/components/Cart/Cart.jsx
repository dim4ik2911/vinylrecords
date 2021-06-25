import React from "react";
import styles from "./Cart.module.scss";

const Cart = (props) => {
  const { totalPurchase, setTotalPurchase, totalPrice } = props;

  return (
    <>
      {totalPrice == 0 && (
        <div className={styles.cart}>
          <h2 className={styles.cart__header}>Your cart</h2>
          <p>You have not added any products yet.</p>
        </div>
      )}
      {totalPrice > 0 && (
        <div className={styles.cart}>
          <h2 className={styles.cart__header}>Your cart</h2>
          <p className={styles.cart__paragraph}>Total price is {totalPrice}!</p>
          <button className={styles.cart__button}>Pay</button>
        </div>
      )}
    </>
  );
};

export default Cart;
