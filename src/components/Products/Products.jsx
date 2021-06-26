import React, { useState } from "react";
import styles from "./Products.module.scss";
import data from "../../data/data.js";

const Products = (props) => {
  const { totalPurchase, setTotalPurchase, totalPrice, setTotalPrice } = props;

  //delete a purchase
  const handleDeleteClick = (one) => {
    setTotalPurchase(
      totalPurchase.filter((purchase) => {
        return totalPurchase.indexOf(one) !== totalPurchase.indexOf(purchase);
      })
    );
    setTotalPrice(totalPrice - one.amount * one.price);
    one.amount = 0;
  };

  //add a purchase
  const handlePurchaseClick = (one) => {
    if (!one.amount) {
      one.amount++;
      setTotalPurchase([...totalPurchase, one]);
      setTotalPrice(totalPrice + one.price);
    } else {
      one.amount++;
      setTotalPrice([...totalPurchase]);
      setTotalPrice(totalPrice + one.price);
    }
  };

  return (
    <div>
      <h1 className={styles.header}>Our collection</h1>
      <ul className={styles.products}>
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
                    }}
                    className={styles.priceInformation}
                  >
                    {one.price}£
                  </button>
                </div>
              </div>
              <button
                className={styles.delete}
                onClick={() => handleDeleteClick(one)}
              >
                {one.amount === 0 ? null : <p>x</p>}
              </button>

              {one.amount === 0 ? null : (
                <p className={styles.amount}>{one.amount}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
