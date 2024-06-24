import React from 'react';
import  styles from "../../styles/news.module.css"
const News = () => {
    return (
        <div className={styles.news}>
            <div>
                <div className={styles.newsText}>
                    <h4>TESTIMONIALS</h4>
                    <h2>Customers Feedback</h2>
                </div>
                <div className={styles.item}>
                    <img src='https://html.bdevs.net/tourigo-prv/assets/images/testimonial/testimonial-img-2.png'
                         alt='chi bana'/>
                </div>
            </div>
            <div className={styles.newsRight}>
                <div className={styles.newsRightText}>
                    <p>Visiting Machu Picchu was an absolute dream come true! The ancient ruins are truly
                        mesmerizing, and the views are breathtaking.</p>
                    <div className={styles.borderimg}>
                        <img src='https://html.bdevs.net/tourigo-prv/assets/images/client/01.png' alt='chi bana'/>
                        <div className={styles.borderimgText}>
                            <h6>Elon Mask</h6>
                            <p>CEO,DOGE,COIN</p>
                        </div>
                    </div>
                </div>
                <div className={styles.newsRightTexts}>
                    <p>Santorini is a slice of heaven on Earth! The white-washed buildings against the
                        backdrop of
                        the azure Aegean Sea create a picture-perfect setting.</p>
                    <div className={styles.borderimgs}>
                        <img src='https://html.bdevs.net/tourigo-prv/assets/images/client/02.png' alt='chi bana'/>
                        <div className={styles.borderimgTexts}>
                            <h6>MichealAlert</h6>
                            <p>Service Holder</p>
                        </div>
                    </div>
                </div>
                <div className={styles.newsRightText2}>
                    <p>Kyoto is a city that seamlessly blends tradition with modernity. The temples,
                        shrines, and
                        gardens are simply exquisite.</p>
                    <div className={styles.borderimg2}>
                        <img src='https://html.bdevs.net/tourigo-prv/assets/images/client/03.png' alt='chi bana'/>
                        <div className={styles.borderimgText2}>
                            <h6>EiolaJ.Farr</h6>
                            <p>Business man</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;