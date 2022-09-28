import React, { useState } from 'react'
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import * as faIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import nav from "./Navbar.module.css";
import Searchbar from './Searchbar';
import Login_signup from './Login_signup';
import Cart from './Cart';


const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    }
    return (
        <>
            <div className={nav.navbar}>
                <Link to="/" className='menu-bars'>
                    <AiIcons.AiOutlineMenu className={nav.nav_toggle} onClick={showSidebar} />
                </Link>
                <img className={nav.main_logo} src='https://www.jiomart.com/assets/version1662994539/smartweb/images/jiomart_logo_beta.svg' />
                <Searchbar />
                <Login_signup />
                <Cart />
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
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

export default Navbar;
