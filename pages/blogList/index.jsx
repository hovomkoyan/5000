import React from 'react';
import  styles from "../../styles/blogList.module.css"
import Header from "@/components/layouts/header";
import {HomeOutlined} from "@ant-design/icons";
import List from "@/components/list/list";
import BlogList from "@/pages/blogList/index";
import SliderLIst from "@/components/sliderList/sliderLIst";
import Footer from "@/components/layouts/footer";
import ListDiv from "@/components/listDiv/listDiv";
import ListVideo from "@/components/listVideo/listVideo";
const Index = () => {
    return (
        <>
            <div className={styles.box}>
                <Header/>
                <div className={styles.container}>
                    <div className={styles.containerText}>
                        <h1>Blog List</h1>
                        <div className={styles.containerSpan}>
                            <span className={styles.spanHome}><HomeOutlined/> Tourigo </span>
                            <span className={styles.spanBorder}>-</span>
                            <span>Blog List</span>
                        </div>
                    </div>
                </div>
            </div>
            <List/>
            <SliderLIst/>
            <ListDiv/>
            {/*<ListVideo/>*/}
            <Footer/>
        </>
    );
};

export default Index;