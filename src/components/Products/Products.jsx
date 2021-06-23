import React from "react";
import styles from "./Products.module.scss";
import data from "../../data/data.js";

const Products = () => {
  return (
    <ul>
      {data.map((one) => {
        return (
          <li className={styles.product}>
            <img className={styles.image} src={one.image} alt="Album Cover" />
            <div className={styles.description}>
              <div className={styles.albumInformation}>
                <h2 className={styles.cover}>{one.album}</h2>
                <h3 className={styles.musician}>{one.musician}</h3>
                <h4 className={styles.year}>{one.year}</h4>
              </div>
              <div className={styles.price}>
                <button className={styles.priceInformation}>{one.price}</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;
