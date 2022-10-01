import "./Slidertwo.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

export default function SliderNine() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    let Categories = [
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453089_Home_care_appliances.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453124_Television.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453227_Smartwatches.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453315_Laptops_Accessories.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453360_Audio_Devices.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453406_Grooming_Personal_Care.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453434_Washing_Machine.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453460_Mixer_Grinder.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453489_Refrigerators.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453596_Monitors_Desktops.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453643_Air_Conditioners.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664453684_Camera_Accessories.jpg"],
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