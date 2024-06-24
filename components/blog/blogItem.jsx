import React from 'react';
import { Avatar, Card } from 'antd';
import {
    ArrowRightOutlined,
    CheckSquareOutlined,
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
    UserOutlined
} from "@ant-design/icons";
import  styles from "../../styles/blog.module.css"
import Button from "@/components/button/button";

const { Meta } = Card;
const BlogItem = () => {
    return (
        <Card
            style={{ width: 420 }}
            cover={
                <img
                    alt="example"
                    src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-17.png"
                />
            }
        >
            <div className={styles.blogText}>
                <span className={styles.blogTextIcon}><UserOutlined /></span>
                <span className={styles.blogTextText}>David William</span>
                <span className={styles.blogTextIcons}><CheckSquareOutlined /></span>
                <span className={styles.blogTextText}>January 25 2024</span>
            </div>
            <div className={styles.blogTextPage}>
                <h2>Passage Perspectives: Discovering Cultures Through Travel</h2>
                <p>Embark on an odyssey of discovery with Odyssey Oasis, where every destination</p>
            </div>
            <div className={styles.blogButton}>
                <span className={styles.span}>Read More <ArrowRightOutlined /></span>
            </div>
        </Card>
    );
};

export default BlogItem;