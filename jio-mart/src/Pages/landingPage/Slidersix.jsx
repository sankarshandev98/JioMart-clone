import "./Slidertwo.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

export default function Slidersix() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    let Categories = [
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1663839171_1.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1663839328_2.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1663849445_Desktop_Carousel_3.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1663839419_5.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1663839522_7.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1663839563_8.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1663839609_9.jpg"],
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