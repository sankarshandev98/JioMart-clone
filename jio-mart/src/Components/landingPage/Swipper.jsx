import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


export default function App() {



    return (
        <>
            <div className="Slider">
                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    <SwiperSlide><img
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622558692_web.jpg"
                        alt="First slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622820897_All_day_comfort_web.jpg"
                        alt="Second slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622655783_Home_page_banner_web.jpg"
                        alt="Third slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622821020_kids_wear_web.jpg"
                        alt="Fourth slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622550434_dairy_delights_web_main.jpg"
                        alt="Five slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622821216_womens_wear_web.jpg"
                        alt="Six slide"
                    /></SwiperSlide><SwiperSlide> <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1622482833_web.jpg"
                        alt="Seven slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620826904_w.jpg"
                        alt="Eight slide"
                    /></SwiperSlide><SwiperSlide> <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620488590_riceweb.jpg"
                        alt="Nine slide"
                    /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}