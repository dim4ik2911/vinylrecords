import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styles from "./Navigation.module.scss";
import Home from "../Home";
import AboutUs from "../AboutUs";
import Products from "../Products";
import Cart from "../Cart";
import Logo from "../../images/logo.png";

const Navigation = () => {
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
                Cart
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
              <Products />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
};

export default Navigation;
