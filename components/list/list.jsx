import React from 'react';
import styles from "@/styles/blogList.module.css";
import {CalendarOutlined, HomeOutlined, UserOutlined} from "@ant-design/icons";
import Button from "@/components/button/button";
import Link from "next/link";

const List = () => {
    return (
        <div className={styles.containerBlog}>
            <div className={styles.item}>
                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png" alt='chi bacum'/>
                <div className={styles.itemSpan}>
                    <span className={styles.spanUser}><UserOutlined/></span>
                    <span className={styles.spanBy}>By</span>
                    <span className={styles.spanDavit}>David William</span>
                    <span className={styles.spanCleander}><CalendarOutlined/></span>
                    <span className={styles.spanJanuary}>January 25 2024</span>
                    <span className={styles.spanCleander}><CalendarOutlined/></span>
                    <span className={styles.spanDate}>5 Comments</span>
                    <h2 className={styles.seaside}>Seaside Serenity: Coastal Getaways for Sun, Sand, and Surf</h2>
                    <p className={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aut
                        quisquam! Eaque sit cumque iusto non laborum eos, vitae dolor sapiente eligendi distinctio
                        explicabo quis facere nulla sint sed quisquam aperiam possimus et. Autem, esse.</p>
                        <Link href={`/rightDetalis`}>
                            <Button > Read More</Button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default List;