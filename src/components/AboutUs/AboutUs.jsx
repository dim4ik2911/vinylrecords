import React from "react";
import styles from "./AboutUs.module.scss";
import aboutUs from "../../images/aboutus.jpg";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <h2 className={styles.aboutUs__title}>About Us</h2>
      <p className={styles.aboutUs__paragraph}>
        If you're looking for where to buy vinyl records, you've come to the
        right place! Welcome to Vinyl Records. Build your dream collection with
        our help!
        <br />
        Save time by shopping on our app and we'll deliver the vinyl records
        right to your home.
      </p>
      <img
        className={styles.aboutUs__image}
        src={aboutUs}
        alt="Image about us"
      />
    </div>
  );
};

export default AboutUs;
