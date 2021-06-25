import React, { useState } from "react";
import styles from "./Products.module.scss";
import data from "../../data/data.js";

const Products = (props) => {
  const { totalPurchase, setTotalPurchase, totalPrice, setTotalPrice } = props;

  // console.log(price);
  const handlePurchaseClick = (one) => {
    // setPrice(price + one.price);
    // updatePrice(one.price);
    setTotalPurchase([...totalPurchase, one]);
    setTotalPrice(totalPrice + one.price);
  };

  return (
    <ul>
      {data.map((one) => {
        return (
          <li className={styles.product} key={one.id}>
            <img className={styles.image} src={one.image} alt="Album Cover" />
            <div className={styles.description}>
              <div className={styles.albumInformation}>
                <h2 className={styles.cover}>{one.album}</h2>
                <h3 className={styles.musician}>{one.musician}</h3>
                <h4 className={styles.year}>{one.year}</h4>
              </div>
              <div className={styles.price}>
                <button
                  onClick={() => {
                    handlePurchaseClick(one);
                    one.amount++;
                    // updatePrice(one.price);
                  }}
                  className={styles.priceInformation}
                >
                  {one.price}£
                </button>
              </div>
            </div>
            {/* <div>
              {one.amount == 0 ? null : (
                <button
                  // onClick={(one) => (one.amount = 0)}

                  className={styles.delete}
                >
                  x
                </button>
              )}
            </div> */}
            <div className={styles.amount}>
              {one.amount == 0 ? null : <p>{one.amount}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
