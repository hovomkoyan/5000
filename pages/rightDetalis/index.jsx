import React from 'react';
import styles from "@/styles/detalis.module.css";
import Header from "@/components/layouts/header";
import {HomeOutlined} from "@ant-design/icons";
import RightDetalis from "@/components/rightDetalis/rightDetalis";
import Footer from "@/components/layouts/footer";



const Index = () => {
    return (
        <>
            <div className={styles.box}>
                <Header/>
                <div className={styles.container}>
                    <div className={styles.containerText}>
                        <h1>Blog Details Right</h1>
                        <div className={styles.containerSpan}>
                            <span className={styles.spanHome}><HomeOutlined/> Tourigo </span>
                            <span className={styles.spanBorder}>-</span>
                            <span>Blog List</span>
                        </div>
                    </div>
                </div>
            </div>
            <RightDetalis/>
            <Footer/>
        </>

    );
};

export default Index;