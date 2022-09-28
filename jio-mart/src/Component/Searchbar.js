import React from 'react'
import nav from "./Navbar.module.css";

function Searchbar() {
    return (
        <div>
            <input className={nav.Searchbar}
                type="search"
                placeholder="Search essentials, groceries, and more ..." />
        </div>
    )
}

export default Searchbar