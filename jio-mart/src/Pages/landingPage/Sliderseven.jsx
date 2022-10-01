import "./Slidertwo.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"

export default function SliderSeven() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    let Categories = [
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018779_1.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018787_2.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018796_3.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018818_4.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018826_5.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018834_6.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018875_7.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018883_8.jpg"],
        ["https://www.jiomart.com/images/cms/aw_rbslider/slides/1664018892_9.jpg"],
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