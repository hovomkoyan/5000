import React from 'react';
import styles from "../../styles/blogList.module.css"
const ListVideo = () => {
    return (
        <div className={styles.containerVideo}>
            <div className={styles.containerItemVideo}>
                <video src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png" alt="eeee"/>
            </div>
        </div> 
    );
};

export default ListVideo;