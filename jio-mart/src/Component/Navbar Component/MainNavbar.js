import React, { useState } from 'react'
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import styles from "./Navbar.module.css";
import Searchbar from './Searchbar';
import Login_signup from './Login_signup';
import Cart from './Cart';
import "./Nav.css";
import SidebarLogin from './SidebarLogin';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    }
    return (
        <>
            <div className={styles.navbar}>
                <Link to="#" className={styles.menu_bars}>
                    <AiIcons.AiOutlineMenu className={styles.outline_logo} onClick={showSidebar} />
                </Link>
                <img className={styles.main_logo} src='https://www.jiomart.com/assets/version1662994539/smartweb/images/jiomart_logo_beta.svg' />
                <Searchbar />
                <Login_signup />
                <Cart />
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className={styles.nav_menu_items} onClick={showSidebar}>
                    <SidebarLogin />
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default mainNavbar;
