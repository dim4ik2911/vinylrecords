import React from "react";
import styles from "./Home.module.scss";
import shop from "../../images/shop.jpg";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.home}>
        <h2 className={styles.home__title}>Vinyl Records Online Store</h2>
        <p className={styles.home__paragraph}>
          Order your vinyl records with our easy to use app, and get your vinyl
          records delivered straight to your doorstep.
        </p>
        <button className={styles.home__button}>Start shopping</button>
      </div>
      <img className={styles.image} src={shop} alt="Shop photo" />
    </div>
  );
};

export default Home;
