import "./Slidertwo.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

export default function SliderEight() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    let Categories = [
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454106_Smartphone.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664544585_Audio_Gears.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664544634_Kitchen_Appiances.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454206_Rice_Combo.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454216_Detergents.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454234_Soad__Shampoos.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454250_Biscutes__Coockies.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454267_Beverages_Drinks.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454289_Hygiene_Health_Prsonal_Care.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454370_Beauty.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664454388_Clothing___Footware_Accessories.jpg"],
    ]
    return (
        <div className="slidertwo">
            <Slider {...settings}>
                {Categories.map((el) => (<div>
                    <Link to={el[1]}>
                        <img style={{ width: "87%", margin: "0", height: "auto" }} src={el[0]} alt="" className="smallcardfour" />
                    </Link>
                </div>))}
            </Slider>
        </div>
    );
}