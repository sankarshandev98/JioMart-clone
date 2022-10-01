import React from 'react'
import * as faIcons from 'react-icons/fa';
import ButtonExample from './Header';
import styles from "./Navbar.module.css";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Cart() {
    return (
        <Button variant="primary">
            Cart <Badge bg="secondary">9</Badge>
            <span className="visually-hidden">Cart</span>
        </Button>
    )
}

export default Cart