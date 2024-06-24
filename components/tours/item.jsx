import React from 'react';
import {ArrowRightOutlined, EditOutlined, EllipsisOutlined, HeartOutlined, SettingOutlined} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import styles from "@/styles/blog.module.css";

const { Meta } = Card;

const Item = () => {
    return (
        <Card
            style={{ width: 320 }}
            cover={
                <img
                    alt="example"
                    src="https://html.bdevs.net/tourigo-prv/assets/images/tour/tour-img-16.png"
                />
            }
            actions={[
                <div className={styles.blogButton} key="blogButton">
                    <span className={styles.span}  key="span">Read More <ArrowRightOutlined /></span>
                </div>,
                <span style={{ fontSize: '18px' }} key="heartIcon">
                    <HeartOutlined />
                </span>
            ]}
        >
            <div>
                <h3>Cultural
                    Odyssey Unveiling Heritage &amp; Traditions</h3>
                <h4>20000AMD</h4>
          </div>
        </Card>
    );
};

export default Item;