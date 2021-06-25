import React, { useState } from "react";
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
  console.log(totalPrice);
  // const updatePrice = (added) => {
  //   console.log(price);
  //   return setPrice(price + added);
  // };

  return (
    <>
      <Router>
        <>
          <div className={styles.navigation}>
            <img className={styles.logo} src={Logo} />
            <div className={styles.choice}>
              <Link className={styles.link} to="/">
                Home
              </Link>
              <Link className={styles.link} to="/aboutus">
                About us
              </Link>
              <Link className={styles.link} to="/products">
                Products
              </Link>
              <Link className={styles.link} to="/cart">
                Cart ({totalPurchase.length})
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutus">
              <AboutUs />
            </Route>
            <Route path="/products">
              <Products
                totalPurchase={totalPurchase}
                setTotalPurchase={setTotalPurchase}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            </Route>
            <Route path="/cart">
              <Cart
                totalPurchase={totalPurchase}
                setTotalPurchase={setTotalPurchase}
                totalPrice={totalPrice}
              />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
};

export default Navigation;
