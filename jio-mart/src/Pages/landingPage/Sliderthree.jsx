import "./Slidertwo.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliderthree() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    let Categories = [
        ["https://www.jiomart.com/images/category/6/thumb/0-6.png?v=1607022291", "Personal Care"],
        ["https://www.jiomart.com/images/category/7/thumb/0-7.png?v=1607022291", "Home Care"],
        ["https://www.jiomart.com/images/category/10/thumb/0-10.png?v=1607022291", "Baby Care"],
        ["https://www.jiomart.com/images/category/13/thumb/staples-20200710.jpg?v=1607022291", "Staples"],
        ["https://www.jiomart.com/images/category/11/thumb/0-11.png?v=1607022291", "Snacks & Branded Foods"],
        ["https://www.jiomart.com/images/category/12/thumb/0-12.png?v=1607022291", "Dairy & Bakery"],
        ["https://www.jiomart.com/images/category/141/thumb/fruits-vegetables-20200520.png?v=1607022291", "Fruites & Vegetables"],
        ["https://www.jiomart.com/images/category/3/thumb/0-3.png?v=1607022291", "Beverages"],
    ]
    return (
        <div className="slidertwo">
            <Slider {...settings}>
                {Categories.map((el) => (<div style={{ width: "190px", border: "1px solid black" }} className="sliderthree">
                    <a href="">
                        <div style={{ width: "180px", height: "230px", border: "1px solid rgba(111,114,132,.25)", borderRadius: "5px", display: 'flex', alignItems: "center", flexDirection: "column" }}>
                            <img style={{ width: "150px", margin: "auto", height: "150px" }} src={el[0]} alt="" />
                            <p style={{ textAlign: "center", fontSize: "15px", color: "black", fontWeight: "bold" }}>{el[1]}</p>
                        </div>
                    </a>

                </div>))}
            </Slider>
        </div>
    );
}