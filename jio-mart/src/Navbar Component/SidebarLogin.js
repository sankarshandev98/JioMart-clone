import React from 'react'
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import * as faIcons from 'react-icons/fa';

function SidebarLogin() {
    return (
        <div className={styles.sidebar_login}>
            <li className={styles.navbar_toggle}>
                <Link to="#" className={styles.menu_bars}>
                    <AiIcons.AiOutlineClose className={styles.outline_logo} />
                </Link>
                <div>
                    <div className={styles.aiHello}>
                        <faIcons.FaUserCircle className={styles.userCircle}/><span>Hello, Sign in</span>
                    </div>
                    <div className={styles.sidebar_buttons}>
                        <button>Account</button>
                        <button>Orders</button>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default SidebarLogin