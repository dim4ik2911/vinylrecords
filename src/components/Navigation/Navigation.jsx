import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Home from "../Home";
import AboutUs from "../AboutUs";
import Products from "../Products";
import Cart from "../Cart";
import Logo from "../../images/logo.png";

const Navigation = () => {
  const [totalPurchase, setTotalPurchase] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  //check how many vinyl records in cart
  useEffect(() => {
    if (!totalPurchase.length) {
      setTotalAmount(0);
    }
    let total = 0;
    for (let i = 0; i < totalPurchase.length; i++) {
      total = total + totalPurchase[i].amount;
      setTotalAmount(total);
    }
  }, [totalPrice]);

  return (
    <>
      <Router>
        <>
          <div className={styles.navigation}>
            <img className={styles.logo} src={Logo} />
            <div className={styles.choice}>
              <Link className={styles.link} to="/vinylrecords">
                Home
              </Link>
              <Link className={styles.link} to="/vinylrecords/aboutus">
                About us
              </Link>
              <Link className={styles.link} to="/vinylrecords/products">
                Products
              </Link>
              <Link className={styles.link} to="/vinylrecords/cart">
                Cart ({totalAmount})
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/vinylrecords">
              <Home />
            </Route>
            <Route path="/vinylrecords/aboutus">
              <AboutUs />
            </Route>
            <Route path="/vinylrecords/products">
              <Products
                totalPurchase={totalPurchase}
                setTotalPurchase={setTotalPurchase}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            </Route>
            <Route path="/vinylrecords/cart">
              <Cart
                totalPurchase={totalPurchase}
                setTotalPurchase={setTotalPurchase}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
};

export default Navigation;
