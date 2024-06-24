import React from 'react';
import styles from "../../styles/blogList.module.css"
const ListDiv = () => {
    return (
        <div className={styles.containerDiv}>
            <div className={styles.containerItem}>
                <div className={styles.containerItemText}>
                    <h4>The purpose of the patent system is to foster and encourage new inventions of usefulness.</h4>
                    <div className={styles.containerItemTextP}>
                        <p>Thomas Jefferson</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListDiv;