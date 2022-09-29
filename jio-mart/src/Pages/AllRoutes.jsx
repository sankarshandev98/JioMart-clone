import React from 'react'
import { Route, Routes } from "react-router-dom";
import Aboutus from './Aboutus';
import Alloffers from './Alloffers';
import Gogreen from './Gogreen';
import Guide from './Guide';
import Home from './Home';
import Jiomart_gift_card from './Jiomart_gift_card';
import Jiomart_gift_store from './Jiomart_gift_store';
import Jio_mart_wallet from './Jio_mart_wallet';
import My_account from './My_account';
import My_list from './My_list';
import Need_help from './Need_help';
import Shop_by_Category from './Shop_by_Category';
const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={< Aboutus />} />
                <Route path='/all-offers' element={< Alloffers />} />
                <Route path='/go-green' element={< Gogreen />} />
                <Route path='/guide' element={< Guide />} />
                <Route path='/jiomart-gift-card' element={< Jiomart_gift_card />} />
                <Route path='/jiomart-gift-store' element={< Jiomart_gift_store />} />
                <Route path='/jiomart-wallet' element={< Jio_mart_wallet />} />
                <Route path='/my-list' element={< My_list />} />
                <Route path='/shop-by-category' element={< Shop_by_Category />} />
                <Route path='/my-account' element={< My_account />} />
                <Route path='/need-help' element={<Need_help />} />
            </Routes>
        </>
    )
}

export default AllRoutes;
