import React from 'react';
import Item from "@/components/tours/item";
import  styles from "../../styles/tours.module.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ArrowRightOutlined} from "@ant-design/icons";

const Tours = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 20000
    };
    return (
        <div className={styles.container}>
            <h4>OUR TRIPS</h4>
            <h2>Feature Packages</h2>

            <div>
                <Slider {...settings}>
                    <div>
                        <Item/>
                    </div>
                    <div>
                        <Item/>
                    </div>
                    <div>
                        <Item/>
                    </div>
                    <div>
                        <Item/>
                    </div>
                    <div>
                        <Item/>
                    </div>
                    <div>
                        <Item/>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Tours;