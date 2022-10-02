import "./Slidertwo.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

export default function Sliderfour() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    let Categories = [
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664455981_Storage_Devices.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664456197_Printre.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664456261_Tabletas.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664456288_Desktop.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664456317_Oven.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664456343_Camera.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664456366_Router.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664456393_Trimmer.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664456430_Healthcare.jpg"],
    ]
    return (
        <div className="slidertwo">
            <Slider {...settings}>
                {Categories.map((el) => (<div>
                    <Link to={el[1]}>
                        <img style={{ width: "87%", margin: "0", height: "auto" }} src={el[0]} alt="" className="smallcardfour"/>
                    </Link>
                </div>))}
            </Slider>
        </div>
    );
}