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

            {/* <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>TOP DEAL</p>
            <HomeWrapper> <Slidertwo /> </HomeWrapper> */}

            <div className={style.offerDiv}>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622485247_Mobikwik_web_mobile.jpg" alt="" /></a> </div>
                <div className={style.offer}> <a href=""><img style={{ width: "100%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622731979_Simpl_web_mobile.jpg" alt="" /></a> </div>

            </div>

            <p style={{ marginLeft: "5%", padding: "8px 16px 16px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Offers on daily essentials</p>
            <div style={{ width: "90%", margin: "15px auto", display: "flex",flexWrap:"wrap", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#efd6da"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png"} item={"Dal & Pulses"} />
                <BannerCard itemUrl={"/staples/atta-flours-sooji"} color={"#efd6da"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/14/thumb/0-14.png"} item={"Atta, Flours & Sooji"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/18/thumb/0-18.png"} item={"Edibles Oils"} />
                <BannerCard color={"#efd6da"} offer={"UP TO 10% OFF"} url={"https://www.jiomart.com/images/category/20/thumb/0-20.png"} item={"Salt, Sugar & Jaggery"} />

            </div>
            <div style={{ width: "90%", margin: "auto", display: "flex",flexWrap:"wrap", justifyContent: "space-between", alignItems: "center" }}>
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
            <div style={{ width: "90%", margin: "15px auto", display: "flex",flexWrap:"wrap", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#c5f8c0"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/37/thumb/all-purpose-cleaners-20200603.png"} item={"All Purpose Cleaners"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 25% OFF"} url={"https://www.jiomart.com/images/category/43/thumb/detergent-bars-20200520.png"} item={"Detergent Bars"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/28/thumb/0-28.png"} item={"Feminine Hygiene"} />
                <BannerCard color={"#c5f8c0"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/feminine-hygiene-20200605.png"} item={"Skin Care"} />

            </div>
            <div style={{ width: "90%", margin: "auto", display: "flex",flexWrap:"wrap", justifyContent: "space-between", alignItems: "center" }}>
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
            <div style={{ width: "90%", margin: "15px auto", display: "flex",flexWrap:"wrap", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#bce1fe"} offer={"UP TO 20% OFF"} url={"https://www.jiomart.com/images/category/188/thumb/breakfast-cereals-20200603.png"} item={"Breakfast Cereals"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 15% OFF"} url={"https://www.jiomart.com/images/category/117/thumb/dairy-20200522.png"} item={"Dairy"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 30% OFF"} url={"https://www.jiomart.com/images/category/17/thumb/0-17.png"} item={"Dry Fruits"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/15/thumb/0-15.png"} item={"Masalas & Spices"} />

            </div>
            <div style={{ width: "90%", margin: "auto", display: "flex",flexWrap:"wrap", justifyContent: "space-between", alignItems: "center" }}>
                <BannerCard color={"#bce1fe"} offer={"UP TO 40% OFF"} url={"https://www.jiomart.com/images/category/135/thumb/0-135.png"} item={"Snacks & Namkeen"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/25/thumb/0-25.png"} item={"Fruit juices"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 50% OFF"} url={"https://www.jiomart.com/images/category/26/thumb/0-26.png"} item={"Energy & Soft Drinks"} />
                <BannerCard color={"#bce1fe"} offer={"UP TO 25% OFF"} url={"https://www.jiomart.com/images/category/221/thumb/papads-ready-to-fry-20200520.png"} item={"Papads, Ready To Fry"} />

            </div>

            <p style={{ marginLeft: "5%", padding: "16px 16px 8px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Collection with Best Offers</p>

            <div style={{ width: "90%", margin: "15px auto", display: "flex",flexWrap:"wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/509.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/579.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/507.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/516.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/527.png?v=1615910580"} />
            </div>
            <div style={{ width: "90%", margin: "15px auto", display: "flex",flexWrap:"wrap", justifyContent: "space-between", alignItems: "center" }}>
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/515.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/530.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/501.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/508.png?v=1615910580"} />
                <SmallCard url={"https://www.jiomart.com/images/cms/section/category/291/525.png?v=1615910580"} />
            </div>

            <p style={{ marginLeft: "5%", padding: "16px 16px 8px 4px", fontSize: "22px", color: "#000", fontFamily: "Arial", fontWeight: "bold" }}>Kid's Fashion</p>
            <div style={{ width: "90%", margin: "15px auto", display: "flex",flexWrap:"wrap", justifyContent: "space-between", alignItems: "center" }}>
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

            <div style={{ width: "95%", margin: "15px auto", display: "flex",flexWrap:"wrap", justifyContent: "space-between", alignItems: "center",marginBottom:"50px" }}>
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
        </>
    )
}

export  {LandingPage}
