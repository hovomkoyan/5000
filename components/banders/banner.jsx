import React from 'react';
import  styles from "../../styles/banner.module.css"
import {ArrowRightOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";
import Slider from "react-slick";
6
import Button from "@/components/button/button";


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:true,
        verticalSwiping:true,
        swipeToSlide: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 20000
    };
    return (
        <div className={styles.banner}>
            <div className={styles.bannerContainer}>
                <div className={styles.section}>
                    <div className={styles.contentSection}>
                        <h4>WELCOME TOURIGO</h4>
                        <h1>Explore Uncover Hidden Gems Worldwide</h1>
                        <p>Share the core values and principles that drive your company. Emphasize a commitment to
                            costume.</p>
                        <Button type={`orange`} >Knew me</Button>
                        <div className={styles.socials}>
                            <ul>
                                <li><FacebookOutlined/></li>
                                <li><InstagramOutlined/></li>
                                <li><YoutubeOutlined/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`${styles.section} section`}>
                    <Slider {...settings}>
                        <div>
                            <img
                                src="https://html.bdevs.net/tourigo-prv/assets/images/banner/banner-4/banner-four-img-3.png"
                                alt=""/>
                        </div>
                        <div>
                            <img
                                src="https://html.bdevs.net/tourigo-prv/assets/images/banner/banner-4/banner-four-img-1.png"
                                alt=""/>
                        </div>
                        <div>
                            <img
                                src="https://html.bdevs.net/tourigo-prv/assets/images/banner/banner-4/banner-four-img-2.png"
                                alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Banner;