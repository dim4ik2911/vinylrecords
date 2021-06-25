import React from "react";
import ReactCircleModal from "react-circle-modal";
import styles from "./Cart.module.scss";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Cart = (props) => {
  const { totalPurchase, setTotalPurchase, totalPrice } = props;
  const { width, height } = useWindowSize();

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
          <ReactCircleModal
            backgroundColor="#fff"
            toogleComponent={(onClick) => (
              <button className={styles.cart__button} onClick={onClick}>
                Pay
              </button>
            )}
            // Optional fields and their default values
            offsetX={0}
            offsetY={0}
          >
            {(onClick) => (
              <div className={styles.modal}>
                <p className={styles.modal__paragraph}>
                  We are appreciated you choose our service!
                </p>
                <button className={styles.modal__button} onClick={onClick}>
                  Thank you!
                </button>
                <Confetti width={width} height={height} />
              </div>
            )}
          </ReactCircleModal>
          {/* <button className={styles.cart__button}>Pay</button> */}
        </div>
      )}
    </>
  );
};

export default Cart;
