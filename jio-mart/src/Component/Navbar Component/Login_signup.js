import React from 'react'
import * as faIcons from 'react-icons/fa';
import styles from "./Navbar.module.css";

function LoginSignup() {
    return (
        <div className={styles.loginDiv}>
            <faIcons.FaUser className={styles.userLogo} /><span>Sign in / Sign up</span>
        </div>
    )
}

export default LoginSignup