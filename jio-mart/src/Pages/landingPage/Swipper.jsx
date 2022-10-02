// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664554979_Iphone_desktop.jpg"
                        alt="First slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664470366_television_desktop.jpg"
                        alt="Second slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664470419_Home_Kitchen_desktop.jpg"
                        alt="Third slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664555046_Furniture_fest_Desktop.jpg"
                        alt="Fourth slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664470625_Refrigerator_desktop.jpg"
                        alt="Five slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664522816_Sweets_desktop.jpg"
                        alt="Six slide"
                    /></SwiperSlide><SwiperSlide> <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664522825_Dry_Fruits_desktop.jpg"
                        alt="Seven slide"
                    /></SwiperSlide><SwiperSlide><img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664470845_Kitchenware_desktop.jpg"
                        alt="Eight slide"
                    /></SwiperSlide><SwiperSlide> <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664470884_Beauty_desktop.jpg"
                        alt="Nine slide"
                    /></SwiperSlide><SwiperSlide> <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664447415_Killer_Deal.jpg"
                        alt="Ten slide"
                    /></SwiperSlide><SwiperSlide> <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664447379_Mom__Baby_Care.jpg"
                        alt="Eleven slide"
                    /></SwiperSlide><SwiperSlide> <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664470912_Diary_Circle_desktop.jpg"
                        alt="Twelve slide"
                    /></SwiperSlide><SwiperSlide> <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664470948_Home__Living_Desktop.jpg"
                        alt="Thirteen slide"
                    /></SwiperSlide><SwiperSlide> <img
                        className="d-block w-100"
                        src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1664447443_Top_Brands.jpg"
                        alt="Fourteen slide"
                    /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}