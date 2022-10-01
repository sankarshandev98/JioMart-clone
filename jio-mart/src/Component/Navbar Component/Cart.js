import React from 'react'
import * as faIcons from 'react-icons/fa';
import styles from "./Navbar.module.css";

function Cart() {
    return (
        <div className={styles.cartDiv}>
            <faIcons.FaShoppingCart className={styles.cart_img} /><span>Cart</span>
        </div>
    )
}

export default Cart