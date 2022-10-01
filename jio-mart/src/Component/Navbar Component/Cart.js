import React from 'react'
import * as faIcons from 'react-icons/fa';
import styles from "./Navbar.module.css";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Cart() {
    return (
        <Button variant="primary">
            <faIcons.FaShoppingCart className={styles.cart_img} />
            Cart <Badge bg="secondary">9</Badge>
        </Button>
    )
}

export default Cart