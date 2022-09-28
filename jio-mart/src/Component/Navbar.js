import React, { useState } from 'react'
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    }
    return (
        <>
            <div className='navbar'>
                <Link to="/" className='menu-bars'>
                    <AiIcons.AiOutlineMenu onClick={showSidebar} />
                </Link>
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

// 13.31

export default Navbar;
