import React from 'react'
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai';
import styles from "./Navbar.module.css";
import Searchbar from './Searchbar';
import LoginSignup from './Login_signup';
import * as faIcons from 'react-icons/fa';
import { CartState } from '../Context/Context';
import { Badge, Button, Dropdown, Nav } from 'react-bootstrap';

const Navbar = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    return (
        <>
            <div className={styles.navbar}>
                <Link to="/" className={styles.menu_bars}>
                    <AiIcons.AiOutlineMenu className={styles.outline_logo} />
                </Link>
                <Link to="/">
                    <img className={styles.main_logo} src='https://www.jiomart.com/assets/version1662994539/smartweb/images/jiomart_logo_beta.svg' alt="" />
                </Link>
                <Searchbar />
                <LoginSignup />
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle>
                            <faIcons.FaShoppingCart color="white" fontSize="25px" />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((prod) => (
                                        <span className="cartitem" key={prod.id}>
                                            <img
                                                src={prod.image}
                                                className="cartItemImg"
                                                alt={prod.name}
                                            />
                                            <div className="cartItemDetail">
                                                <span>{prod.name}</span>
                                                <span>₹ MRP: {prod.price}</span>
                                            </div>
                                            <AiIcons.AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    })
                                                }
                                            />
                                        </span>
                                    ))}
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin: "0 10px" }}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{ padding: 10 }}>Cart is Empty!</span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </div>
        </>
    )
}

export default Navbar;
