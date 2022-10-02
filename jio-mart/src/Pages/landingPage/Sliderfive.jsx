import "./Slidertwo.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

export default function Sliderfive() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    let Categories = [
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664458899_Pre_Makeup_Skincare.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664458964_Base_Face_Makeup.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664458981_Eye_Makeup.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664459006_Lipsticks.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664459026_Hair_Styling_Tools.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664459046_Fragrances.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664459068_Hair_Care.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664459088_Bathing_Essentials.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664459112_Skincare.jpg"],
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