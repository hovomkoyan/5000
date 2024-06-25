import React from 'react';
import styles from "@/styles/blogList.module.css";
import Header from "@/components/layouts/header";
import {HomeOutlined} from "@ant-design/icons";
import Footer from "@/components/layouts/footer";
import ContactUs from "@/components/contactUs/contactUs";
import ContactWithUs from "@/components/contactWithUs/contactWithUs";
import ContactMap from "@/components/contactMap/contactMap";

const Index = () => {
    return (
        <>
            <div className={styles.box}>
                <Header/>
                <div className={styles.container}>
                    <div className={styles.containerText}>
                        <h1>Contact Us</h1>
                        <div className={styles.containerSpan}>
                            <span className={styles.spanHome}><HomeOutlined/> Tourigo </span>
                            <span className={styles.spanBorder}>-</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs/>
            <ContactWithUs/>
            <ContactMap/>
            <Footer/>

        </>
    );
};

export default Index;