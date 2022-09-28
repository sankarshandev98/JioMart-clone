import React from 'react'
import nav from "./Navbar.module.css";
import * as faIcons from 'react-icons/fa';

function Searchbar() {
    return (
        <div>
            <input className={nav.Searchbar}
                type="search"
                placeholder="Search essentials, groceries, and more ..." / ><span>
                <faIcons.FaListUl className={nav.listui}/>
            </span>
        </div>
    )
}

export default Searchbar