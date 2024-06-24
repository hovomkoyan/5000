import React from "react";
import styles from "../../styles/sliders.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";
const Sliders = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        arrows:false
    };
    return (
        <div className={styles.container}>
            <Slider {...settings}>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        width={200}
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Sliders;