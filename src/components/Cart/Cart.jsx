import React from "react";
import ReactCircleModal from "react-circle-modal";
import styles from "./Cart.module.scss";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { totalPurchase, setTotalPurchase, totalPrice, setTotalPrice } = props;
  const { width, height, numberOfPieces, gravity } = useWindowSize();

  //function to restart shopping
  const restartShopping = () => {
    totalPurchase.map((purchase) => (purchase.amount = 0));
    setTotalPurchase([]);
    setTotalPrice(0);
  };

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
          <div className={styles.cart__table}>
            {totalPurchase.map((purchase) => {
              return (
                <div className={styles.cart__table_purchase} key={purchase.id}>
                  <img
                    className={styles.cart__table_image}
                    src={purchase.image}
                  />
                  <div className={styles.cart__table_description}>
                    <p>{purchase.album}</p>
                    <p>{purchase.musician}</p>
                  </div>
                  <p className={styles.cart__table_amount}>{purchase.amount}</p>
                </div>
              );
            })}
          </div>
          <p className={styles.cart__paragraph}>
            Total price is {totalPrice}£!
          </p>

          {/* Modal when the customer clicks "pay" button */}
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

                <Link
                  to="vinylrecords/home"
                  className={styles.modal__button}
                  onClick={(onClick, restartShopping)}
                >
                  Thank you!
                </Link>
                <Confetti
                  width={width}
                  height={height}
                  numberOfPieces={30}
                  gravity={0.05}
                />
              </div>
            )}
          </ReactCircleModal>
        </div>
      )}
    </>
  );
};

export default Cart;
