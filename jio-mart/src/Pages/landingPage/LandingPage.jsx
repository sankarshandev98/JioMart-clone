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
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664448196_Slim_Banner.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664448249_Bank_Banner.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664550457_PC_Thematic-Banner_1680x320_30-09-22.jpg"} />
            <Banner url={"https://www.jiomart.com/images/cms/aw_rbslider/slides/1664448687_Image_3.jpg"} />
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
