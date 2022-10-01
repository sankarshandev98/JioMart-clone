import React from 'react'
import * as faIcons from 'react-icons/fa';
import styles from "./Navbar.module.css";

function Searchbar() {
    return (
        <div className={styles.search_div}>
            <input className={styles.Searchbar}
                type="search"
                placeholder="Search essentials, groceries, and more ...">
            </input>
            <faIcons.FaListUl className={styles.FaListUl} />
        </div>
    )
}

export default Searchbar