import React from 'react'
import Banner from './Banner'
import Slidertwo from './Slidertwo'
import Sliderthree from './Sliderthree'
import Swipper from './Swipper'
import style from "./LandingPage.module.css"
import BannerCard from './BannerCard'
import SmallCard from './SmallCard'
import { HomeWrapper } from './style'
import WomenCard from './WomenCard'
import Sliderfour from './Sliderfour'
import Sliderfive from './Sliderfive'
import Slidersix from './Slidersix'
import SliderSeven from './Sliderseven'
import SliderEight from './Slidereight'
import SliderNine from './Slidernine'


function LandingPage() {
    return (
        <>
            <Swipper />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1622140373_web.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1621437459_ncpunemum.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1611339553_free_header.jpg"} />

            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Shop from Top Categories</p>
            <HomeWrapper> <Slidertwo /> </HomeWrapper>

            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1623259110_web.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1621013913_Desktop-_Home_page-_banner.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1605980137_Mylist_banner_web.jpg"} />

            <div className={style.offerDiv}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622485247_Mobikwik_web_mobile.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622731979_Simpl_web_mobile.jpg" alt="" /></a> </div>

            </div>

            <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Offers on daily essentials</p>
            <div style={{ width: "90%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#efd6da"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png"} item={"Dal & Pulses"} />
                <BannerCard itemUrl={"/staples/atta-flours-sooji"} color={"#efd6da"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/14/thumb/0-14.png"} item={"Atta, Flours & Sooji"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/18/thumb/0-18.png"} item={"Edibles Oils"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 10% OFF"} url={"https://www.jiomart.com/images/category/20/thumb/0-20.png"} item={"Salt, Sugar & Jaggery"} />

            </div>
            <div style={{ width: "90%", margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#efd6da"} offer={"UP TO 15% OFF"} url={"https://www.jiomart.com/images/category/119/thumb/bath-hand-wash-20200714.png"} item={"Bath & Hand Wash"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 33% OFF"} url={"https://www.jiomart.com/images/category/7/thumb/toothpaste-20200520.png"} item={"Toothpaste"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/191/thumb/noodle-pasta-vermicelli-20200603.png"} item={"Noodle, Pasta, Vermicelli"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 30% OFF"} url={"https://www.jiomart.com/images/category/44/thumb/0-44.png"} item={"Biscuits & Cookies"} />

            </div>

            <p className="heardertext" style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Shop by Categories</p>
            <HomeWrapper> <Sliderthree /> </HomeWrapper>


            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1621444118_wm.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622899682_Surprise_web_mini.jpg" alt="" /></a> </div>

            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622214167_webmini.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620914358_wm.jpg" alt="" /></a> </div>

            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620489083_soapswebmini.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1621607032_webmini.jpg" alt="" /></a> </div>

            </div>


            <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Offers on Household & Personal care</p>
            <div style={{ width: "90%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#c5f8c0"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/37/thumb/all-purpose-cleaners-20200603.png"} item={"All Purpose Cleaners"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 25% OFF"} url={"https://www.jiomart.com/images/category/43/thumb/detergent-bars-20200520.png"} item={"Detergent Bars"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/28/thumb/0-28.png"} item={"Feminine Hygiene"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/feminine-hygiene-20200605.png"} item={"Skin Care"} />

            </div>
            <div style={{ width: "90%", margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#c5f8c0"} offer={"UP TO 30% OFF"} url={"https://www.jiomart.com/images/category/6/thumb/oral-care-20200603.png"} item={"Oral Care"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 35% OFF"} url={"https://www.jiomart.com/images/category/31/thumb/0-31.png"} item={"Hair Care"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 10% OFF"} url={"https://www.jiomart.com/images/category/10/thumb/0-10.png"} item={"baby Care"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/172/thumb/paper-tissues-nakins-20200520.png"} item={"Paper Tissues & Napkins"} />

            </div>

            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1613668788_min33_webmini.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1619106965_wm.jpg" alt="" /></a> </div>
            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1614274485_15wm.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620309565_wm.jpg" alt="" /></a> </div>

            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622126985_webmini.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620487957_detergentwebmini.jpg" alt="" /></a> </div>

            </div>


            <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Offers on Groceries</p>
            <div style={{ width: "90%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#bce1fe"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/188/thumb/breakfast-cereals-20200603.png"} item={"Breakfast Cereals"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 15% OFF"} url={"https://www.jiomart.com/images/category/117/thumb/dairy-20200522.png"} item={"Dairy"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 30% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/0-17.png"} item={"Dry Fruits"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/15/thumb/0-15.png"} item={"Masalas & Spices"} />

            </div>
            <div style={{ width: "90%", margin: "auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#bce1fe"} offer={"UP TO 40% OFF"} url={"https://www.jiomart.com/images/category/135/thumb/0-135.png"} item={"Snacks & Namkeen"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/25/thumb/0-25.png"} item={"Fruit juices"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/26/thumb/0-26.png"} item={"Energy & Soft Drinks"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 25% OFF"} url={"https://www.jiomart.com/images/category/221/thumb/papads-ready-to-fry-20200520.png"} item={"Papads, Ready To Fry"} />

            </div>

            <p style={{ marginLeft: "5%", padding: "16px 16px 8px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Collection with Best Offers</p>

            <div style={{ width: "90%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/509.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/579.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/507.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/516.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/527.png?v=1615910580"} />
            </div>
            <div style={{ width: "90%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/515.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/530.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/501.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/508.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/525.png?v=1615910580"} />
            </div>

            <p style={{ marginLeft: "5%", padding: "16px 16px 8px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Kid's Fashion</p>
            <div style={{ width: "90%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/246/587.png?v=1612275415"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/246/501.png?v=1612275415"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/246/533.png?v=1612275415"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/246/507.png?v=1612275415"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/246/549.png?v=1612275415"} />
            </div>

            <p style={{ marginLeft: "5%", padding: "16px 16px 8px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Women's Fashion</p>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%", borderRadius: "15px" }} src="https://www.jiomart.com/images/cms/section/category/174/579.png?v=1615911160" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%", borderRadius: "15px" }} src="https://www.jiomart.com/images/cms/section/category/174/530.png?v=1615911160" alt="" /></a> </div>

            </div>

            <div style={{ width: "95%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginBottom: "50px" }}>
                <WomenCard url={"https://www.jiomart.com/images/cms/section/category/174/527.png?v=1615911160"} item={"Tshirts"} />
                <WomenCard url={"https://www.jiomart.com/images/cms/section/category/174/495.png?v=1615911160"} item={"Salwars & Churidars"} />
                <WomenCard url={"https://www.jiomart.com/images/cms/section/category/174/578.png?v=1615911160"} item={"Tops"} />
                <WomenCard url={"https://www.jiomart.com/images/cms/section/category/174/580.png?v=1615911160"} item={"Trousers & Pants"} />
                <WomenCard url={"https://www.jiomart.com/images/cms/section/category/174/572.png?v=1615911160"} item={"Shirts"} />
            </div>


            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623255276_web.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623424093_wm.jpg" alt="" /></a> </div>
            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623424093_wm.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623769900_wm.jpg" alt="" /></a> </div>
            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623849148_wm.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623849385_saniwm.jpg" alt="" /></a> </div>
            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623423184_wm.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620674046_wm.jpg" alt="" /></a> </div>
            </div>
            <div className={style.offerDivTwo}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1607437940_buybig_webmini.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1623848340_wm.jpg" alt="" /></a> </div>
            </div>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Smartphones For Every Budget</p>
            <div style={{ width: "100%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664544343_Flagship_Smartphones.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664544343_Below_9999.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664544350_10k-29k.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664544399_above_30k.jpg"} />
            </div>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Smartphone Accessories</p>
            <div style={{ width: "100%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664544521_Powerbanks.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664450395_Mobile_cables_chargers.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664450433_Mobile_screen_protectors.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664450466_Mobile_case_and_covers.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664450493_Mobile_Holders.jpg"} />
            </div>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Trending Electronics</p>
            <HomeWrapper> <SliderNine /> </HomeWrapper>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Tyohar Ready Deals</p>
            <HomeWrapper> <SliderEight /> </HomeWrapper>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Dhamaka Deals</p>
            <div style={{ width: "100%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018231_1.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018211_2.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018222_3.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018241_4.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018261_5.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018250_6.jpg"} />
            </div>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Fast & Feast</p>
            <HomeWrapper> <SliderSeven /> </HomeWrapper>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>One Shop For All Your Aarti Needs</p>
            <div style={{ width: "100%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663836100_TRS_Puja-Needs_UI-01.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663836354_TRS_Puja-Needs_UI-02.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663836384_TRS_Puja-Needs_UI-03.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663836495_TRS_Puja-Needs_UI-04.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663836675_TRS_Puja-Needs_UI-05.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663941471_TRS_Puja-Needs_UI-06_Carousel.jpg"} />
            </div>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Deep Clean Your Home</p>
            <div style={{ width: "100%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663946764_1.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663946777_2.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663946793_3.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663946813_4.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663946830_5.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663946845_6.jpg"} />
            </div>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Last Minute Festive Buys</p>
            <HomeWrapper> <Slidersix /> </HomeWrapper>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>A to Z for Mom & Baby</p>
            <div style={{ width: "100%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454786_Diaper_Wipes.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454830_Infant_Carriers_Walkers_Strollers.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454863_Toys_Baby_Gift_Sets.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454897_Blankets_Quilts_Wrappers.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454930_Bath_Skincare.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454967_Baby_Food.jpg"} />
            </div>
            <div style={{ width: "100%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664456078_GIFTSE_1.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664458926_TSHIRT_1.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664459017_SAREES_1.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664459087_Footwear.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664459146_FASHIO_1.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664459240_Kidswear.jpg"} />
            </div>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Go Glam For Dandiya Nights</p>
            <HomeWrapper> <Sliderfive /> </HomeWrapper>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Trending electronics To Gift This Season</p>
            <HomeWrapper> <Sliderfour /> </HomeWrapper>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Prioritize Health This Festive Season</p>
            <div style={{ width: "100%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664555800_Sports_Nurtrition_Desktop.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454253_Health_Suppliments.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454278_Herbal.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454302_Femine_Hygiene.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454374_Oral_Care.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454398_Adult_Diapers.jpg"} />
            </div>
            <p className="heardertext" style={{ marginLeft: "5%", padding: "20px 16px 1px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Pet Care Essentials</p>
            <div style={{ width: "100%", margin: "15px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453249_Grooming.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453321_Food_Treats.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453345_Walking.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453366_Cat_litter.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453387_Bowls.jpg"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453413_Beds.jpg"} />
            </div>
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1663832288_TRS_Gift_Banner_1680-X-320_100kb.jpg"} />
        </>
    )
}

export default LandingPage;
