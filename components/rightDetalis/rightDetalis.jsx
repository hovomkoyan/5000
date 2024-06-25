import React from 'react';
import  styles from "../../styles/detalis.module.css"
import {CalendarOutlined, MessageOutlined} from "@ant-design/icons";
import Input from "antd/es/input/Input";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const RightDetalis = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    };
    return (
        <div className={styles.detalis}>
            <div className={styles.detalisLeft}>
                <div className={styles.item}>
                    <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png" alt='chi bacum'/>
                    <div className={styles.detalisText}>
                        <h3>Patent War Iconic Legal Battles of That Protect Shaped lead.</h3>
                        <div className={styles.borderImg}>
                            <img src='https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-author.png' alt='sss'/>
                            <span className={styles.borderImgBy}>By</span>
                            <span className={styles.ellen}>EllenaM.Rice </span>
                            <span className={styles.cleandr}><CalendarOutlined/></span>
                            <span className={styles.date}>Mar18,2028 </span>
                            <span className={styles.cleandr}><MessageOutlined/></span>
                            <span className={styles.date}>02Comments</span>

                        </div>
                    </div>
                </div>
                <div className={styles.containerDiv}>
                    <div className={styles.containerItem}>
                        <div className={styles.containerItemText}>
                            <h4>The purpose of the patent system is to foster and encourage new inventions of
                                usefulness.</h4>
                            <div className={styles.containerItemTextP}>
                                <p>Thomas Jefferson</p>
                            </div>
                        </div>

                    </div>
                </div>
                    <div className={styles.item}>
                        <Slider {...settings}>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                        </Slider>
                        <div className={styles.detalisText}>
                            <h3>Patent Process</h3>
                            <div className={styles.borderTextP}>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet</p>
                                <p>sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                                <p>Vestibulum auctor ornare leo, non suscipit magna interdum eu.</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={styles.detalisInput}>
                <div className={styles.detalisInputBorder}>
                    <h6>Search Here</h6>
                    <div className={styles.input}>
                        <Input type="text" value="" required="" name="s" placeholder="Search"/>
                    </div>
                    <div className={styles.bottom}></div>
                    <div className={styles.recent}>
                        <h6>Recent Post</h6>
                        <div className={styles.recentItem}>
                            <div className={styles.recentImg}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-14.png"
                                     alt="chi bacum"/>
                                <div className={styles.recentImgText}>
                                    <h6>Trekker'sTales:Navigating </h6>
                                    <h6> the World's Wonders</h6>
                                    <span className={styles.recentImgTextSpans}><CalendarOutlined/></span>
                                    <span className={styles.recentImgTextSpan}> Mar 18, 2028</span>
                                </div>
                            </div>
                            <div className={styles.recentImg}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-14.png"
                                     alt="chi bacum"/>
                                <div className={styles.recentImgText}>
                                    <h6>Trekker'sTales:Navigating </h6>
                                    <h6> the World's Wonders</h6>
                                    <span className={styles.recentImgTextSpans}><CalendarOutlined/></span>
                                    <span className={styles.recentImgTextSpan}> Mar 18, 2028</span>
                                </div>
                            </div>
                            <div className={styles.recentImg}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-14.png"
                                     alt="chi bacum"/>
                                <div className={styles.recentImgText}>
                                    <h6>Trekker'sTales:Navigating </h6>
                                    <h6> the World's Wonders</h6>
                                    <span className={styles.recentImgTextSpans}><CalendarOutlined/></span>
                                    <span className={styles.recentImgTextSpan}> Mar 18, 2028</span>
                                </div>
                            </div>
                            <div className={styles.bottoms}></div>
                            <div className={styles.recentCategories}>
                                <h6>Categories</h6>
                                <div className={styles.destination}>
                                    <div className={styles.destinationText}>
                                        <span>destination</span>
                                        <span>(02)</span>
                                    </div>
                                </div>
                                <div className={styles.destination}>
                                    <div className={styles.destinationText}>
                                        <span>Adventure</span>
                                        <span>(04)</span>
                                    </div>
                                </div>
                                <div className={styles.destination}>
                                    <div className={styles.destinationText}>
                                        <span>Solo Travel</span>
                                        <span>(02)</span>
                                    </div>
                                </div>
                                <div className={styles.destination}>
                                    <div className={styles.destinationText}>
                                        <span>Cultural</span>
                                        <span>(05)</span>
                                    </div>
                                </div>
                                <div className={styles.destination}>
                                    <div className={styles.destinationText}>
                                        <span>Luxury</span>
                                        <span>(03)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.bottoms}></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightDetalis;