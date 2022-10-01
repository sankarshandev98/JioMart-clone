import React, { useState } from 'react'
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import styles from "./Navbar.module.css";
import Searchbar from './Searchbar';
import Login_signup from './Login_signup';
import Cart from './Cart';
import "./Nav.css";

const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <Link to="#" className={styles.menu_bars}>
                    <AiIcons.AiOutlineMenu className={styles.outline_logo} />
                </Link>
                <img className={styles.main_logo} src='https://www.jiomart.com/assets/version1662994539/smartweb/images/jiomart_logo_beta.svg' />
                <Searchbar />
                <Login_signup />
                <Cart />
            </div>
        </>
    )
}

export default Navbar;
