import React from 'react'
import * as faIcons from 'react-icons/fa';
import { CartState } from '../Context/Context';
import styles from "./Navbar.module.css";

function Searchbar() {
    const { state: { cart }, dispatch, productDispatch } = CartState();
    return (
        <div className={styles.search_div}>
            <input className={styles.Searchbar}
                type="search"
                placeholder="Search essentials, groceries, and more ..."
                onChange={(e) => {
                    productDispatch({
                        type: "FILTER_BY_SEARCH",
                        payload: e.target.value,
                    });
                }}
            >
            </input>
            <faIcons.FaListUl className={styles.FaListUl} />
        </div>
    )
}

export default Searchbar